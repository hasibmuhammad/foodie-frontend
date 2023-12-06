import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { signUp, updateInfo } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Toast
  const notify = () => toast.success("Registration Successfull!");

  // Handle Sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (!name.length > 0) {
      setError("Please provide your name.");
      return;
    }

    const emailReg = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    if (!emailReg.test(email)) {
      setError("Pleaes Enter a valid email!");
      return;
    }
    if (!password) {
      setError("Please provide password!");
      return;
    }
    if (!(password.length >= 6)) {
      setError("Password must be at least 6 characters!");
      return;
    }

    if (!/[a-z]/g.test(password)) {
      setError("Password must includes lowercase character");
      return;
    }
    if (!/[A-Z]/g.test(password)) {
      setError("Password must includes uppercase character");
      return;
    }
    const specialReg = /(?=.*[!@#$%^&*])/g;
    if (!specialReg.test(password)) {
      setError("Password must includes special characters(i.e: !@#$%^&*)");
      return;
    }

    signUp(email, password)
      .then((res) => {
        if (res.user) {
          notify();
          updateInfo(res.user, {
            displayName: res.user.displayName ? res.user.displayName : name,
            photoURL: res.user.photoURL
              ? res.user.photoURL
              : "https://i.imgur.com/dLxxRDy.png",
          })
            .then(() => {
              form.reset();
              setTimeout(() => {
                navigate(location?.state ? location.state : "/");
              }, 2000);
            })
            .catch();
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn bg-primary text-white hover:bg-black">
              Register
            </button>
          </div>
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link className="underline" to={"/login"}>
                Login Now
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ScrollRestoration />
      <ToastContainer />
    </div>
  );
};

export default Register;
