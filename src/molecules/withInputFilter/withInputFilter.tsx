import { ChangeEventHandler, FormEvent, useCallback, useState } from 'react';
import { Input } from '../../atoms/Input/Input';
import styles from './withInputFilter.module.scss';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export function withInputFilter(GenericListComponent: React.ComponentType<any>, dataArr: any[]) {
  const displayName = GenericListComponent.displayName || GenericListComponent.name || 'Component'; // for devtools

  const CompWithInputFilter = () => {
    const [itemsArr, setItemsArr] = useState(dataArr);

    const filterItems = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
      const inputVal = e.target.value;
      const newItems = dataArr.filter((item) => item.toLowerCase().startsWith(inputVal)); // lowercasing and checking item string starting with input val

      setItemsArr(newItems);
    }, []);

    return (
      <form onSubmit={handleSubmit} className={styles.inputFilterForm}>
        <Input label='Filter By: ' handleChange={filterItems} />
        <p className={styles.itemCount}>{itemsArr.length} item(s) found</p>
        <GenericListComponent data={itemsArr} />
      </form>
    );
  };

  CompWithInputFilter.displayName = `withInputFilter${displayName}`;

  return CompWithInputFilter;
}
