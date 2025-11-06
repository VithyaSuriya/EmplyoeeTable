import React from "react";
import FilterBar from "./components/FilterBar";
import EmployeeTable from "./components/EmployeeTable";
import PaginationControls from "./components/PaginationControls";

export default function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <EmployeeTable />
    </div>
  );
}
