import LeaveRequestDashboard from "@/components/LeaveDashboard/LeaveRequestDashboard";
import { Title } from "@ui5/webcomponents-react";

export default function HomePage() {
  return (
    <main className="h-screen  flex flex-col p-5 md:p-10 overflow-hidden">
      <Title level="H1" size="H3" className="mb-4">
        Leave Request Management Dashboard
      </Title>
      <LeaveRequestDashboard />
    </main>
  );
}
