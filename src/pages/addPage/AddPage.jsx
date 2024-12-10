import { useEffect, useState } from "react";
import { toast } from "sonner";
import axiosInstance from "../../services/axiosInstance";

const AddPage = () => {
  const [isReferencePage, setIsReferencePage] = useState(false);
  const [formData, setFormData] = useState({
    page_name: "",
    page_id: "",
    short_lived_token: "",
    app_id: "",
    app_secret: "",
    email: "",
    reference_page_id: "",
    reference_status: false,
    pageLocation: { name: "London", id: 1556366336636 }, // Default to London
  });

  console.log(formData);

  useEffect(() => {
    if (isReferencePage) {
      setFormData({
        ...formData,
        short_lived_token: "",
        page_id: "",
        app_secret: "",
        reference_status: true,
      });
    } else {
      setFormData({
        ...formData,
        reference_status: false,
      });
    }
  }, [isReferencePage]);

  const referencePages = [
    "Reference Page 1",
    "Reference Page 2",
    "Reference Page 3",
    "Reference Page 4",
  ];

  const pageLocations = [
    { name: "London", id: 1556366336636 },
    { name: "Dhaka", id: 155636526336636 },
    { name: "Canada", id: 155636624336636 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "pageLocation") {
      // Find the location object from the locations list based on selected id
      const selectedLocation = pageLocations.find(
        (location) => location?.id === parseInt(value)
      );
      setFormData({ ...formData, pageLocation: selectedLocation });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true
    try {
      const response = await axiosInstance.post("/page/add", formData);
      console.log("Response:", response);

      // Show success toast
      toast.success("Token created successfully!");
    } catch (error) {
      // Handle errors properly
      if (error.response) {
        // Server responded with an error
        const errorMessage =
          error.response.data.message || "Something went wrong";
        toast.error(`Error: ${errorMessage}`, {
          style: {
            backgroundColor: "#ffe1e1",
            color: "#ff5353",
          },
        });
      } else if (error.request) {
        // No response was received
        toast.error("No response from server.", {
          style: {
            backgroundColor: "#ffe1e1",
            color: "#ff5353",
          },
        });
      } else {
        // Other errors (config issues, etc.)
        toast.error(`Error: ${error.message}`, {
          style: {
            backgroundColor: "#ffe1e1",
            color: "#ff5353",
          },
        });
      }
    } finally {
      setIsLoading(false); // Set loading to false
    }
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
                name="page_name"
                value={formData.page_name}
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
                name="page_id"
                value={formData.page_id}
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

            <div className="">
              <label className="bloc text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                Page Location
              </label>
              <select
                name="pageLocation"
                value={formData?.pageLocation?.id}
                onChange={handleInputChange}
                className="w-full p-3 outline-none rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a Page Location</option>
                {pageLocations.map((location, index) => (
                  <option key={index} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Conditional Fields */}
            {isReferencePage ? (
              <div className="">
                <label className="bloc text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  Reference Page
                </label>
                <select
                  name="reference_page_id"
                  value={formData.reference_page_id}
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
                    name="short_lived_token"
                    value={formData.short_lived_token}
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
                    name="app_id"
                    value={formData.app_id}
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
                    name="app_secret"
                    value={formData.app_secret}
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
