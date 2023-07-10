"use client";
import React from "react";
import Link from "next/link";
import { MyPrismicText, MyPrismicImage } from "@/facades";
import { libre_baskerville } from "@/utils/fonts";
import { usePathname } from "next/navigation";

import { AuthorDocumentData } from "@/prismicio-types";

interface AuthorJsxProps {
    styles: {
        [key: string]: string;
    };
    authorData: AuthorDocumentData;
}

function AuthorJsx({ styles, authorData }: AuthorJsxProps): JSX.Element {
    const pathname = usePathname();

    return pathname && !pathname.includes("/articles/") ? (
        <div className={styles.author}>
            <div className={styles.container}>
                <Link tabIndex={-1} href="/" className={styles.image_area}>
                    <div className={styles.image_wrapper}>
                        <MyPrismicImage field={authorData.profile_image} />
                    </div>
                </Link>
                <div className={styles.text_area}>
                    <h1 className={styles.name}>
                        <Link href="/">{authorData.name}</Link>
                    </h1>
                    <p
                        className={`${libre_baskerville.className} ${styles.description}`}
                    >
                        <MyPrismicText field={authorData.description} />
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
}

export default AuthorJsx;
