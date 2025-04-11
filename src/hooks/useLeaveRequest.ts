import { LeaveRequest } from "@/types/leaveTable";
import { useEffect, useState } from "react";

export function useLeaveRequests() {
  const [data, setData] = useState<LeaveRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "leave_requests")
      .then((res) => res.json())
      .then((json: LeaveRequest[]) => {
        const mapped: LeaveRequest[] = json.map((item) => ({
          id: item.id,
          name: item.name,
          type_of_leave: item.type_of_leave,
          date_from: item.date_from,
          date_to: item.date_to,
          status: item.status,
          reason: item.reason,
        }));

        setData(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading data", err);
        setLoading(false);
      });
  }, []);

  return { data, setData, loading };
}
