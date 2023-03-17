import { FormEvent } from 'react';
import { Input } from '../../atoms/Input/Input';
import styles from './withInputFilter.module.scss';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export function withInputFilter(GenericListComponent: any, dataArr: any[]) {
  return () => {
    return (
      <form onSubmit={handleSubmit} className={styles.inputFilterForm}>
        <Input label='Filter By: ' />
        <GenericListComponent data={dataArr} />
      </form>
    );
  };
}
