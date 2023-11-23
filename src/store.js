import { create } from "zustand";

const localStorageKey = "hfw-next";

const useSaveFormStore = create((set) => {
  const initial = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
    variant: "",
    value: "",
    paramValue: "",
  };
  return {
    ...initial,
    setData: ({ variant, value, paramValue }) =>
      set((state) => {
        const hfw = { variant, value, paramValue };
        localStorage.setItem(localStorageKey, JSON.stringify(hfw));
        return { ...state, ...hfw };
      }),
  };
});
export default useSaveFormStore;
