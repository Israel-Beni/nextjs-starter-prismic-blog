import React, { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { MyPrismicLink } from '..'

import type { RichTextField } from "@prismicio/client";
import type { PrismicRichTextProps } from "@prismicio/react";
import { ReactChildrenNode } from "@/types";

/**
 * MyPrismicRichText Component
 *
 * The `MyPrismicRichText` component is a facade component that provides a simplified interface for rendering text content
 * using the `PrismicRichText` component from the `@prismicio/react` library.
 *
 * @component
 */
function MyPrismicRichText({
    field,
    components,
    ...restProps
}: PrismicRichTextProps): JSX.Element {
    return <PrismicRichText field={field} components={{...components, heading1: ({ children, key }) => <h1 key={key}>{children}</h1>,
    heading2: ({ children, key }) => <h2 key={key}>{children}</h2>,
    heading3: ({ children, key }) => <h3 key={key}>{children}</h3>,
    heading4: ({ children, key }) => <h4 key={key}>{children}</h4>,
    heading5: ({ children, key }) => <h5 key={key}>{children}</h5>,
    heading6: ({ children, key }) => <h6 key={key}>{children}</h6>,
    paragraph: ({ children, key }) => <p key={key}>{children}</p>,
    preformatted: ({ node, key }) => <pre key={key}>{node.text}</pre>,
    strong: ({ children, key }) => <strong key={key}>{children}</strong>,
    em: ({ children, key }) => <em key={key}>{children}</em>,
    listItem: ({ children, key }) => <li key={key}>{children}</li>,
    oListItem: ({ children, key }) => <li key={key}>{children}</li>,
    list: ({ children, key }) => <ul key={key}>{children}</ul>,
    oList: ({ children, key }) => <ol key={key}>{children}</ol>,
    image: ({ node, key }) => {
      const img = (
        <img
          src={node.url}
          alt={node.alt ?? undefined}
          data-copyright={node.copyright ? node.copyright : undefined}
        />
      )

      return (
        <p key={key} className='block-img'>
          {node.linkTo ? (
            <MyPrismicLink
              linkResolver={args.linkResolver}
              internalComponent={args.internalLinkComponent}
              externalComponent={args.externalLinkComponent}
              field={node.linkTo}
            >
              {img}
            </MyPrismicLink>
          ) : (
            img
          )}
        </p>
      )
    },
    embed: ({ node, key }) => (
      <div
        key={key}
        data-oembed={node.oembed.embed_url}
        data-oembed-type={node.oembed.type}
        data-oembed-provider={node.oembed.provider_name}
        dangerouslySetInnerHTML={{ __html: node.oembed.html ?? '' }}
      />
    ),
    hyperlink: ({ node, children, key }) => (
      <PrismicLink
        key={key}
        field={node.data}
        linkResolver={args.linkResolver}
        internalComponent={args.internalLinkComponent}
        externalComponent={args.externalLinkComponent}
      >
        {children}
      </PrismicLink>
    ),
    label: ({ node, children, key }) => (
      <span key={key} className={node.data.label}>
        {children}
      </span>
    ),
    span: ({ text, key }) => {
      const result: React.ReactNode[] = []

      let i = 0
      for (const line of text.split('\n')) {
        if (i > 0) {
          result.push(<br key={`${i}__break`} />)
        }
        result.push(
          <React.Fragment key={`${i}__line`}>{line}</React.Fragment>
        )
        i++
      }

      return <React.Fragment key={key}>{result}</React.Fragment>
    },}} {...restProps} />;
}

export default MyPrismicRichText;
