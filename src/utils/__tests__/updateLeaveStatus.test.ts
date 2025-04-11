import { updateLeaveStatus } from "../leaveUtils";
import { LeaveRequest } from "@/types/leaveTable";
import { ELeaveStatus } from "@/types/leaveStatus";
import { ELeaveType } from "@/types/leaveTypes";

describe("updateLeaveStatus", () => {
  const mockData: LeaveRequest[] = [
    {
      id: "1",
      name: "John Smith",
      type_of_leave: ELeaveType.SICK,
      date_from: "2025-04-09T19:00:00Z",
      date_to: "2025-04-11T19:00:00Z",
      reason: "Fever",
      status: ELeaveStatus.PENDING,
    },
    {
      id: "2",
      name: "Jane Doe",
      type_of_leave: ELeaveType.VACATION,
      date_from: "2025-05-01T08:00:00Z",
      date_to: "2025-05-05T17:00:00Z",
      reason: "Family trip",
      status: ELeaveStatus.PENDING,
    },
  ];

  it("should update the status to APPROVED for the correct item", () => {
    const updated = updateLeaveStatus(mockData, "1", ELeaveStatus.APPROVED);

    expect(updated.find((item) => item.id === "1")?.status).toBe(ELeaveStatus.APPROVED);
    expect(updated.find((item) => item.id === "2")?.status).toBe(ELeaveStatus.PENDING);
  });

  it("should update the status to REJECTED for the correct item", () => {
    const updated = updateLeaveStatus(mockData, "2", ELeaveStatus.REJECTED);

    expect(updated.find((item) => item.id === "2")?.status).toBe(ELeaveStatus.REJECTED);
    expect(updated.find((item) => item.id === "1")?.status).toBe(ELeaveStatus.PENDING);
  });

  it("should return original data if no ID matches", () => {
    const updated = updateLeaveStatus(mockData, "999", ELeaveStatus.APPROVED);
    expect(updated).toEqual(mockData);
  });
});
