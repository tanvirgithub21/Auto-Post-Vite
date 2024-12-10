import {create} from 'zustand';

// Zustand store তৈরি করা
const useStore = create((set) => ({
  count: 0, // initial state
  increase: () => set((state) => ({ count: state.count + 1 })), // state বাড়ানোর function
  decrease: () => set((state) => ({ count: state.count - 1 })), // state কমানোর function
}));

export default useStore;
