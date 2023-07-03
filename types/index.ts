import { AuthorDocument, NavigationDocument, AllDocumentTypes } from "@/prismicio-types";
import { ReactNode } from "react";
import { isObject } from "@/utils";

// Interfaces
interface ReactChildrenNode {
    children: React.ReactNode;
}


// Types
type SingleTypeDocument = AuthorDocument | NavigationDocument | null;
type ReusableTypeDocument = Exclude<AllDocumentTypes, SingleTypeDocument>


// Type guard functions
/**
 * A type guard function to check if an object respects the structure of a particular interface.
 * @param obj The object to be checked.
 * @param structure The structure representing the expected interface.
 * @returns A boolean indicating whether the object matches the structure.
 * @example checkObjectStructure<AuthorDocument>(author, {} as AuthorDocument)
 */
const checkObjectStructure = <T>(obj: unknown, structure: T): obj is T => {
    if (typeof obj !== "object" || obj === null) return false;

    for (const key in structure) {
        if (!(key in obj)) return false;

        const structureValue = structure[key];
        const objValue = (obj as Record<string, unknown>)[key];

        if (typeof structureValue === "object" && structureValue !== null) {
            if (!checkObjectStructure(objValue, structureValue)) return false;
        }
    }

    return true;
}

export type {
    // Interfaces
    ReactChildrenNode,

    // Types
    SingleTypeDocument,
    ReusableTypeDocument,
};


// Type guard functions
export { checkObjectStructure }