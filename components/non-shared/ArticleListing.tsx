import React from "react";
import Link from "next/link";
import { MyPrismicImage, MyPrismicText } from "@/facades";
import styles from "@/assets/styles/components/articleListing.module.scss";
import { libre_baskerville } from "@/utils/fonts";
import { RichTextField, asText, isFilled } from "@prismicio/client";

import type { BlogpostDocumentData } from "@/prismicio-types";
import { ImageField, Slice } from "@prismicio/client";
import { formateDate } from "@/utils";

interface ArticleListingProps {
    articleData: BlogpostDocumentData;
}

function ArticleListing({ articleData }: ArticleListingProps): JSX.Element {
    let slices: Slice[] = articleData?.slices ? articleData.slices : [];
    // Constructing the value of "image" variable
    const image = articleData.thumbnail.url
        ? articleData.thumbnail
        : slices.find((slice) => slice.slice_type === "image_block")?.primary
              .image;
    let description: string = "";
    // Construction the value of "description" variable
    slices.forEach((slice) => {
        const textObject = slice.primary.text as RichTextField;
        const text = asText(textObject);
        if (slice.slice_type === "paragraph" && isFilled.richText(textObject)) {
            description = description.concat(text).substring(0, 295);
            description.length > 294 &&
                (description = description.concat("..."));
        }
    });

    return (
        <li className={styles.articlesListing}>
            <Link
                className={styles.imageArea}
                tabIndex={-1}
                href="/articles/hiking-through-the-woods"
            >
                <div className={styles.imageWrapper}>
                    {isFilled.image(image as ImageField) && (
                        <MyPrismicImage
                            field={image as ImageField}
                            className={styles.image}
                        />
                    )}
                </div>
            </Link>
            <div className={styles.textArea}>
                <h2 className={styles.title}>
                    <Link href="/articles/hiking-through-the-woods">
                        {isFilled.richText(articleData.title) && (
                            <MyPrismicText field={articleData.title} />
                        )}
                    </Link>
                </h2>
                <p
                    className={`${libre_baskerville.className} ${styles.publishDate}`}
                >
                    {isFilled.date(articleData.publish_date) &&
                        formateDate(articleData.publish_date)}
                </p>
                <p
                    className={`${libre_baskerville.className} ${styles.description}`}
                >
                    {description}
                </p>
            </div>
        </li>
    );
}

export default ArticleListing;
