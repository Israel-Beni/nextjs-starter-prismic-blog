import React, { FC } from 'react';
import { PrismicNextImage } from '@prismicio/next';

import type { ImageField } from '@prismicio/client';

interface MyPrismicImageProps {
    field: ImageField;
};

/**
 * MyPrismicImage Component
 *
 * The `MyPrismicImage` component is a facade component that provides a simplified interface for rendering text content
 * using the `PrismicNextImage` component from the `@prismicio/next` library.
 *
 * @component
 */
function MyPrismicImage({field, ...restProps}: MyPrismicImageProps ): JSX.Element {
    return <PrismicNextImage field={field} {...restProps} />;
}

export default MyPrismicImage;