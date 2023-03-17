import { ChangeEventHandler, ComponentType, FormEvent, useCallback, useState } from 'react';
import { Input } from '../../atoms/Input/Input';
import styles from './withInputFilter.module.scss';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const filterStrings = (arr: string[], val: string) => arr.filter((item) => item.toLowerCase().startsWith(val)); // lowercasing and checking item string starting with val

export function withInputFilter(GenericListComponent: ComponentType<any>, dataArr: any[]) {
  const displayName = GenericListComponent.displayName || GenericListComponent.name || 'Component'; // for devtools

  const CompWithInputFilter = () => {
    const [itemsArr, setItemsArr] = useState(dataArr);

    const filterItems = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
      const inputVal = e.target.value;
      const newItems = filterStrings(dataArr, inputVal);

      setItemsArr(newItems);
    }, []);

    return (
      <form onSubmit={handleSubmit} className={styles.inputFilterForm}>
        <Input label='Filter By: ' handleChange={filterItems} />
        <div role='alert' className={styles.itemCount}>
          {itemsArr.length} item(s) found
        </div>
        <GenericListComponent data={itemsArr} />
      </form>
    );
  };

  CompWithInputFilter.displayName = `withInputFilter${displayName}`;

  return CompWithInputFilter;
}
