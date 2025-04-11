import { leaveStatusMeta } from "@/config/leaveStatus";
import { ELeaveStatus } from "@/types/leaveStatus";
import { Icon, Tag } from "@ui5/webcomponents-react";
import React from "react";

const LeaveTableStatus = ({ status }: { status: string }) => {
  return (
    <Tag
      design={
        leaveStatusMeta?.[status as ELeaveStatus]?.design ??
        leaveStatusMeta?.[ELeaveStatus.PENDING]?.design
      }
      icon={<Icon name={leaveStatusMeta?.[status as ELeaveStatus]?.icon} />}
    >
      {leaveStatusMeta?.[status as ELeaveStatus]?.label ??
        leaveStatusMeta?.[ELeaveStatus.PENDING]?.label}
    </Tag>
  );
};

export default LeaveTableStatus;
