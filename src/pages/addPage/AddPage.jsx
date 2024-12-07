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
    <div className="p-4">
      <div className="mt-10 container mx-auto md:max-w-2xl max-w-full bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Add New Page
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Fill out the form to add a new Facebook page.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="isReferencePage"
              checked={isReferencePage}
              onChange={() => setIsReferencePage(!isReferencePage)}
              className="mr-2 h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
            <label
              htmlFor="isReferencePage"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Add Page via Reference Page
            </label>
          </div>

          {/* Common Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                Page Name
              </label>
              <input
                type="text"
                name="pageName"
                value={formData.pageName}
                onChange={handleInputChange}
                className="w-full p-3 outline-none rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
                placeholder="Enter Page Name"
                required
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
                className="w-full p-3 outline-none rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
                placeholder="Enter Page ID"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 outline-none rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
                placeholder="Enter Email"
                required
              />
            </div>

            {/* Conditional Fields */}
            {isReferencePage ? (
              <div className="">
                <label className="bloc text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  Reference Page
                </label>
                <select
                  name="referencePage"
                  value={formData.referencePage}
                  onChange={handleInputChange}
                  className="w-full p-3 outline-none rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
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
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                    Short Lived Token
                  </label>
                  <input
                    type="text"
                    name="shortLivedToken"
                    value={formData.shortLivedToken}
                    onChange={handleInputChange}
                    className="w-full p-3 outline-none rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
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
                    className="w-full p-3 outline-none rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
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
                    className="w-full p-3 outline-none rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
                    placeholder="Enter App Secret"
                  />
                </div>
              </>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold hover:from-green-600 hover:to-blue-600 transition duration-300"
          >
            Add Page
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
