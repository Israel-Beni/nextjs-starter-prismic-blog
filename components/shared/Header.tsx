import React from "react";
import Navigation from "./Navigation";

import type { ReactChildrenNode } from "@/types";

function Header(): JSX.Element {
    return (
        <header className="header">
            {/* @ts-expect-error Server Component */}
            <Navigation />
        </header>
    )
}

export default Header;