import 'server-only';
import { createMyClient } from '@/facades';
import { SingleTypeDocument } from '@/types';

export const getSingleCustomType = async (uid: "author" | "navigation"): Promise<SingleTypeDocument | null> => {
    const client = createMyClient();

    try {
        const document: SingleTypeDocument = await client.getSingle(uid);
        return document;
    } catch (error) {
        console.error('error occurred', error);
        return null;
    }
};