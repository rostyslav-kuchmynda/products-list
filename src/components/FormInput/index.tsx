import classes from './styles.module.scss';

type FormType = {
  htmlFor: string;
  label: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
  className?: string;
};

export const FormInput: React.FC<FormType> = ({ htmlFor, label, type, onChange, value, className, ...restProps }) => (
  <div className={classes.formInputWrap}>
    <label htmlFor={htmlFor}>{label}</label>
    <input
      id={htmlFor}
      name={htmlFor}
      type={type}
      onChange={onChange}
      value={value}
      className={className}
      {...restProps}
    />
  </div>
);
