import { ChangeEventHandler, FormEvent, useState } from 'react';
import { Input } from '../../atoms/Input/Input';
import styles from './withInputFilter.module.scss';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export function withInputFilter(GenericListComponent: any, dataArr: any[]) {
  return () => {
    const [itemsArr, setItemsArr] = useState(dataArr);

    const filterItems: ChangeEventHandler<HTMLInputElement> = (e) => {
      const inputVal = e.target.value;
      const newItems = dataArr.filter((item) => item.toLowerCase().startsWith(inputVal)); // lowercasing and checking item string starting with input val

      setItemsArr(newItems);
    };

    return (
      <form onSubmit={handleSubmit} className={styles.inputFilterForm}>
        <Input label='Filter By: ' handleChange={filterItems} />
        <p className={styles.itemCount}>{itemsArr.length} item(s) found</p>
        <GenericListComponent data={itemsArr} />
      </form>
    );
  };
}
