import React from "react";
import Link from "next/link";
import { MyPrismicLink } from "@/facades";
import styles from "@/assets/styles/components/articleListing.module.scss";
import { libre_baskerville } from "@/utils/fonts";

function ArticleListing(): JSX.Element {
    return (
        <li className={styles.articlesListing}>
            <Link
                className={styles.imageArea}
                tabIndex={-1}
                href="/articles/hiking-through-the-woods"
            >
                <div className={styles.imageWrapper}>
                    <img
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className={styles.image}
                        sizes="100vw"
                        srcSet="https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=640&fit=max 640w, https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=750&fit=max 750w, https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=828&fit=max 828w, https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=1080&fit=max 1080w, https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=1200&fit=max 1200w, https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=1920&fit=max 1920w, https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=2048&fit=max 2048w, https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=3840&fit=max 3840w"
                        src="https://images.prismic.io/nextjs-starter-prismic-blog/fb66c550-06ee-406b-8be3-06ac639f7bb0_laura-kennedy-VVUOodsIwj4-unsplash.jpg?auto=compress%2Cformat&rect=0%2C1404%2C3744%2C2808&w=3840&fit=max"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                        }}
                    />
                </div>
            </Link>
            <div className={styles.textArea}>
                <h2 className={styles.title}>
                    <Link href="/articles/hiking-through-the-woods">
                        Hiking through the woods
                    </Link>
                </h2>
                <p className={`${libre_baskerville.className} ${styles.publishDate}`}>Apr 12, 2022</p>
                <p className={`${libre_baskerville.className}  ${styles.description}`}>
                    This is Rich Text, which includes both external links and
                    links to internal documents. Links should be handled
                    intelligently or everything might break. Don&lsquo;t forget
                    about media, too! Do your best to render images using an
                    HTML Serializer. As you know hiking can be a very fulfilling
                    orem ipsum dolor…
                </p>
            </div>
        </li>
    );
}

export default ArticleListing;
