import React, { FC } from "react";
import { PrismicRichText } from "@prismicio/react";

import type { RichTextField } from "@prismicio/client";
import type { PrismicRichTextProps } from "@prismicio/react";
import { ReactChildrenNode } from "@/types";

/**
 * MyPrismicRichText Component
 *
 * The `MyPrismicRichText` component is a facade component that provides a simplified interface for rendering text content
 * using the `PrismicRichText` component from the `@prismicio/react` library.
 *
 * @component
 */
function MyPrismicRichText({
    field,
    components,
    ...restProps
}: PrismicRichTextProps): JSX.Element {
    return <PrismicRichText field={field} components={components} {...restProps} />;
}

export default MyPrismicRichText;
