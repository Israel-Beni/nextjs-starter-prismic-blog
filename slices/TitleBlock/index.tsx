import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "@/assets/styles/components/titleBlock.module.scss";
import {  MyPrismicText } from "@/facades";
import { libre_baskerville as lb } from "@/utils/fonts";

/**
 * Props for `TitleBlock`.
 */
export type TitleBlockProps = SliceComponentProps<Content.TitleBlockSlice>;

/**
 * Component for "TitleBlock" Slices.
 */
const TitleBlock = ({ slice }: TitleBlockProps): JSX.Element => {
    return (
        <section
            className={styles.titleBlock}
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className={`${lb.className} ${styles.outerContainer}`}>
                <div className={styles.innerContainer}>
                    <MyPrismicText field={slice.primary.title} />
                </div>
            </div>
        </section>
    );
};

export default TitleBlock;
