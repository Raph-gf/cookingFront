import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SubscriberList = () => {
  const [subscriber, setSubscriber] = useState([]);
  // const [newSubscriber, setNewSubscriber] = useState({
  //   name: "",
  //   email: "",
  //   zipCode: 1000,
  // });
  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const res = await axios.get(`http://localhost:4567/subscribers/all`);
      setSubscriber(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Erreur lors de la récupération des subscribers");
    }
  };

  return (
    <>
      <div className="">
        <h1 className="SubscriberTitle">Liste des subscribers</h1>
        <ul>
          {subscriber.map((sub) => (
            <li key={sub.id}>
              <strong>Prenom:</strong>
              {sub.name},<strong>Email:</strong>
              {sub.email}
              <strong>Code Postal:</strong>
              {sub.zipCode}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SubscriberList;
