import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, Bounce, ToastContainer } from "react-toastify";

function SubscribingForm() {
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

  const [subscriber, setSubscriber] = useState([]);
  const [newSubscriber, setNewSubscriber] = useState({
    name: "",
    email: "",
    zipCode: 1000,
  });

  const createSubscriber = async () => {
    try {
      const res = await axios.post(
        `http://localhost:4567/subscribers/add`,
        newSubscriber
      );
      console.log(res.data);
      setNewSubscriber([...subscriber, res.data]);

      setNewSubscriber({
        name: "",
        email: "",
        zipCode: 1000,
      });
      notify("User successfully created!", "success");
    } catch (error) {
      console.log("Erreur lors de la création d'un subscriber");
      notify("Error creating user!", "error");
    }
  };

  return (
    <>
      <h2 className="subFormTitle">Créer un nouveau subscriber</h2>
      <form
        classeName="FormulaireNewSubscriber"
        onSubmit={(event) => {
          event.preventDefault();
          createSubscriber();
        }}
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Prenom:
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            aria-describedby="Name"
            value={newSubscriber.name}
            onChange={(event) =>
              setNewSubscriber({
                ...newSubscriber,
                name: event.target.value,
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
            value={newSubscriber.email}
            onChange={(event) =>
              setNewSubscriber({
                ...newSubscriber,
                email: event.target.value,
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
            value={newSubscriber.zipCode}
            onChange={(event) =>
              setNewSubscriber({
                ...newSubscriber,
                zipCode: event.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Subscriber
        </button>
        <div className="btn-sublist">
          <Link to="/subscribers/all-subscribers">
            <button type="text" className="btn btn-primary">
              Subscriber List
            </button>
          </Link>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default SubscribingForm;
