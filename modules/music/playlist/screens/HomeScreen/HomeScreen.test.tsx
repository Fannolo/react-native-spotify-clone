import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import HomeScreen from '.';

const store = createMockStore()();
const renderHomeScreen = () =>
  render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>,
  );
describe('HomeScreen', () => {
  it('should render correctly the component', () => {
    renderHomeScreen();
  });
  it('should make a request to the backend', () => {
    renderHomeScreen();
  });
});
