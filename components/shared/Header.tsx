import React from "react";
import styles from "@/assets/styles/components/header.module.scss";
import Navigation from "./Navigation";
import Author from "./Author";
import Line from "../non-shared/Line";

export interface HeaderProps {
    params: {
        slug: string;
    };
}

function Header({ params }: HeaderProps): JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* @ts-expect-error Server Component */}
                <Navigation />
                {/* @ts-expect-error Server Component */}
                <Author />
                {params.slug && (params.slug === "about" || params.slug === 'contact-me') && <Line />}
            </div>
        </header>
    );
}

export default Header;
