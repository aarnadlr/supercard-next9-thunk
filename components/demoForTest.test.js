/* eslint-env jest */

// import React from 'react';
import { render } from '@testing-library/react';
import DemoForTest from './demoForTest';


describe('Demo With React Testing Library', () => {
  it('says hi', () => {
    const { getByText } = render(<DemoForTest />);

    expect(getByText('yo')).not.toBeNull();
  });
});


describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const { asFragment } = render(<DemoForTest />);

    expect(asFragment()).toMatchSnapshot();
  });
});
