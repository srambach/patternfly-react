import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CardHeaderMain } from '../CardHeaderMain';

describe('CardHeaderMain', () => {
  test('renders with PatternFly Core styles', () => {
    render(<CardHeaderMain>text</CardHeaderMain>);
    expect(screen.getByText('text').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<CardHeaderMain className="extra-class">text</CardHeaderMain>);
    expect(screen.getByText('text').className).toContain('extra-class');
  });

  test('extra props are spread to the root element', () => {
    const testId = 'card-head-main';

    render(<CardHeaderMain data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
