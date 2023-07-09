import styles from "@/assets/styles/pages/homepage.module.scss";
import { BlogpostDocument } from "@/prismicio-types";
import ArticleListing from "@/components/non-shared/ArticleListing";
import { getMultiCustomType } from "@/api";
import { checkObjectStructure } from "@/types";

export default async function Home() {
    const articles =
        (await getMultiCustomType("blogpost", {
            orderings: {
                field: "my.blogpost.publish_date",
                direction: "desc",
            },
        })) || [];

    return (
        <div className={styles.appOuterContainer}>
            <div className={styles.appInnerContainer}>
                <ul className={styles.articlesList}>
                    {articles.length > 0 &&
                        articles.map(
                            (article, i) =>
                                checkObjectStructure<BlogpostDocument>(
                                    article,
                                    {} as BlogpostDocument
                                ) && (
                                    <ArticleListing
                                        articleData={article.data}
                                        key={i}
                                    />
                                )
                        )}
                </ul>
            </div>
        </div>
    );
}
