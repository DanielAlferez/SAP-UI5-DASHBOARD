import React from "react";
import { Table, TableHeaderRow } from "@ui5/webcomponents-react";
import LeaveTableRow from "./LeaveTableRow";
import LeaveTableHeader from "./LeaveTableHeader";
import { useConfirmDialog } from "@/hooks/useConfirmDialog";
import { LeaveRequest } from "@/types/leaveTable";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import {
  filterLeaveData,
  sortLeaveData,
  updateLeaveStatus,
} from "@/utils/leaveUtils";
import { leaveTableColumns } from "@/config/leaveTableColumns";
import { LeaveStatus } from "@/types/leaveStatus";
import LeaveCardList from "../LeaveCards/LeaveCardList";

const LeaveTable: React.FC<{
  data: LeaveRequest[];
  setData: React.Dispatch<React.SetStateAction<LeaveRequest[]>>;
  filterStatus: LeaveStatus;
  sortOrder: "asc" | "desc";
}> = ({ data, setData, filterStatus, sortOrder }) => {
  const filteredData = filterLeaveData(data, filterStatus);
  const sortedData = sortLeaveData(filteredData, sortOrder);

  const { ConfirmDialog, openConfirmDialog } = useConfirmDialog(
    (id, status) => {
      setData((prev) => updateLeaveStatus(prev, id, status));
    }
  );

  return (
    <>
      <Table
        rowActionCount={2}
        overflowMode="Scroll"
        noDataText="There are no leave requests"
        headerRow={
          <TableHeaderRow sticky>
            <LeaveTableHeader columns={leaveTableColumns} />
          </TableHeaderRow>
        }
        className="h-full w-full overflow-auto hidden lg:block"
      >
        {sortedData.map((item) => (
          <LeaveTableRow
            key={item.id}
            item={item}
            onRequestStatusChange={openConfirmDialog}
          />
        ))}
      </Table>

      <div className="lg:hidden h-full w-full overflow-auto">
        <LeaveCardList
          data={sortedData}
          onRequestStatusChange={openConfirmDialog}
        />
      </div>

      {ConfirmDialog}
    </>
  );
};

export default LeaveTable;
