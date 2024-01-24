import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import { toast, Bounce, ToastContainer } from "react-toastify";

function UserForm() {
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
  const [newusers, setNewusers] = useState({
    name: { first: "", last: "" },
    email: "",
    zipcode: "",
    password: "",
  });
  const createUsers = async () => {
    try {
      console.log("first");
      const res = await axios.post(
        `http://localhost:4567/users/register`,
        newusers
      );
      setNewusers({
        name: { first: "", last: "" },
        email: "",
        zipcode: "",
        password: "",
      });
      notify("User successfully created!", "success");
    } catch (error) {
      console.log("Error creating user:", error);
      notify("Error creating user!", "error");
    }
  };

  return (
    <>
      <h2 className="useFormTiltle">Créer un nouvel utilisateur</h2>
      <form
        className="FormulaireNewUser"
        onSubmit={(e) => {
          e.preventDefault();
          createUsers();
        }}
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Prenom:
          </label>
          <input
            type="text"
            className="form-control"
            put
            id="firstName"
            aria-describedby="firstName"
            value={newusers.name.first}
            onChange={(e) =>
              setNewusers({
                ...newusers,
                name: { ...newusers.name, first: e.target.value },
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Nom de Famille:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="lastName"
            value={newusers.name.last}
            onChange={(e) =>
              setNewusers({
                ...newusers,
                name: { ...newusers.name, last: e.target.value },
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="Email"
            value={newusers.email}
            onChange={(e) =>
              setNewusers({
                ...newusers,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Zipcode" className="form-label">
            Zipcode:
          </label>
          <input
            type="number"
            className="form-control"
            id="Zipcode"
            aria-describedby="Zipcode"
            value={newusers.zipcode}
            onChange={(e) =>
              setNewusers({
                ...newusers,
                zipcode: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={newusers.password}
            onChange={(e) =>
              setNewusers({
                ...newusers,
                password: e.target.value,
              })
            }
          />
        </div>

        <div className="btn-userList">
          <button type="submit" className="btn btn-primary">
            Create User
          </button>
          <Link to="/users/all-users">
            <button type="text" className="btn btn-primary">
              All User
            </button>
          </Link>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default UserForm;
