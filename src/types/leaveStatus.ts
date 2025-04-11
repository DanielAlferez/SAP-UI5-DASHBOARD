export enum ELeaveStatus {
  ALL = "ALL",
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export type LeaveStatus = `${ELeaveStatus}`;
export type LeaveStatusTable = Exclude<ELeaveStatus, ELeaveStatus.ALL>;
