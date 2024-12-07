import { useState } from "react";

const AddContent = () => {
  const [page, setPage] = useState("");
  const [videoType, setVideoType] = useState("");
  const [description, setDescription] = useState("");

  const pages = Array.from({ length: 20 }, (_, i) => `Page ${i + 1}`);
  const videoTypes = ["Reel", "Video", "Story", "Photo"];

  const handleUpload = () => {
    alert(`Uploading: ${page}, ${videoType}, ${description}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="container mx-auto md:max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Upload Form
          </h1>
        </div>

        <form>
          {/* Select Page */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Select Page
            </label>
            <select
              value={page}
              onChange={(e) => setPage(e.target.value)}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-green-500 transition duration-300"
            >
              <option value="">Select a Page</option>
              {pages.map((pageName, index) => (
                <option key={index} value={pageName}>
                  {pageName}
                </option>
              ))}
            </select>
          </div>

          {/* Select Video Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Video Type
            </label>
            <select
              value={videoType}
              onChange={(e) => setVideoType(e.target.value)}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-green-500 transition duration-300"
            >
              <option value="">Select Video Type</option>
              {videoTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-green-500 transition duration-300"
              placeholder="Enter a description..."
            ></textarea>
          </div>

          {/* Upload Button */}
          <div>
            <button
              onClick={handleUpload}
              className="w-full py-3 rounded bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-bold transition duration-300 transform hover:scale-105 active:scale-95"
              type="button"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContent;
