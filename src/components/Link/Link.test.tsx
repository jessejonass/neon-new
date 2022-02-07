import { screen, render } from 'utils/rtl';

import Link from '.';

it('should be rendering with provided children', () => {
  const testHref = '/test';
  const childrenText = 'Teste';
  render(<Link href={testHref}>{childrenText}</Link>);

  const anchorEl = screen.getByRole('link', { name: childrenText });

  expect(anchorEl).toBeInTheDocument();
  expect(anchorEl).toHaveAttribute('href', testHref);
});
