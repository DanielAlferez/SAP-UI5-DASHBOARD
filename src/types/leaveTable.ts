import { LeaveStatusTable } from "./leaveStatus";
import { LeaveType } from "./leaveTypes";

export type LeaveHeaderColumn = {
  label: string;
  icon?: string;
  minWidth?: string;
  width?: string;
};

export interface LeaveRequest {
  id: string;
  name: string;
  type_of_leave: LeaveType;
  date_from: string;
  date_to: string;
  status: LeaveStatusTable;
  reason?: string;
}
