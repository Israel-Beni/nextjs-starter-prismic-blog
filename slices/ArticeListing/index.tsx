import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ArticeListing`.
 */
export type ArticeListingProps =
  SliceComponentProps<Content.ArticeListingSlice>;

/**
 * Component for "ArticeListing" Slices.
 */
const ArticeListing = ({ slice }: ArticeListingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for artice_listing (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ArticeListing;
