import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} /> {/* input 속성들 다 넣어줌 */}
    </div>
  );
};

export default Input;
