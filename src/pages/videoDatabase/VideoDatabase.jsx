import { useState } from "react";

const VideoDatabase = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [databases, setDatabases] = useState([
    { name: "Storage 1", status: "Active", videos: 120, lastUpdated: "2024-12-01" },
    { name: "Storage 2", status: "Inactive", videos: 50, lastUpdated: "2024-11-25" },
    { name: "Storage 3", status: "Active", videos: 200, lastUpdated: "2024-12-05" },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    status: "Active",
    videos: 0,
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDatabases([...databases, { ...formData, lastUpdated: new Date().toISOString().split('T')[0] }]);
    setIsFormOpen(false);
    setFormData({ name: "", status: "Active", videos: 0, description: "" });
  };

  const handleDeleteDatabase = (index) => {
    const updatedDatabases = databases.filter((_, i) => i !== index);
    setDatabases(updatedDatabases);
  };

  return (
    <div className={`min-h-screen p-6 ${databases.length ? "" : "bg-gray-50"}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Video Database</h1>
        </div>

        {/* Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {databases.map((db, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{db.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Status: <span className={`font-medium ${db.status === "Active" ? "text-green-500" : "text-red-500"}`}>{db.status}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Videos: <span className="font-medium">{db.videos}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Last Updated: <span className="font-medium">{db.lastUpdated}</span>
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDeleteDatabase(index)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Button */}
        <div className="mb-8 flex justify-end">
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-6 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition"
          >
            Add New
          </button>
        </div>

        {/* Add New Form */}
        {isFormOpen && (
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold mb-4">Add New Database</h3>

            <form onSubmit={handleFormSubmit}>
              {/* Database Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Database Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
                  placeholder="Enter Database Name"
                  required
                />
              </div>

              {/* Status */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Videos */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Videos</label>
                <input
                  type="number"
                  name="videos"
                  value={formData.videos}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
                  placeholder="Enter Video Count"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
                  placeholder="Enter Database Description"
                  rows="3"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition mb-4"
              >
                Add Database
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="w-full py-3 rounded bg-red-600 text-white font-bold hover:bg-red-700 transition"
              >
                Close
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDatabase;
    