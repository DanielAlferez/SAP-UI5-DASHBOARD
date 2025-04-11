import React from "react";
import { Card, CardHeader, Icon, Button } from "@ui5/webcomponents-react";
import { LeaveRequest } from "@/types/leaveTable";
import { leaveTypeMeta } from "@/config/leaveTypes";
import { ELeaveType } from "@/types/leaveTypes";
import { ELeaveStatus, LeaveStatusTable } from "@/types/leaveStatus";
import { formatDate, getDurationLabel } from "@/utils/dateUtils";
import LeaveTableStatus from "../LeaveTable/LeaveTableStatus";

type Props = {
  data: LeaveRequest[];
  onRequestStatusChange: (id: string, status: LeaveStatusTable) => void;
};

const LeaveCardList: React.FC<Props> = ({ data, onRequestStatusChange }) => {
  return (
    <div className="flex flex-col gap-4 p-2">
      {data.map((item) => {
        const type = leaveTypeMeta[item.type_of_leave as ELeaveType];

        return (
          <Card key={item.id} className="shadow-md">
            <CardHeader
              titleText={item.name}
              subtitleText={type?.label ?? "Unknown"}
              avatar={<Icon name={type?.icon} />}
            />

            <div className="flex flex-col gap-1 p-5">
              <div>
                <LeaveTableStatus status={item.status} />
              </div>
              <div>
                {formatDate(item.date_from)} - {formatDate(item.date_to)} (
                {getDurationLabel(item.date_from, item.date_to)})
              </div>

              {item.reason && (
                <div>
                  <strong>Reason:</strong> {item.reason.slice(0, 100)}
                  {item.reason.length > 100 && "..."}
                </div>
              )}
              {item.status === "PENDING" && (
                <div className="flex gap-2">
                  <Button
                    icon="accept"
                    onClick={() =>
                      onRequestStatusChange(item.id, ELeaveStatus.APPROVED)
                    }
                  >
                    Approve
                  </Button>
                  <Button
                    icon="decline"
                    onClick={() =>
                      onRequestStatusChange(item.id, ELeaveStatus.REJECTED)
                    }
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default LeaveCardList;
