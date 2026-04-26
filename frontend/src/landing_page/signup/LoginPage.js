import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        formData
      );

      alert("Login Successful!");
      navigate("/");

      // Save token
      localStorage.setItem("token", res.data.token);

    } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;