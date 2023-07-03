import React, { FC } from "react";
import { PrismicNextLink } from "@prismicio/next";

import type { LinkField } from "@prismicio/client";
import type { PrismicNextLinkProps } from "@prismicio/next";

interface MyPrismicLinkProps {
    field: LinkField;
}

/**
 * MyPrismicLink Component
 *
 * The `MyPrismicLink` component is a facade component that provides a simplified interface for rendering text content
 * using the `PrismicNextImage` component from the `@prismicio/next` library.
 *
 * @component
 */
const MyPrismicLink: FC<PrismicNextLinkProps> = ({
    field,
    // document,
    // href,
    // linkResolver,
    // rel,
    ...restProps
}) => {
    return (
        <PrismicNextLink
            field={field}
            // document={document}
            // href={href}
            // linkResolver={linkResolver}
            // rel={rel}
            {...restProps}
        />
    );
};

export default MyPrismicLink;
