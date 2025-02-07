/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalContainer } from '../../AboutModalContainer';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('AboutModalContainer should match snapshot (auto-generated)', () => {
  const view = render(
    <AboutModalContainer
      children={<div>ReactNode</div>}
      className={"''"}
      isOpen={false}
      onClose={() => undefined}
      productName={"''"}
      trademark={'string'}
      brandImageSrc={'string'}
      brandImageAlt={'string'}
      backgroundImageSrc={'string'}
      aria-labelledby={'string'}
      aria-describedby={'string'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
