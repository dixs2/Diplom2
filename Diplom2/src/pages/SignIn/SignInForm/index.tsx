import "./index.scss";

export default function SingInForm() {
  return (
    <form className="sign-in-form">
      <div className="sign-in-form-name">
        <label className="sign-in-form-label">Name</label>
        <input type="text" className="sign-in-form-input" />
      </div>
      <div className="sign-in-form-password">
        <label className="sign-in-form-label">Password</label>
        <input type="password" className="sign-in-form-input" />
      </div>
      <a href="#" className="sign-in-form-link">
        Forgot your password?
      </a>
      <button className="sign-in-form-button" type="submit">
        Sing In
      </button>
      <span className="sign-in-form-text">
        If you don`t have an account:{" "}
        {
          <a href="#" className="sign-in-form-link">
            Register
          </a>
        }
      </span>
    </form>
  );
}
