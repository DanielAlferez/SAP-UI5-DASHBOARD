import React from "react";
import {
  TableRow,
  TableCell,
  TableRowAction,
  Text,
  ExpandableText,
} from "@ui5/webcomponents-react";
import { LeaveRequest } from "@/types/leaveTable";
import { formatDate, getDurationLabel } from "@/utils/dateUtils";
import { ELeaveStatus, LeaveStatusTable } from "@/types/leaveStatus";
import LeaveTableStatus from "./LeaveTableStatus";
import LeaveTableType from "./LeaveTableType";

interface LeaveTableRowProps {
  item: LeaveRequest;
  onRequestStatusChange: (id: string, newStatus: LeaveStatusTable) => void;
}

const LeaveTableRow: React.FC<LeaveTableRowProps> = ({
  item,
  onRequestStatusChange,
}) => {
  const { id, name, type_of_leave, date_from, date_to, status, reason } = item;

  return (
    <TableRow
      key={id}
      data-id={id}
      className="pl-2"
      actions={
        <>
          <TableRowAction
            icon="accept"
            text="Approve"
            hidden={status !== ELeaveStatus.PENDING}
            onClick={() => onRequestStatusChange(id, ELeaveStatus.APPROVED)}
          />
          <TableRowAction
            icon="cancel"
            text="Reject"
            hidden={status !== ELeaveStatus.PENDING}
            onClick={() => onRequestStatusChange(id, ELeaveStatus.REJECTED)}
          />
        </>
      }
    >
      <TableCell>
        <Text>{name}</Text>
      </TableCell>
      <TableCell>
        <LeaveTableType type_of_leave={type_of_leave} />
      </TableCell>
      <TableCell>
        {formatDate(date_from)} - {formatDate(date_to)}
        <br />({getDurationLabel(date_from, date_to)})
      </TableCell>
      <TableCell>
        <LeaveTableStatus status={status} />
      </TableCell>
      <TableCell>
        <ExpandableText
          emptyIndicatorMode="Off"
          maxCharacters={100}
          overflowMode="InPlace"
          className="py-2 whitespace-pre-wrap"
          text={reason ?? ""}
        />
      </TableCell>
    </TableRow>
  );
};

export default LeaveTableRow;
