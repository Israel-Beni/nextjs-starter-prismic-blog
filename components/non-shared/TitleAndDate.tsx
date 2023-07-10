import React from "react";
import { MyPrismicText } from "@/facades";
import styles from "@/assets/styles/components/titleAndDate.module.scss";
import { libre_baskerville as lb } from "@/utils/fonts";
import { formateDate } from "@/utils";

import type { DateField } from "@prismicio/client";
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
