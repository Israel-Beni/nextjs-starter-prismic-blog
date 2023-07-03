import React, { FC } from 'react';
import { PrismicRichText } from '@prismicio/react';

import type { RichTextField } from '@prismicio/client';

interface MyPrismicRichTextProps {
    field: RichTextField;
};

/**
 * MyPrismicRichText Component
 *
 * The `MyPrismicRichText` component is a facade component that provides a simplified interface for rendering text content
 * using the `PrismicRichText` component from the `@prismicio/react` library.
 *
 * @component
 */
function MyPrismicRichText({field, ...restProps}: MyPrismicRichTextProps ): JSX.Element {
    return <PrismicRichText field={field} {...restProps} />;
}

export default MyPrismicRichText;