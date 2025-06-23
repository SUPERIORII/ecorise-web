import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (userData) => set({ user: userData, isAuthenticated: true }),
  logOut: () => set({ user: null, isAuthenticated: false }),
}));


// const useAuthStore = create((set) => ({
//   user: null,
//   isAuthenicated: false,
//   login: (userData) => set({ user: userData, isAuthenicated: true }),
//   logOut: () => set({ user: null, isAuthenicated: false }),
// }));

export default useAuthStore;
