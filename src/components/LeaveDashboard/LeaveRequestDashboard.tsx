"use client";

import React from "react";
import { useState } from "react";
import LeaveTable from "@/components/LeaveDashboard/LeaveTable/LeaveTable";
import LeaveTableSkeleton from "@/components/LeaveDashboard/LeaveTable/skeleton/LeaveSkeletonTable";
import { ELeaveStatus, LeaveStatus } from "@/types/leaveStatus";
import LeaveSummaryCards from "./LeaveSummaryCards";
import { useLeaveRequests } from "@/hooks/useLeaveRequest";
import HeaderBar from "./HeaderBar/HeaderBar";

const LeaveRequestDashboard = () => {
  const { data, setData, loading } = useLeaveRequests();

  const [filterStatus, setFilterStatus] = useState<LeaveStatus>(
    ELeaveStatus.ALL
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  if (loading) {
    return <LeaveTableSkeleton />;
  }

  return (
    <>
      <LeaveSummaryCards data={data} />
      <div className="border flex flex-col h-full overflow-hidden p-1 rounded-lg border-gray-300 shadow-md">
        <HeaderBar
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          sortOrder={sortOrder}
          toggleSortOrder={toggleSortOrder}
        />
        <LeaveTable
          data={data}
          setData={setData}
          filterStatus={filterStatus}
          sortOrder={sortOrder}
        />
      </div>
    </>
  );
};

export default LeaveRequestDashboard;
