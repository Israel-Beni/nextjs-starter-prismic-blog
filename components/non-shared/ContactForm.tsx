"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import styles from "@/assets/styles/components/contactForm.module.scss";

function ContactForm(): JSX.Element {
    const pathname = usePathname();
    return pathname === "/contact-me" ? (
        <section className={styles.contactForm}>
            <div className={styles.container}>
                <form
                    action="/api/contact"
                    method="post"
                    className={styles.form}
                >
                    <label>
                        <span className={styles.label}>Name</span>
                        <input
                            name="name"
                            type="text"
                            required
                            placeholder="Jane Doe"
                            className={styles.field}
                        />
                    </label>
                    <label>
                        <span className={styles.label}>Email Address</span>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="jane.doe@example.com"
                            className={styles.field}
                        />
                    </label>
                    <label>
                        <span className={styles.label}>Message</span>
                        <textarea
                            name="message"
                            required
                            placeholder="Write your message here…"
                            className={styles.field}
                            style={{ height: "10rem" }}
                            defaultValue={""}
                        />
                    </label>
                    <button
                        type="submit"
                        className={styles.submit}
                    >
                        Send message{" "}
                        <span aria-hidden="true" className={styles.buttonText}>
                            →
                        </span>
                    </button>
                </form>
            </div>
        </section>
    ) : (
        <></>
    );
}

export default ContactForm;
