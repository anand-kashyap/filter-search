import { render, screen } from '@testing-library/react';
import sampleJSON from '../../sample.json';
import { List, ListProps } from './List';

describe('Atom/List', () => {
  let props: ListProps;

  beforeEach(() => {
    props = {
      data: sampleJSON.data,
    };
  });

  test('renders List', () => {
    render(<List {...props} />);

    const listItemEl = screen.queryByText(sampleJSON.data[3]);
    expect(listItemEl).toBeInTheDocument();
  });

  test('renders nothing if empty data', () => {
    render(<List data={[]} />);

    const listItemEl = screen.queryByText(sampleJSON.data[0]);
    expect(listItemEl).not.toBeInTheDocument();
  });
});
