import React from 'react';
import { render } from '@testing-library/react-native';
import Subtitle from './index';

describe('Subtitle', () => {
  it('should render the component if a text prop is provided', () => {
    const { getByText } = render(<Subtitle text='Hello' />);
    expect(getByText('Hello')).not.toBeNull();
  });
});
