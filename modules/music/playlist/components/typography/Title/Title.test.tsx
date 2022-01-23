import React from 'react';
import { render } from '@testing-library/react-native';
import Title from '.';

describe('Title', () => {
  it('should render the component if a text prop is provided', () => {
    const { getByText } = render(<Title text='Hello' />);
    expect(getByText('Hello')).not.toBeNull();
  });
});
