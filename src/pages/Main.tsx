import { List } from '../atoms/List/List';
import { withInputFilter } from '../molecules/withInputFilter/withInputFilter';
import sampleJSON from '../sample.json';

const FilteredInput = withInputFilter(List, sampleJSON.data);

export default function Main() {
  return (
    <main className='container'>
      <h1>Search HOC Demo</h1>
      <FilteredInput />
    </main>
  );
}
