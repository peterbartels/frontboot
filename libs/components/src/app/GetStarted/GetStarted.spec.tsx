import { render } from '@testing-library/react';

import GetStarted from './GetStarted';

describe('GetStarted', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetStarted onSelectProject={() => null} />);
    expect(baseElement).toBeTruthy();
  });
});
