import React from "react";
import Link from "next/link";
import { MyPrismicLink, MyPrismicImage } from "@/facades";
import styles from "@/assets/styles/components/articleListing.module.scss";
import { libre_baskerville } from "@/utils/fonts";

import type { BlogpostDocumentData } from "@/prismicio-types";
import { ImageField, Slice } from "@prismicio/client";

interface ArticleListingProps {
    articleData: BlogpostDocumentData;
}

function ArticleListing({ articleData }: ArticleListingProps): JSX.Element {
    let slices: Slice[] = articleData?.slices ? articleData.slices : [];
    console.log("slices", slices);
    const image = articleData.thumbnail.url
        ? articleData.thumbnail
        : slices.find((slice) => {
              console.log("slice type", slice.slice_type);
              return slice.slice_type === "image_block";
          })?.primary.image;
    console.log("image", image);

    return (
        <li className={styles.articlesListing}>
            <Link
                className={styles.imageArea}
                tabIndex={-1}
                href="/articles/hiking-through-the-woods"
            >
                <div className={styles.imageWrapper}>
                    {image && (
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
                    </Link>
                </h2>
                <p
                    className={`${libre_baskerville.className} ${styles.publishDate}`}
                >
                    Apr 12, 2022
                </p>
                <p
                    className={`${libre_baskerville.className} ${styles.description}`}
                >
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
