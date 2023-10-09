import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    getUsers: async (state) => {
      // console.log("successssssss");
      try {
        const response = await fetch("http://localhost:3000/users")
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
        if (!response.ok) {
          throw new Error("Yuklenmedi");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("fetch olmadi:", error);
      }
    },
  },
});
