import React from "react";
import { TableHeaderCell, Icon, FlexBox } from "@ui5/webcomponents-react";
import { LeaveHeaderColumn } from "@/types/leaveTable";

type Props = {
  columns: LeaveHeaderColumn[];
};

const LeaveTableHeader: React.FC<Props> = ({ columns }) => (
  <>
    {columns.map((col, idx) => (
      <TableHeaderCell
        key={idx}
        minWidth={col.minWidth || "200px"}
        className="pl-2"
        width={col.width}
      >
        {col.icon ? (
          <FlexBox alignItems="Center">
            <Icon name={col.icon} className="mr-2" />
            <span>{col.label}</span>
          </FlexBox>
        ) : (
          <span>{col.label}</span>
        )}
      </TableHeaderCell>
    ))}
  </>
);

export default LeaveTableHeader;
