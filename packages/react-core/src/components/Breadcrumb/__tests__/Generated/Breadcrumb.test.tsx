/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Breadcrumb } from '../../Breadcrumb';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Breadcrumb should match snapshot (auto-generated)', () => {
  const view = render(<Breadcrumb children={<>ReactNode</>} className={"''"} aria-label={"'Breadcrumb'"} />);
  expect(view.container).toMatchSnapshot();
});
