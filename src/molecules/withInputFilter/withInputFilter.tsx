import { FormEvent } from 'react';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export function withInputFilter(GenericListComponent: any, dataArr: any[]) {
  return () => {
    return (
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <GenericListComponent data={dataArr} />
      </form>
    );
  };
}
