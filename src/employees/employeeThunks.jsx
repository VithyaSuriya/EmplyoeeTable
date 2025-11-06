import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/employees.json");
      if (!response.ok) throw new Error("Failed to fetch employees");
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      const data = await response.json();
      console.log("Fetched employees:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
