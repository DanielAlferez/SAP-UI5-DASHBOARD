import { leaveTypeMeta } from "@/config/leaveTypes";
import { LeaveType } from "@/types/leaveTypes";
import { Icon, Tag } from "@ui5/webcomponents-react";
import React from "react";

const LeaveTableType = ({ type_of_leave }: { type_of_leave: LeaveType }) => {
  return (
    <Tag icon={<Icon name={leaveTypeMeta?.[type_of_leave]?.icon} />}>
      {leaveTypeMeta?.[type_of_leave]?.label ?? "Undefined"}
    </Tag>
  );
};

export default LeaveTableType;
