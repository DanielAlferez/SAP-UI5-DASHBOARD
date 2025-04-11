import React from "react";
import { Bar, Title } from "@ui5/webcomponents-react";

const LeaveTableSkeleton: React.FC = () => {
  return (
    <main className="h-screen flex flex-col p-10 overflow-hidden">
      {/* Simulated Bar */}
      <Bar
        startContent={
          <div className="w-80 bg-gray-200 animate-pulse rounded h-8" />
        }
        endContent={
          <div className="w-40 bg-gray-200 animate-pulse rounded h-8" />
        }
      ></Bar>

      <div className="h-full w-full overflow-auto flex-1 space-y-2">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className="w-full h-[48px] bg-gray-200 animate-pulse rounded"
          />
        ))}
      </div>
    </main>
  );
};

export default LeaveTableSkeleton;
