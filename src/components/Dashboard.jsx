import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Movie Collection</h1>
      <button
        onClick={() => navigate("/add-movie")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Movie
      </button>
      {/* Movie list will be displayed here */}
    </div>
  );
};

export default Dashboard;
