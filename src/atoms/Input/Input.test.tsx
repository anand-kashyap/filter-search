import { render, screen } from '@testing-library/react';
import { Input, InputProps } from './Input';

describe('Atom/Input', () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      label: 'Label for Input',
      handleChange: jest.fn,
      id: 'input2',
    };
  });

  test('renders Input', () => {
    render(<Input {...props} />);

    const element = screen.getByText(props.label);
    expect(element).toBeInTheDocument();
  });
});
