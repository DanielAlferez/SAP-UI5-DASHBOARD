export enum ELeaveType {
  SICK = "SICK",
  VACATION = "VACATION",
  BEREAVEMENT = "BEREAVEMENT",
  REMOTE = "REMOTE",
  PARENTAL = "PARENTAL",
  UNPAID = "UNPAID",
  MILITARY = "MILITARY",
  STUDY = "STUDY",
  EMERGENCY = "EMERGENCY",
  PERSONAL = "PERSONAL",
}

export type LeaveType = `${ELeaveType}`;
