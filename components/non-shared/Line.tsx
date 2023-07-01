"use client";
import React from "react";
import styles from "@/assets/styles/components/line.module.scss";
import { usePathname } from "next/navigation";

function Line({ show = false }): JSX.Element {
    const pathname = usePathname();
    return show || pathname === "/about" || pathname === "/contact-me" ? (
        <hr className={styles.line} />
    ) : (
        <></>
    );
}

export default Line;
