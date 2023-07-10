import 'server-only';
import { createMyClient } from '@/facades';
import { ReusableTypeDocument } from '@/types';

export const getReusableCustomType = async (documentType: 'page' | 'article' | 'menu_item' | 'blogpost', uid: string, params?: any): Promise<ReusableTypeDocument | null> => {
    const client = createMyClient();

    try {
        const document: ReusableTypeDocument = await client.getByUID(documentType, uid, params);
        return document;
    } catch (error) {
        console.error('error occurred:', error);
        return null
    }
}