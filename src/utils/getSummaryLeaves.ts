import { LeaveRequest } from "@/types/leaveTable";

export const getLeaveSummaryCards = (data: LeaveRequest[]) => {
  const summary = {
    pending: 0,
    approved: 0,
    rejected: 0,
    totalRequests: data.length,
  };

  for (const request of data) {
    if (request.status === "PENDING") summary.pending++;

    if (request.status === "APPROVED") {
      summary.approved++;
    }

    if (request.status === "REJECTED") {
      summary.rejected++;
    }
  }

  return [
    {
      title: "Pending Requests",
      icon: "pending",
      value: summary.pending,
      color: "text-blue-600",
    },
    {
      title: "Approved Requests",
      icon: "accept",
      value: summary.approved,
      color: "text-green-600",
    },
    {
      title: "Rejected Requests",
      icon: "decline",
      value: summary.rejected,
      color: "text-red-600",
    },
    {
      title: "Total Leave Requests",
      icon: "list",
      value: summary.totalRequests,
      color: "text-yellow-600",
    },
  ];
};
