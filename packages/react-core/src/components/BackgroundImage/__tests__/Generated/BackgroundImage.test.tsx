/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { BackgroundImage } from '../../BackgroundImage';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('BackgroundImage should match snapshot (auto-generated)', () => {
  const view = render(<BackgroundImage className={"''"} src={'string'} />);
  expect(view.container).toMatchSnapshot();
});
