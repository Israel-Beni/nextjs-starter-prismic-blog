import React from "react";
import styles from "@/assets/styles/components/author.module.scss";
import { getSingleCustomType } from "@/api";

import { AuthorDocument } from "@/prismicio-types";
import { SingleTypeDocument, checkObjectStructure } from "@/types";
import AuthorJsx from "../non-shared/AuthorJsx";

async function Author(): Promise<JSX.Element> {
    const author: SingleTypeDocument = await getSingleCustomType("author");

    return checkObjectStructure<AuthorDocument>(
        author,
        {} as AuthorDocument
    ) ? (
        <AuthorJsx styles={styles} authorData={author.data} />
    ) : (
        <></>
    );
}

export default Author;
