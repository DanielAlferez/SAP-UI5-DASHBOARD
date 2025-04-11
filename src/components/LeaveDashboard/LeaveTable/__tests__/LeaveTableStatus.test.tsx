import { render, screen } from "@testing-library/react";
import LeaveTableStatus from "../LeaveTableStatus";
import { ELeaveStatus } from "@/types/leaveStatus";

describe("LeaveTableStatus", () => {
  it("renders Pending status correctly", () => {
    render(<LeaveTableStatus status={ELeaveStatus.PENDING} />);
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("renders Approved status correctly", () => {
    render(<LeaveTableStatus status={ELeaveStatus.APPROVED} />);
    expect(screen.getByText("Approved")).toBeInTheDocument();
  });

  it("renders Rejected status correctly", () => {
    render(<LeaveTableStatus status={ELeaveStatus.REJECTED} />);
    expect(screen.getByText("Rejected")).toBeInTheDocument();
  });
});
