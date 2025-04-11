import { filterLeaveData } from "@/utils/leaveUtils";
import { ELeaveStatus } from "@/types/leaveStatus";
import { LeaveRequest } from "@/types/leaveTable";
import { ELeaveType } from "@/types/leaveTypes";

const mockData : LeaveRequest[] = [
  {
    id: "1",
    name: "John Doe",
    type_of_leave: ELeaveType.SICK,
    date_from: "2023-10-01",
    date_to: "2023-10-05",
    status: ELeaveStatus.PENDING,
    reason: "Flu",
  },
  {
    id: "2",
    name: "Jane Smith",
    type_of_leave: ELeaveType.VACATION,
    date_from: "2023-11-01",
    date_to: "2023-11-10",
    status: ELeaveStatus.APPROVED,
  },
  {
    id: "3",
    name: "Alice Johnson",
    type_of_leave: ELeaveType.BEREAVEMENT,
    date_from: "2023-12-01",
    date_to: "2023-12-05",
    status: ELeaveStatus.REJECTED,
  },
]

describe("filterLeaveData", () => {
  it("returns all items if status is ALL", () => {
    const result = filterLeaveData(mockData, ELeaveStatus.ALL);
    expect(result).toHaveLength(3);
  });

  it("filters by PENDING", () => {
    const result = filterLeaveData(mockData, ELeaveStatus.PENDING);
    expect(result).toHaveLength(1);
    expect(result[0].status).toBe(ELeaveStatus.PENDING);
  });
});
