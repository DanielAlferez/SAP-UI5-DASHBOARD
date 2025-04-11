import { filterLeaveData } from "@/utils/leaveUtils";
import { ELeaveStatus } from "@/types/leaveStatus";

const mockData = [
  { id: "1", status: ELeaveStatus.PENDING },
  { id: "2", status: ELeaveStatus.APPROVED },
  { id: "3", status: ELeaveStatus.REJECTED },
];

describe("filterLeaveData", () => {
  it("returns all items if status is ALL", () => {
    const result = filterLeaveData(mockData as any, ELeaveStatus.ALL);
    expect(result).toHaveLength(3);
  });

  it("filters by PENDING", () => {
    const result = filterLeaveData(mockData as any, ELeaveStatus.PENDING);
    expect(result).toHaveLength(1);
    expect(result[0].status).toBe(ELeaveStatus.PENDING);
  });
});
