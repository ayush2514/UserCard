import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import UserCardGrid from "./components/UserCardGrid";
import "./styles/Loader.scss";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar handleGetUsers={handleGetUsers} />
      {loading ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <UserCardGrid users={users} />
      )}
    </div>
  );
};

export default App;
