import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../employees/employeeThunks";
import { setFilters, setPagination } from "../employees/employeeSlice";
import FilterBar from "./FilterBar";
import PaginationControls from "./PaginationControls";
import CommonTable from "./common/CommonTable";
import CommonLoader from "./common/CommonLoader";
import CommonError from "./common/CommonError";
import CommonInput from "./common/CommonInput";
import CommonButton from "./common/CommonButton";

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const { list, filters, pagination, loading, error } = useSelector(
    (state) => state.employees
  );

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

  useEffect(() => {
    dispatch(setFilters({ search: "", department: "", status: "" }));
    dispatch(setPagination({ page: 1, itemsPerPage: 5 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch, filters, pagination]);

  const filteredEmployees = useMemo(() => {
    return list.filter((emp) => {
      const searchMatch = emp.name
        ?.toLowerCase()
        .includes(filters.search.toLowerCase());
      const departmentMatch =
        !filters.department || emp.department === filters.department;
      const statusMatch = !filters.status || emp.status === filters.status;
      return searchMatch && departmentMatch && statusMatch;
    });
  }, [list, filters]);

  const { page: currentPage = 1, itemsPerPage = 10 } = pagination;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredEmployees.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSearch = (e) =>
    dispatch(setFilters({ ...filters, search: e.target.value }));
  const handleDepartment = (e) =>
    dispatch(setFilters({ ...filters, department: e.target.value }));
  const handleStatus = (e) =>
    dispatch(setFilters({ ...filters, status: e.target.value }));

  const handlePageChange = (page) =>
    dispatch(setPagination({ ...pagination, page }));
  const handleItemsPerPageChange = (itemsPerPage) =>
    dispatch(setPagination({ ...pagination, itemsPerPage, page: 1 }));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 px-8 py-6 bg-white border-b border-gray-200 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Manage Employee List with Redux & API Integration
        </h1>

        <div className="flex items-center gap-4">
          <CommonButton
            label="+ Add Employee"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
            onClick={() => alert("Add Employee feature coming soon!")}
          />
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-4 px-8 py-4 bg-white border-b border-gray-200">
        <FilterBar
          filters={filters}
          onSearch={handleSearch}
          onDepartment={handleDepartment}
          onStatus={handleStatus}
          departmentOptions={departmentOptions}
          statusOptions={statusOptions}
        />
      </div>

      <main className="flex-grow px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
          {loading && <CommonLoader message="Fetching employees..." />}
          {error && <CommonError message={error} />}

          {!loading && !error && (
            <>
              <CommonTable
                columns={[
                  { key: "id", label: "ID" },
                  { key: "name", label: "Name" },
                  { key: "department", label: "Department" },
                  { key: "status", label: "Status" },
                ]}
                data={paginatedData}
              />

              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <PaginationControls
                  currentPage={currentPage}
                  totalItems={filteredEmployees.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                  onItemsPerPageChange={handleItemsPerPageChange}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default EmployeeTable;
