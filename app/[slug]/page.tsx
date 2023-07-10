import React from "react";
import { MySliceZone } from "@/facades";
import { createMyClient } from "@/facades";
import { getReusableCustomType } from "@/api";

import { checkObjectStructure } from "@/types";
import type { PageDocument } from "@/prismicio-types";
import type { Slice } from "@prismicio/client";
import ContactForm from "@/components/non-shared/ContactForm";

interface SlugProps {
    params: {
        slug: string;
    };
}

async function Slug({ params }: SlugProps): Promise<JSX.Element> {
    const page = await getReusableCustomType("page", params.slug);
    let slices: Slice[] = [];
    if (checkObjectStructure<PageDocument>(page, {} as PageDocument))
        slices = page.data.slices;

    return (
        <>
            <MySliceZone slices={slices} />
            <ContactForm />
        </>
    );
}

export default Slug;
