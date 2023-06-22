import React, { FC } from 'react';
import { PrismicText } from '@prismicio/react';

import type { RichTextField } from '@prismicio/client';

interface MyPrismicTextProps {
    field: RichTextField;
};

/**
 * MyPrismicText Component
 *
 * The `MyPrismicText` component is a facade component that provides a simplified interface for rendering text content
 * using the `PrismicText` component from the `@prismicio/react` library.
 *
 * @component
 */
function MyPrismicText({field, ...restProps}: MyPrismicTextProps ): JSX.Element {
    return <PrismicText field={field} {...restProps} />;
}

export default MyPrismicText;