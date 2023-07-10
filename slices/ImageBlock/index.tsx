import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { MyPrismicImage } from "@/facades";
import styles from '@/assets/styles/components/imageBlock.module.scss';
import { libre_baskerville as lb } from "@/utils/fonts";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
    return (
        <section
            className={styles.imageBlock}
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className={styles.outerContainer}>
                <figure className={styles.innerContainer}>
                    <div className={styles.imageWrapper}>
                      <MyPrismicImage field={slice.primary.image} />
                    </div>
                    <figcaption className={`${lb.className} ${styles.captionWrapper}`}>
                        <p className={styles.captionText}>{slice.primary.caption}</p>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default ImageBlock;
