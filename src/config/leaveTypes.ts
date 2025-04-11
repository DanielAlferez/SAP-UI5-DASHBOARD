import { ELeaveType } from "@/types/leaveTypes";

export const leaveTypeMeta: Record<
  ELeaveType,
  { label: string; icon: string }
> = {
  [ELeaveType.SICK]: {
    label: "Sick Leave",
    icon: "stethoscope",
  },
  [ELeaveType.VACATION]: {
    label: "Vacation",
    icon: "flight",
  },
  [ELeaveType.BEREAVEMENT]: {
    label: "Bereavement Leave",
    icon: "heart",
  },
  [ELeaveType.REMOTE]: {
    label: "Remote Work",
    icon: "home",
  },
  [ELeaveType.PARENTAL]: {
    label: "Parental Leave",
    icon: "family-care",
  },
  [ELeaveType.UNPAID]: {
    label: "Unpaid Leave",
    icon: "money-bills",
  },
  [ELeaveType.MILITARY]: {
    label: "Military Duty",
    icon: "shield",
  },
  [ELeaveType.STUDY]: {
    label: "Study Leave",
    icon: "study-leave",
  },
  [ELeaveType.EMERGENCY]: {
    label: "Emergency Leave",
    icon: "alert",
  },
  [ELeaveType.PERSONAL]: {
    label: "Personal Leave",
    icon: "employee",
  },
};
