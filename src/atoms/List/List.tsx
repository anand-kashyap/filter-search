type ListProps = {
  data: string[];
};

export function List({ data }: ListProps) {
  return (
    <ul>
      {data.map((dataItem, index) => (
        <li key={index}>{dataItem}</li>
      ))}
    </ul>
  );
}
