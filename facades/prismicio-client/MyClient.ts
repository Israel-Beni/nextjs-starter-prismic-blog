import { createClient } from "@/prismicio"
import type { CreateClientConfig } from "@prismicio/next"

export const MyClient = (config: CreateClientConfig = {}) => {
    return createClient(config);
}