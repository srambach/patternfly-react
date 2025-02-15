import * as React from 'react';
import { FormFieldGroup } from '../FormFieldGroup';
import { FormFieldGroupExpandable } from '../FormFieldGroupExpandable';
import { FormFieldGroupHeader } from '../FormFieldGroupHeader';
import { Button } from '../../Button';
import { render } from '@testing-library/react';

test('Check form field group example against snapshot', () => {
  const FieldGroup = (
    <FormFieldGroup
      header={
        <FormFieldGroupHeader
          titleText={{text:"Field group 4 (non-expandable)", id:"title-text-id1"}}
          titleDescription="Field group 4 description text."
          actions={<Button />}
        />
      }
    />
  );
  const view = render(FieldGroup);
  expect(view.container).toMatchSnapshot();
});

test('Check expandable form field group example against snapshot', () => {
  const FieldGroup = (
    <FormFieldGroupExpandable
      isExpanded
      toggleAriaLabel="toggle"
      header={
        <FormFieldGroupHeader
          titleText={{text:"Field group 4 (non-expandable)", id:"title-text-id2"}}
          titleDescription="Field group 4 description text."
          actions={<Button />}
        />
      }
    />
  );
  const view = render(FieldGroup);
  expect(view.container).toMatchSnapshot();
});

test('Verify console error logged when there is no aria-label or title', () => {
  const consoleErrorMock = jest.fn();
  global.console = { error: consoleErrorMock } as any;
  const FieldGroup = (
    <FormFieldGroupExpandable
      isExpanded
      header={
        <FormFieldGroupHeader
          titleDescription="Field group 4 description text."
          actions={<Button />}
        />
      }
    />
  );
  const view = render(FieldGroup);
  expect(consoleErrorMock).toBeCalled();
});
