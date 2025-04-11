import React from "react";
import LeaveStatusFilter from "./FilterBar";
import { LeaveStatus } from "@/types/leaveStatus";
import OrderBar from "./OrderBar";

type Props = {
  filterStatus: LeaveStatus;
  setFilterStatus: (status: LeaveStatus) => void;
  sortOrder: "asc" | "desc";
  toggleSortOrder: () => void;
};

const HeaderBar: React.FC<Props> = ({
  filterStatus,
  setFilterStatus,
  sortOrder,
  toggleSortOrder,
}) => {
  return (
    <div className="w-full rounded-md px-4 py-3 shadow-sm mb-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <LeaveStatusFilter selected={filterStatus} onChange={setFilterStatus} />
        <OrderBar sortOrder={sortOrder} onToggleSort={toggleSortOrder} />
      </div>
    </div>
  );
};

export default HeaderBar;
