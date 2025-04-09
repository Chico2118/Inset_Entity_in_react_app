import React from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add a New Movie</h2>
      <form>
        <input
          className="block border p-2 mb-2 w-full"
          type="text"
          placeholder="Title"
          required
        />
        <input
          className="block border p-2 mb-2 w-full"
          type="text"
          placeholder="Director"
          required
        />
        <select className="block border p-2 mb-2 w-full">
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input
          className="block border p-2 mb-2 w-full"
          type="number"
          placeholder="Release Year"
          required
        />
        <textarea
          className="block border p-2 mb-2 w-full"
          placeholder="Synopsis"
          required
        ></textarea>
        <input
          className="block border p-2 mb-2 w-full"
          type="url"
          placeholder="Poster Image URL"
          required
        />

        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
