const beranda = () => {
  const email = localStorage.getItem("Email");
  const password = localStorage.getItem("Password");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-red-500">
      <h1>Halo! Email saya : {email}</h1>
      <h1>Dan ini password saya : {password}</h1>
    </div>
  );
};

export default beranda;
