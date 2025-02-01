// src/store/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  step: number;
}
 
const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  step: 1,
};
 
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
  },
});
 
export const { updateForm, nextStep, previousStep } = formSlice.actions;
export default formSlice.reducer;