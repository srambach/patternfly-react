/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModal } from '../../AboutModal';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('AboutModal should match snapshot (auto-generated)', () => {
  const view = render(
    <AboutModal
      children={<div>ReactNode</div>}
      className={"''"}
      isOpen={false}
      onClose={(): any => undefined}
      productName={"''"}
      trademark={"''"}
      brandImageSrc={'string'}
      brandImageAlt={'string'}
      backgroundImageSrc={"''"}
      noAboutModalBoxContentContainer={false}
      appendTo={null}
    />
  );
  expect(view.container).toMatchSnapshot();
});
