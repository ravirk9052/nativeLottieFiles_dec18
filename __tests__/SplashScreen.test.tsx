import React from 'react';
import {expect, it} from '@jest/globals';
import SplashScreen from '../src/Screens/SplashScreen';
import {render, screen} from '@testing-library/react-native';

// const createTestProps = (props: Object) => ({
//   navigation: {
//     navigate: jest.fn()
//   },
//   ...props
// })

// jest.mock('react-native-', () => )


it('renders splash screen correctly', () => {
  render(<SplashScreen />);

  const lottieViewIDText = screen.getByTestId('lottieViewID');
  //   console.log('13===>',lottieViewIDText)

  expect(lottieViewIDText).toBeDefined();
});
