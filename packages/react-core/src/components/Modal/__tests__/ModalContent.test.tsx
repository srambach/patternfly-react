import * as React from 'react';
import { render } from '@testing-library/react';

import { ModalContent } from '../ModalContent';

const modalContentProps = {
  boxId: "boxId",
  labelId: "labelId",
  descriptorId: "descriptorId"
}
test('Modal Content Test only body', () => {
  const view = render(
    <ModalContent title="Test Modal Content title" isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view.container).toMatchSnapshot();
});

test('Modal Content Test isOpen', () => {
  const view = render(
    <ModalContent title="Test Modal Content title" isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view.container).toMatchSnapshot();
});

test('Modal Content Test description', () => {
  const view = render(
    <ModalContent title="Test Modal Content title" isOpen description="This is a test description." {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view.container).toMatchSnapshot();
});

test('Modal Content Test with footer', () => {
  const view = render(
    <ModalContent title="Test Modal Content title" isOpen actions={['Testing']} {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view.container).toMatchSnapshot();
});

test('Modal Content test without footer', () => {
  const view = render(
    <ModalContent title="Test Modal Content title" isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view.container).toMatchSnapshot();
});

test('Modal Content Test with onclose', () => {
  const view = render(
    <ModalContent
      title="Test Modal Content title"
      actions={['Testing footer']}
      variant="large"
      onClose={() => undefined}
      isOpen
      {...modalContentProps}
    >
      This is a ModalBox header
    </ModalContent>
  );
  expect(view.container).toMatchSnapshot();
});

test('Modal Test with custom header', () => {
  const header = <span id="test-custom-header">TEST</span>;

  const view = render(
    <ModalContent
      header={header}
      title="test-custom-header-modal"
      actions={['Testing footer']}
      variant="large"
      onClose={() => undefined}
      isOpen
      {...modalContentProps}
    >
      This is a ModalBox header
    </ModalContent>
  );
  expect(view.container).toMatchSnapshot();
});

test('Modal Test with custom footer', () => {
  const footer = <span id="test-custom-footer">TEST</span>;

  const view = render(
    <ModalContent footer={footer} title="Test Modal Custom Footer" variant="large" onClose={() => undefined} isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view.container).toMatchSnapshot();
});
