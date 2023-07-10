import { createClient } from "@/prismicio"
import type { CreateClientConfig } from "@prismicio/next";

export const createMyClient = (config: CreateClientConfig = {}) => {
    const accessToken = process.env.PRISMIC_ACCESS_TOKEN;
    return createClient({...config, accessToken: `${accessToken}`});
}