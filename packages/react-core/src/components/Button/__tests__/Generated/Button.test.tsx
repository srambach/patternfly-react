/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../../Button';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Button should match snapshot (auto-generated)', () => {
  const view = render(
    <Button
      children={<>ReactNode</>}
      className={"''"}
      component={'button'}
      isActive={false}
      isBlock={false}
      isDisabled={false}
      isAriaDisabled={false}
      inoperableEvents={['onClick', 'onKeyPress']}
      isInline={false}
      type={'button'}
      variant={'primary'}
      iconPosition={'left'}
      aria-label={'null'}
      icon={null}
      tabIndex={null}
    />
  );
  expect(view.container).toMatchSnapshot();
});
