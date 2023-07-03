import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { MyPrismicRichText } from "@/facades";
import styles from "@/assets/styles/components/paragraph.module.scss";
import { libre_baskerville } from "@/utils/fonts";

/**
 * Props for `Paragraph`.
 */
export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>;

/**
 * Component for "Paragraph" Slices.
 */
const Paragraph = ({ slice }: ParagraphProps): JSX.Element => {
    return (
        <section
            className={styles.paragraph}
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className={styles.outerContainer}>
                <div
                    className={`${libre_baskerville.className} ${styles.innerContainer}`}
                >
                    <MyPrismicRichText
                        field={slice.primary.text}
                        components={{
                            paragraph: ({ children }) => (
                                <p className={styles.text}>{children}</p>
                            ),
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Paragraph;
