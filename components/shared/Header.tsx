import React from "react";
import styles from "@/assets/styles/components/header.module.scss";
import Navigation from "./Navigation";
import Author from "./Author";


function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* @ts-expect-error Server Component */}
                <Navigation />
                {/* @ts-expect-error Server Component */}
                <Author />
            </div>
        </header>
    )
}

export default Header;