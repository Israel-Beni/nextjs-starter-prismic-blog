import React from "react";
import styles from "@/assets/styles/components/latestArticles.module.scss";
import Line from "./Line";
import { getMultiCustomType } from "@/api";
import TitleAndDate from "./TitleAndDate";

async function LatestArticles(): Promise<JSX.Element> {
    const last3Articles =
        (await getMultiCustomType("blogpost", {
            orderings: {
                field: "my.blogpost.publish_date",
                direction: "desc",
            },
            pageSize: 3,
        })) || [];

    return (
        <div className={styles.latestArticles}>
            <div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <Line show />
                    <div className={styles.text}>
                        <h1 className={styles.title}>Latest articles</h1>
                        <ul className={styles.list}>
                            {last3Articles.length > 0 &&
                                last3Articles.map(
                                    (article, i) =>
                                        article?.data &&
                                        "title" in article.data &&
                                        "publish_date" in article.data && (
                                            <TitleAndDate
                                                title={article.data.title}
                                                publishDate={
                                                    article.data.publish_date
                                                }
                                                key={i}
                                            />
                                        )
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestArticles;
