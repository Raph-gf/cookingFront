import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce, ToastContainer } from "react-toastify";
import { useAuth } from "../AuthContext";

function LoginPage() {
  const [user, setUser] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const notify = (message, type) => {
    toast[type](message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userConnexion = await axios.post(
        "http://localhost:4567/users/login",
        {
          headers: "Bearer " + token,
        }
      );
      setUser(userConnexion);
      console.log(userConnexion);

      setCredentials({ email: "", password: "" });
    } catch (error) {
      notify("Erreur de connexion");
    }
    navigate("/");
  };

  return (
    <div>
      <h1 className="loginTitle">Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={(e) => setCredentials(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={credentials.password}
            onChange={(e) => setCredentials(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default LoginPage;
