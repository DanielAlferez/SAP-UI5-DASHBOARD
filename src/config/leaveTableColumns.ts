import { LeaveHeaderColumn } from "@/types/leaveTable";

export const leaveTableColumns: LeaveHeaderColumn[] = [
  { label: "Employee", icon: "employee" },
  { label: "Type", icon: "hint" },
  { label: "Date", icon: "date-time", minWidth: "350px" },
  { label: "Status", icon: "filter" },
  { label: "Reason", icon: "message-popup" },
];
