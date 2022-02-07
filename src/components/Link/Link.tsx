import NextLink, { LinkProps } from 'next/link';
import { FC } from 'react';

const Link: FC<LinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...anchorProps
}) => {
  return (
    <NextLink
      {...{
        href,
        as,
        replace,
        scroll,
        shallow,
        prefetch: process.env.JEST_WORKER_ID !== undefined ? false : prefetch,
        locale,
      }}
    >
      <a {...anchorProps}>{children}</a>
    </NextLink>
  );
};

export default Link;
