import styles from './Input.module.scss';

type InputProps = {
  id?: string;
  label: string;
};

export function Input({ label, id = 'input1' }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='text' />
    </div>
  );
}
