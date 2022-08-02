const Button = (props) => {
  return (
    <button className={props.styles} type={props.type}>
      {props.children}
    </button>
  );
};
export default Button;
