import React from 'react';
import Link from 'next/link';
import styles from '@/assets/styles/components/author.module.scss';
import { getSingleCustomType } from '@/api';
import { MyPrismicText, MyPrismicLink, MyPrismicImage } from '@/facades';
import { libre_baskerville } from '@/utils/fonts';

import { AuthorDocument } from '@/prismicio-types';
import { SingleTypeDocument, checkObjectStructure } from '@/types';


async function Author(): Promise<JSX.Element> {
    const author: SingleTypeDocument  = await getSingleCustomType('author');

    return checkObjectStructure<AuthorDocument>(author, {} as AuthorDocument) ? (
        <div className={styles.author}>
            <div className={styles.container}>
                <Link tabIndex={-1} href="/" className={styles.image_area}>
                    <div className={styles.image_wrapper}>
                        <MyPrismicImage field={author?.data.profile_image} />
                    </div>
                </Link>
                <div className={styles.text_area}>
                    <h1 className={styles.name}>
                        <Link href="/">{author?.data.name}</Link>
                    </h1>
                    <p className={`${libre_baskerville.className} ${styles.description}`}>
                        <MyPrismicText field={author?.data.description} />
                    </p>
                </div>
            </div>
        </div>): <></>;
}

export default Author;