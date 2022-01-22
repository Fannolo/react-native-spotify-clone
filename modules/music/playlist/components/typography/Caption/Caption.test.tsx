import { render } from '@testing-library/react-native';
import Caption from './Caption';

describe('Caption', () => {
  it('should render a text if a components has been passed to it', () => {
    const { getByText } = render(<Caption text={'hello'} />);
    expect(getByText('Hello')).not.toBeNull();
  });
});
