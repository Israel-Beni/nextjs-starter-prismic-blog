import React from "react";
import { MySliceZone, MyPrismicText } from "@/facades";
import { getReusableCustomType } from "@/api";

import { checkObjectStructure } from "@/types";
import type { PageDocument } from "@/prismicio-types";
import type { DateField, Slice } from "@prismicio/client";
import ContactForm from "@/components/non-shared/ContactForm";
import Link from "next/link";
import styles from "@/assets/styles/pages/articlesSlug.module.scss";
import { libre_baskerville as lb } from "@/utils/fonts";
import { formateDate } from "@/utils";

import type { ArticleDocumentData } from "@/prismicio-types";
import type { RichTextField } from "@prismicio/client";

interface TitleAndDateProps {
    title: RichTextField;
    publishDate: DateField;
}

function TitleAndDate({ title, publishDate }: TitleAndDateProps): JSX.Element {
    return (
        <div className={styles.titleAndDate}>
            <div className={styles.titleAndDateContainer}>
                <h1 className={styles.title}>
                    <MyPrismicText field={title} />
                </h1>
                <p className={`${lb.className} ${styles.publishDate}`}>
                    {formateDate(publishDate as string)}
                </p>
            </div>
        </div>
    );
}

export default TitleAndDate;
