import { AuthorDocument, NavigationDocument, AllDocumentTypes } from "@/prismicio-types";
import { ReactNode } from "react";

// Interfaces
interface ReactChildrenNode {
    children: React.ReactNode;
}


// Types 
type SingleTypeDocument = AuthorDocument | NavigationDocument;
type ReusableTypeDocument = Exclude<AllDocumentTypes, SingleTypeDocument>


export type {
    // Interfaces
    ReactChildrenNode,
    // Types
    SingleTypeDocument,
    ReusableTypeDocument,
};