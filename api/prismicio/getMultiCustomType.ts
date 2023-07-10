import 'server-only';
import { createMyClient } from '@/facades';
import { ReusableTypeDocument } from '@/types';

export const getMultiCustomType = async (documentType: 'page' | 'article' | 'menu_item' | 'blogpost', params?: any): Promise<ReusableTypeDocument[] | null> => {
    const client = createMyClient();

    try {
        const documents: ReusableTypeDocument[] = await client.getAllByType(documentType, params);
        return documents;
    } catch (error) {
        console.error('error occurred:', error);
        return null
    }
}