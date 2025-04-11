import {
  ELeaveStatus,
  LeaveStatus,
  LeaveStatusTable,
} from "@/types/leaveStatus";
import { LeaveRequest } from "@/types/leaveTable";

export function filterLeaveData(
  data: LeaveRequest[],
  filterStatus: LeaveStatus
): LeaveRequest[] {
  return filterStatus === ELeaveStatus.ALL
    ? data
    : data.filter((item) => item.status === filterStatus);
}

export function sortLeaveData(
  data: LeaveRequest[],
  sortOrder: "asc" | "desc"
): LeaveRequest[] {
  return [...data].sort((a, b) => {
    const dateA = new Date(a.date_from).getTime();
    const dateB = new Date(b.date_from).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });
}

export function updateLeaveStatus(
  data: LeaveRequest[],
  id: string,
  newStatus: LeaveStatusTable
): LeaveRequest[] {
  return data.map((item) =>
    item.id === id ? { ...item, status: newStatus } : item
  );
}
