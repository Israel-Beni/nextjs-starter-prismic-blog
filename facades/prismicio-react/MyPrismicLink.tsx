import React, { FC } from 'react';
import { PrismicLink } from '@prismicio/react';

import type { LinkField } from '@prismicio/client';

interface MyPrismicTextProps {
    field: LinkField;
};

/**
 * MyPrismicText Component
 *
 * The `MyPrismicText` component is a facade component that provides a simplified interface for rendering text content
 * using the `PrismicText` component from the `@prismicio/react` library.
 *
 * @component
 */
function MyPrismicLink({field, ...restProps}: MyPrismicTextProps ): JSX.Element {
    return <PrismicLink field={field} {...restProps} />;
}

export default MyPrismicLink;