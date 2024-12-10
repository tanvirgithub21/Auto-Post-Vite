import { create } from "zustand";
import axiosInstance from "../services/axiosInstance";

// Zustand store
const useContentStore = create((set) => ({
  // New states added
  page: "", // To track page info
  setPage: (newPage) => set({ page: newPage }),

  // Function to handle POST request and set data
  handleContentPostRequest: async (data) => {
    try {
      // Sending a POST request with the given data
      const response = await axiosInstance.post("/add-content", data);

      if (!response.status === 200) {
        throw new Error("Failed to upload data");
      }

      // Assuming the response contains updated data to set
      const responseData = response.data;
      return responseData;
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  },
}));

export default useContentStore;
