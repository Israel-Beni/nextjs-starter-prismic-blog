import React from "react";
import { MySliceZone, MyPrismicText } from "@/facades";
import { getReusableCustomType } from "@/api";

import { checkObjectStructure } from "@/types";
import type { PageDocument } from "@/prismicio-types";
import type { Slice } from "@prismicio/client";
import ContactForm from "@/components/non-shared/ContactForm";
import Link from "next/link";
import styles from "@/assets/styles/pages/articlesSlug.module.scss";
import { libre_baskerville as lb } from "@/utils/fonts";

import type { ArticleDocumentData } from "@/prismicio-types";
import { formateDate } from "@/utils";
import TitleAndDate from "@/components/non-shared/TitleAndDate";
import LatestArticles from "@/components/non-shared/LatestArticles";

interface SlugProps {
    params: {
        slug: string;
    };
}

async function Slug({ params }: SlugProps): Promise<JSX.Element> {
    const article = await getReusableCustomType("blogpost", params.slug);
    let slices: Slice[] = [];
    if (checkObjectStructure<PageDocument>(article, {} as PageDocument))
        slices = article.data.slices;

    return (
        <>
            <div className={styles.backOuterContainer}>
                <div className={styles.backInnerContainer}>
                    <Link className={styles.backLink} href="/">
                        ← Back to articles
                    </Link>
                </div>
            </div>
            <article>
                {article?.data &&
                    "title" in article.data &&
                    "publish_date" in article.data && (
                        <TitleAndDate
                            title={article.data.title}
                            publishDate={article.data.publish_date}
                        />
                    )}
                <MySliceZone slices={slices} />
            </article>
            {/* @ts-expect-error Server Component */}
            <LatestArticles />
        </>
    );
}

export default Slug;
