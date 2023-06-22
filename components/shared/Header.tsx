import React from "react";
import styles from "@/assets/styles/components/header.module.scss";
import Navigation from "./Navigation";

import type { ReactChildrenNode } from "@/types";

function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* @ts-expect-error Server Component */}
                <Navigation />
            </div>
        </header>
    )
}

export default Header;