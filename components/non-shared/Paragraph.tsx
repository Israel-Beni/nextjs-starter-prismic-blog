import React from "react";
import styles from '@/assets/styles/components/paragraph.module.scss';
import { libre_baskerville } from "@/utils/fonts";

function Paragraph(): JSX.Element {
    return (
        <section className={styles.paragraph} >
            <div className={styles.outerContainer}>
                <div className={`${libre_baskerville.className} ${styles.innerContainer}`}>
                    <p className={styles.text}>
                        Hi, I’m Margaret. Welcome to my safe place where I write
                        about everything I find inspiring and you might find
                        too.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Paragraph;