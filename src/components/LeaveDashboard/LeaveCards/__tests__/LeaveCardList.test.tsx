import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ELeaveStatus } from "@/types/leaveStatus";
import { ELeaveType } from "@/types/leaveTypes";
import LeaveCardList from "../LeaveCardList";
import { LeaveRequest } from "@/types/leaveTable";

describe("LeaveCardList", () => {
  const mockRequest: LeaveRequest[] = [
    {
      id: "123",
      name: "Jane Doe",
      status: ELeaveStatus.PENDING,
      type_of_leave: ELeaveType.SICK,
      date_from: "2025-04-10",
      date_to: "2025-04-12",
      reason: "Feeling sick",
    },
  ];

  it("calls onRequestStatusChange with APPROVED when Accept is clicked", async () => {
    const onChange = vi.fn();
    render(
      <LeaveCardList data={mockRequest} onRequestStatusChange={onChange} />
    );
    await userEvent.click(screen.getByText("Accept"));
    expect(onChange).toHaveBeenCalledWith("123", ELeaveStatus.APPROVED);
  });

  it("calls onRequestStatusChange with REJECTED when Reject is clicked", async () => {
    const onChange = vi.fn();
    render(
      <LeaveCardList data={mockRequest} onRequestStatusChange={onChange} />
    );
    await userEvent.click(screen.getByText("Reject"));
    expect(onChange).toHaveBeenCalledWith("123", ELeaveStatus.REJECTED);
  });

  it("hides buttons if status is not PENDING", () => {
    const nonPendingRequest: LeaveRequest[] = [
      { ...mockRequest[0], status: ELeaveStatus.APPROVED },
    ];
    render(
      <LeaveCardList data={nonPendingRequest} onRequestStatusChange={vi.fn()} />
    );
    expect(screen.queryByText("Accept")).not.toBeInTheDocument();
    expect(screen.queryByText("Reject")).not.toBeInTheDocument();
  });
});
