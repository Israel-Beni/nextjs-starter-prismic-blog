import React, { FC } from 'react';
import { PrismicNextLink } from '@prismicio/next';

import type { LinkField } from '@prismicio/client';

interface MyPrismicLinkProps {
    field: LinkField;
};

/**
 * MyPrismicLink Component
 *
 * The `MyPrismicLink` component is a facade component that provides a simplified interface for rendering text content
 * using the `PrismicNextImage` component from the `@prismicio/next` library.
 *
 * @component
 */
function MyPrismicLink({field, ...restProps}: MyPrismicLinkProps ): JSX.Element {
    return <PrismicNextLink field={field} {...restProps} />;
}

export default MyPrismicLink;