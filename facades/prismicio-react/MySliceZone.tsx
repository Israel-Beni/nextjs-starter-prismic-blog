import React, { FC } from 'react';
import { SliceZone } from '@prismicio/react';
import { components as allComponents} from '@/slices';

import type { Slice } from '@prismicio/client';

type Components = typeof allComponents;

interface MySliceZoneProps {
    components?: Components;
    slices: Slice[];
    context?: any; 
}

const MySliceZone: FC<MySliceZoneProps> = ({ components, context,  slices, ...restProps}) => {
    let finalComponents: Components;
    if (components) finalComponents = components;
    else finalComponents = allComponents;
    return (
        <SliceZone slices={slices} components={finalComponents} context={context} {...restProps} />
    )
};

export default MySliceZone;