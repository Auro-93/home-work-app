import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../utilities/localStorage";

/*REDUCER TO SET YOUR SKILLS LIST, SAVE IT IN LOCAL STORAGE, ADD AND REMOVE SKILLS */

const skills = getLocalStorage("skills");

const initialState = {
  skills: skills ? skills : [],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,

  reducers: {
    addSkill: (state, action) => {
      state.skills.push(action.payload);

      setLocalStorage("skills", state.skills);
    },
    removeSkill: (state, action) => {
      const skillId = action.payload;
      state.skills = state.skills.filter((skill) => skill.id !== skillId);
      setLocalStorage("skills", state.skills);
    },
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;

export default skillsSlice.reducer;
