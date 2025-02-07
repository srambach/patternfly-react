import * as React from 'react';
import { render } from '@testing-library/react';

import { ModalBoxBody } from '../ModalBoxBody';

test('ModalBoxBody Test', () => {
  const view = render(
    <ModalBoxBody id="id" className="test-box-class">
      This is a ModalBox header
    </ModalBoxBody>
  );
  expect(view.container).toMatchSnapshot();
});
