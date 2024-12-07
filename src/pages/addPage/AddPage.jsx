"use client";
import { useState } from "react";

const AddPage = () => {
  const [isReferencePage, setIsReferencePage] = useState(false);
  const [formData, setFormData] = useState({
    pageName: "",
    pageId: "",
    shortLivedToken: "",
    appId: "",
    appSecret: "",
    email: "",
    referencePage: "",
  });

  const referencePages = [
    "Reference Page 1",
    "Reference Page 2",
    "Reference Page 3",
    "Reference Page 4",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto md:max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Add New Page
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isReferencePage"
              checked={isReferencePage}
              onChange={() => setIsReferencePage(!isReferencePage)}
              className="mr-2 transition duration-300 focus:ring-green-500"
            />
            <label
              htmlFor="isReferencePage"
              className="text-sm text-gray-700 dark:text-gray-200"
            >
              Add Page via Reference Page
            </label>
          </div>

          {/* Common Fields */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Page Name
            </label>
            <input
              type="text"
              name="pageName"
              value={formData.pageName}
              onChange={handleInputChange}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
              placeholder="Enter Page Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Page ID
            </label>
            <input
              type="text"
              name="pageId"
              value={formData.pageId}
              onChange={handleInputChange}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
              placeholder="Enter Page ID"
            />
          </div>

          {/* Conditional Fields */}
          {isReferencePage ? (
            <div className="transition-opacity duration-300">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                Reference Page
              </label>
              <select
                name="referencePage"
                value={formData.referencePage}
                onChange={handleInputChange}
                className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a Reference Page</option>
                {referencePages.map((page, index) => (
                  <option key={index} value={page}>
                    {page}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <>
              <div className="transition-opacity duration-300">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  Short Lived Token
                </label>
                <input
                  type="text"
                  name="shortLivedToken"
                  value={formData.shortLivedToken}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
                  placeholder="Enter Short Lived Token"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  App ID
                </label>
                <input
                  type="text"
                  name="appId"
                  value={formData.appId}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
                  placeholder="Enter App ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  App Secret
                </label>
                <input
                  type="text"
                  name="appSecret"
                  value={formData.appSecret}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
                  placeholder="Enter App Secret"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition duration-300"
          >
            Add Page
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
