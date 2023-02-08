import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeInput {
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'email'
    | 'date'
    | 'datetime-local'
    | 'file'
    | 'hidden'
    | 'password'
    | 'radio'
    | 'submit'
    | 'text';
  placeholder?: string;
  label?: boolean;
  id?: string;
  title?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
}

function Input({ type = 'text', placeholder, label, id, title, onChange, required, value }: PropsTypeInput) {
  return (
    <div className={cx('wrapper')}>
      {label && (
        <label
          className={cx('label', {
            required: required,
          })}
          htmlFor={id}
        >
          {title}
        </label>
      )}
      <input
        value={value}
        id={id}
        className={cx('input')}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
