import { render, screen } from '@testing-library/react';
import { filterStrings, withInputFilter } from './withInputFilter';

describe('moelcules/withInputFilter HOC', () => {
  test('renders withInputFilter', () => {
    const Comp = withInputFilter(() => <p>Some</p>, []);

    render(<Comp />);
    const inputEl = screen.getByLabelText('Filter By:');

    expect(inputEl).toBeInTheDocument();
  });

  test('should filter strings', () => {
    expect(filterStrings([], '')).toEqual([]);

    const arr = ['apple', 'orange', 'app'];
    expect(filterStrings(arr, '')).toEqual(arr);

    expect(filterStrings(arr, 'apple')).toEqual(['apple']);
    expect(filterStrings(arr, 'app')).toEqual(['apple', 'app']);
  });
});
