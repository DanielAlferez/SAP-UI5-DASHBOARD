import { ELeaveStatus } from "@/types/leaveStatus";
import TagDesign from "@ui5/webcomponents/dist/types/TagDesign.js";

export const leaveStatusMeta: Record<
  ELeaveStatus,
  {
    label: string;
    icon: string;
    design?: keyof typeof TagDesign;
  }
> = {
  [ELeaveStatus.ALL]: {
    label: "All",
    icon: "list",
  },
  [ELeaveStatus.PENDING]: {
    label: "Pending",
    icon: "pending",
    design: "Information",
  },
  [ELeaveStatus.APPROVED]: {
    label: "Approved",
    icon: "accept",
    design: "Positive",
  },
  [ELeaveStatus.REJECTED]: {
    label: "Rejected",
    icon: "decline",
    design: "Negative",
  },
};
