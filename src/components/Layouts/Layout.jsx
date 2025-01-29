/* eslint-disable react/prop-types */
const Layout = (props) => {
  const { title } = props;
  return (
    <>
      <div className=" sm:text-red-500  flex flex-col  justify-center text-3xl text-black bg-slate-500 min-h-screen items-center">
        <h1 className="text-3xl font-bold underline mb-10">{title}</h1>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
