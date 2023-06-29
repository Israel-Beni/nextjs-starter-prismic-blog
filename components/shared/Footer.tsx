import React from "react";
import styles from '@/assets/styles/components/footer.module.scss';
import { MyPrismicText } from "@/facades";
import { libre_baskerville } from "@/utils/fonts";
import Link from "next/link";
import Line from "../non-shared/Line";

function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <Line />
                    <div className={styles.formWrapper}>
                        <form
                            action="/api/sign-up"
                            method="post"
                            className={styles.form}
                        >
                            <div className={styles.titleAndDescription}>
                                <h2 className={styles.title}>
                                    Follow my journey
                                </h2>
                                <p className={`${libre_baskerville.className} ${styles.description}`}>
                                    Get notified about updates and be the first to get early
                                    access to the new, safer, and smarter way to archive your
                                    files.
                                </p>
                            </div>
                            <div className={styles.formFieldsArea}>
                                <div style={{ position: 'relative'}}>
                                    <label>
                                        <span className={styles.emailFieldText}>Email address</span>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="jane.doe@example.com"
                                            required
                                            className={styles.emailFieldInput}
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className={styles.submit}
                                    >
                                        <span className={styles.submitText}>Submit</span>
                                        <span aria-hidden="true" className={styles.arrow}>→</span>
                                    </button>
                                </div>
                                <p className={styles.instruction}>
                                    By subscribing to our newsletter you accept to receive
                                    recurring emails about our product and company
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className={styles.credit}>
                        Proudly published using{" "}
                        <Link className={styles.link} href="https://prismic.io">
                            Prismic
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
