import  {combineReducers}from "@reduxjs/toolkit"
import employeeReducer from "../employees/employeeSlice"

export const rootReducer=combineReducers({
  employees:employeeReducer,
})
