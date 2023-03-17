import { ChangeEventHandler, memo } from 'react';
import styles from './Input.module.scss';

export type InputProps = {
  id?: string;
  label: string;
  handleChange: ChangeEventHandler;
};

export function Input({ label, id = 'input1', handleChange }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='text' onChange={handleChange} />
    </div>
  );
}

export const MemoizedInput = memo(Input);
