import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [formData, setFormData] = useState({
    name: "",
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
        "http://localhost:5000/signup",
        formData
      );

      alert("Signup Successful!");
      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Signup Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            onChange={handleChange}
          />
        </div>

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

        <button className="btn btn-primary w-100">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
