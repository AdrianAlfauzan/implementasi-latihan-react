import Button from "../Elements/Button/Button";

const FormLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Email", e.target.Email.value);
    localStorage.setItem("Password", e.target.Password.value);
    window.location.href = "/beranda";
  };
  return (
    <div className="flex flex-col items-center " onSubmit={handleSubmit}>
      <form className="flex flex-col gap-10 border py-10">
        <input type="text" placeholder="Email" name="Email" />
        <input type="password" placeholder="Password" name="Password" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default FormLogin;
