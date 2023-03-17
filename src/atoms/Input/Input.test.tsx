import { render } from '@testing-library/react';
import { Input } from './Input';

test('renders Input', () => {
  const { container } = render(<Input label='dummy input' handleChange={jest.fn} />);
  expect(container).toBeInTheDocument();
});
