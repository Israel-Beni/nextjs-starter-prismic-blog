import 'server-only';
import { createMyClient } from '@/facades';
import { SingleTypeDocument } from '@/types';

export const getSingleCustomType = async (documentType: "author" | "navigation", params?: any): Promise<SingleTypeDocument | null> => {
    const client = createMyClient();

    try {
        const document: SingleTypeDocument = await client.getSingle(documentType, params);
        return document;
    } catch (error) {
        console.error('error occurred:', error);
        return null;
    }
};