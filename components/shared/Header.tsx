import React from "react";
import styles from "@/assets/styles/components/header.module.scss";
import Navigation from "./Navigation";

import type { ReactChildrenNode } from "@/types";

function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            {/* @ts-expect-error Server Component */}
            <Navigation />
        </header>
    )
}

export default Header;