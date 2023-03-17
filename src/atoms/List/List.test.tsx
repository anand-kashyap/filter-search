import { render } from '@testing-library/react';
import { List } from './List';

test('renders List', () => {
  const { container } = render(<List data={['apple']} />);
  expect(container).toBeInTheDocument();
});
