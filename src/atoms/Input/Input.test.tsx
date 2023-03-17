import { fireEvent, render, screen } from '@testing-library/react';
import { Input, InputProps } from './Input';

describe('Atom/Input', () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      label: 'Label for Input',
      handleChange: jest.fn(),
      id: 'input2',
    };
  });

  test('renders Input', () => {
    render(<Input {...props} />);

    const element = screen.getByLabelText(props.label);
    expect(element).toBeInTheDocument();
  });

  test('handleChange is called when input changes', () => {
    render(<Input {...props} />);

    const inputEl = screen.getByLabelText<HTMLInputElement>(props.label);
    fireEvent.change(inputEl, { target: { value: 'alg' } });

    expect(props.handleChange).toBeCalled();
  });
});
