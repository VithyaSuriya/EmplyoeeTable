import React from "react";
import CommonInput from "./common/CommonInput";
import CommonSelect from "./common/CommonSelect";
import CommonButton from "./common/CommonButton";

const FilterBar = ({
  filters,
  onSearch,
  onDepartment,
  onStatus,

}) => {
  const departmentOptions = [
    { value: "", label: "All Departments" },
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "HR", label: "HR" },
  ];

  const statusOptions = [
    { value: "", label: "All Status" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">

      <CommonInput
        value={filters.search}
        onChange={onSearch}
        placeholder="Search by name"
        className="w-52"
      />

      <CommonSelect
        value={filters.department}
        onChange={onDepartment}
        options={departmentOptions}
        className="w-44"
      />

      <CommonSelect
        value={filters.status}
        onChange={onStatus}
        options={statusOptions}
        className="w-40"
      />

    </div>
  );
};

export default FilterBar;
