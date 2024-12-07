import { useState } from "react";

const DragAndDropFileInput = ({
  getAcceptType,
  handleFileChange,
  files,
  setFiles,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFileChange({ target: { files: droppedFiles } });
  };

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div
        className={`w-full px-6 py-14 rounded border-2 ${
          isDragging
            ? "border-green-500 bg-green-50 dark:bg-green-900"
            : "border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900"
        } text-gray-700 dark:text-gray-200 text-center cursor-pointer transition duration-300`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label>
          <input
            type="file"
            accept={getAcceptType()}
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="text-sm font-medium">
            Drag and drop your files here, or{" "}
            <span className="text-green-500">browse</span>
          </p>
        </label>
      </div>

      {/* Enhanced Preview Section */}
      {files && files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
            Selected Files:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md relative group"
              >
                {file.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ) : file.type.startsWith("video/") ? (
                  <video
                    src={URL.createObjectURL(file)}
                    className="w-full h-24 object-cover rounded-lg"
                    controls
                  />
                ) : (
                  <div className="w-full h-24 flex items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {file.name}
                    </span>
                  </div>
                )}
                <span
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                >
                  Remove
                </span>
                <div className="mt-2 text-center">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-200 truncate">
                    {file.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const AddContent = () => {
  const [page, setPage] = useState("");
  const [videoType, setVideoType] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const pages = Array.from({ length: 20 }, (_, i) => `Page ${i + 1}`);
  const videoTypes = ["Reel", "Video", "Story", "Photo"];

  const handleFileChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const getAcceptType = () => {
    if (videoType === "Video" || videoType === "Reel") return "video/*";
    if (videoType === "Photo") return "image/*";
    if (videoType === "Story") return "video/*,image/*";
    return "";
  };

  const handleUpload = () => {
    if (!page || !videoType || !files.length) {
      alert("Please complete all fields and add files!");
      return;
    }
    alert(
      `Uploading to: ${page}\nType: ${videoType}\nDescription: ${description}\nFiles: ${files
        .map((file) => file.name)
        .join(", ")}`
    );
    setFiles([]);
  };

  return (
    <div className="min-h-[100vh_-_64px] flex items-center justify-center p-4">
      <div className="container mt-10 mx-auto md:max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
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

          {/* File Input */}
          {videoType && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                Upload File(s)
              </label>
              <DragAndDropFileInput
                getAcceptType={getAcceptType}
                handleFileChange={handleFileChange}
                files={files}
                setFiles={setFiles}
              />
            </div>
          )}

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
