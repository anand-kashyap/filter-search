import styles from './List.module.scss';

type ListProps = {
  data: string[];
};

export function List({ data }: ListProps) {
  return (
    <ul className={styles.listContainer}>
      {data.map((dataItem, index) => (
        <li key={index}>{dataItem}</li>
      ))}
    </ul>
  );
}
