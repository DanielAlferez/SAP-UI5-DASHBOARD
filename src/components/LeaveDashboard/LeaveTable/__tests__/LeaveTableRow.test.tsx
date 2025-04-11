import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ELeaveStatus, LeaveStatusTable } from "@/types/leaveStatus";
import { ELeaveType } from "@/types/leaveTypes";
import { LeaveRequest } from "@/types/leaveTable";
import LeaveTableRow from "../LeaveTableRow";
import { leaveStatusMeta } from "@/config/leaveStatus";

describe("LeaveTableRow", () => {
  const mockItem: LeaveRequest = {
    id: "1",
    name: "John Smith",
    type_of_leave: ELeaveType.SICK,
    date_from: "2025-04-09T19:00:00Z",
    date_to: "2025-04-11T19:00:00Z",
    reason: "Fever and cold",
    status: ELeaveStatus.PENDING as LeaveStatusTable,
  };

  it("renders the row correctly", () => {
    render(<LeaveTableRow item={mockItem} onRequestStatusChange={() => {}} />);

    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText(/Sick Leave/i)).toBeInTheDocument();
    expect(
      screen.getByText(leaveStatusMeta?.[ELeaveStatus.PENDING].label)
    ).toBeInTheDocument();

    const expandableText = document.querySelector("ui5-expandable-text");
    expect(expandableText?.getAttribute("text")).toBe("Fever and cold");
  });

  it("calls onRequestStatusChange when Approve is clicked", async () => {
    const fn = vi.fn();
    const { container } = render(
      <LeaveTableRow item={mockItem} onRequestStatusChange={fn} />
    );

    const approveBtn = container.querySelector(
      'ui5-table-row-action[text="Approve"]'
    );
    expect(approveBtn).toBeTruthy();
    await userEvent.click(approveBtn!);
    expect(fn).toHaveBeenCalledWith("1", ELeaveStatus.APPROVED);
  });

  it("calls onRequestStatusChange when Reject is clicked", async () => {
    const fn = vi.fn();
    const { container } = render(
      <LeaveTableRow item={mockItem} onRequestStatusChange={fn} />
    );

    const rejectBtn = container.querySelector(
      'ui5-table-row-action[text="Reject"]'
    );
    expect(rejectBtn).toBeTruthy();
    await userEvent.click(rejectBtn!);
    expect(fn).toHaveBeenCalledWith("1", ELeaveStatus.REJECTED);
  });

  it("hides actions when status is not PENDING", () => {
    const approvedItem = {
      ...mockItem,
      status: ELeaveStatus.APPROVED as LeaveStatusTable,
    };

    const { container } = render(
      <LeaveTableRow item={approvedItem} onRequestStatusChange={vi.fn()} />
    );

    const approveBtn = container.querySelector(
      'ui5-table-row-action[text="Approve"]'
    );
    const rejectBtn = container.querySelector(
      'ui5-table-row-action[text="Reject"]'
    );

    expect(approveBtn?.hasAttribute("hidden")).toBe(true);
    expect(rejectBtn?.hasAttribute("hidden")).toBe(true);
  });
});
