import { render } from '@testing-library/react';
import { FilterableInput } from './FilterableInput';

test('renders FilterableInput', () => {
  const { container } = render(<FilterableInput />);
  expect(container).toBeInTheDocument();
});
