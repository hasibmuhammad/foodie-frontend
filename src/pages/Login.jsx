import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  const { signIn, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const notify = () => toast.success("Logged in successfully!");

  const handleSignIn = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email) {
      setError("You must provide email");
      return;
    }
    if (!password) {
      setError("You must provide password");
      return;
    }

    // Sign In
    signIn(email, password)
      .then((res) => {
        if (res.user) {
          notify();
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 3000);
        }
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        if (res.user) {
          notify();
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 3000);
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSignIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          {error && <p className="text-error">{error}</p>}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-primary text-white hover:bg-black"
            >
              Sign In
            </button>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn btn-outline hover:bg-black"
            >
              <FaGoogle />
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center py-5">
          <p>
            Do not have an account?{" "}
            <Link className="underline" to={"/register"}>
              Register Now
            </Link>
          </p>
        </div>
      </div>
      <ScrollRestoration />
      <ToastContainer />
    </div>
  );
};

export default Login;
