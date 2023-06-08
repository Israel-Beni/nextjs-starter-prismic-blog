import React from "react";
import Navigation from "./Navigation";

import type { ReactChildrenNode } from "@/types";

function Header({ children }: ReactChildrenNode): JSX.Element {
    return (
        <header className="header">
            {children}
        </header>
    )
}

export default Header;