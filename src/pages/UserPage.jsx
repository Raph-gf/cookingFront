import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const UserPage = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:4567/users/all`);
      setUsers(res.data);
    } catch (error) {
      console.log("Erreur lors de la récupération des utilisateurs");
    }
  };

  return (
    <div>
      <div>
        <h1>Liste des utilisateurs</h1>

        <ul>
          {Users.map((user) => (
            <li key={user.id}>
              <strong>Prenom:</strong>
              {user.name.first},<strong>Nom:</strong>
              {user.name.last},<strong>Email:</strong>
              {user.email},<strong>Code Postal:</strong>
              {user.zipcode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
