import Image from "next/image";
import styles from "@/assets/styles/pages/homepage.module.scss";
import { createMyClient } from "@/facades";
import { logKeyAndType } from "@/utils";
import { PageDocument } from "@/prismicio-types";
import ArticleListing from "@/components/non-shared/ArticleListing";

export default async function Home() {
    const client = createMyClient();
    const page = await client.getByUID("page", "about");
    const menuItem = await client.getByUID("menu_item", "articles");

    return (
        <div className={styles.appOuterContainer}>
            <div className={styles.appInnerContainer}>
              <ul className={styles.articlesList}>
                <ArticleListing />
                {/* <ArticleListing /> */}
              </ul>
            </div>
        </div>
    );
}
