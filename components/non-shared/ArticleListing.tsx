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
    console.log("slices", slices);
    const image = articleData.thumbnail.url
        ? articleData.thumbnail
        : slices.find((slice) => slice.slice_type === "image_block")?.primary
              .image;
    let description: string = "";
    slices.forEach((slice) => {
        console.log('slice type', slice.slice_type);
        if (
            description.length < 299 &&
            slice.slice_type === "paragragh" &&
            isFilled.richText(slice.primary.text as RichTextField)
        )
            description.concat(asText(slice.primary.text as RichTextField));
        description.substring(299);
    });

    console.log('description', description);

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
                        Hiking through the wood
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
                    This is Rich Text, which includes both external links and
                    links to internal documents. Links should be handled
                    intelligently or everything might break. Don&#39;t forget
                    about media, too! Do your best to render images using an
                    HTML Serializer. As you know hiking can be a very fulfilling
                    orem ipsum dolor…
                </p>
            </div>
        </li>
    );
}

export default ArticleListing;
