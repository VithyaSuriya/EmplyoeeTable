import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../employees/employeeThunks";
import { setFilters, setPagination } from "../employees/employeeSlice";
import FilterBar from "./FilterBar";
import PaginationControls from "./PaginationControls";
import CommonTable from "./common/CommonTable";
import CommonLoader from "./common/CommonLoader";
import CommonError from "./common/CommonError";

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

  const { page: currentPage = 1, itemsPerPage = 5 } = pagination;
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
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-12 px-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 ">
            Manage Employee List with Redux & API Integration
          </h1>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-3xl bg-gray-50 rounded-xl px-6 py-5 shadow-sm">
            <FilterBar
              filters={filters}
              onSearch={handleSearch}
              onDepartment={handleDepartment}
              onStatus={handleStatus}
              departmentOptions={departmentOptions}
              statusOptions={statusOptions}
            />
          </div>
        </div>

        <div className="w-full bg-white rounded-xl shadow-md p-6">
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

              <div className="mt-6">
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
      </div>
    </div>
  );
};

export default EmployeeTable;
