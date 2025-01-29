/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <button className="bg-slate-600 p-3 rounded-lg text-white" type="submit">
      {props.children}
    </button>
  );
};

export default Button;
