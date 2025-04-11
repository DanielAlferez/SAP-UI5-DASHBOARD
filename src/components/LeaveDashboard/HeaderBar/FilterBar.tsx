import {
  SegmentedButton,
  SegmentedButtonItem,
  Ui5CustomEvent,
  SegmentedButtonDomRef,
} from "@ui5/webcomponents-react";
import { SegmentedButtonSelectionChangeEventDetail } from "@ui5/webcomponents/dist/SegmentedButton.js";
import { leaveStatusMeta } from "@/config/leaveStatus";
import { ELeaveStatus, LeaveStatus } from "@/types/leaveStatus";

type FilterOption = {
  value: LeaveStatus;
  label: string;
};

type Props = {
  selected: LeaveStatus;
  onChange: (status: LeaveStatus) => void;
};

const LeaveStatusFilter = ({ selected, onChange }: Props) => {
  const options: FilterOption[] = Object.values(ELeaveStatus).map((status) => ({
    value: status,
    label: leaveStatusMeta[status].label,
  }));

  const handleSelectionChange = (
    event: Ui5CustomEvent<
      SegmentedButtonDomRef,
      SegmentedButtonSelectionChangeEventDetail
    >
  ) => {
    const selectedItem = event.detail.selectedItems[0];
    const status = selectedItem?.getAttribute("data-status") as LeaveStatus;
    if (status) {
      onChange(status);
    }
  };

  return (
    <SegmentedButton onSelectionChange={handleSelectionChange}>
      {options.map(({ value, label }) => (
        <SegmentedButtonItem
          key={value}
          icon={leaveStatusMeta[value].icon}
          data-status={value}
          selected={selected === value}
        >
          {label}
        </SegmentedButtonItem>
      ))}
    </SegmentedButton>
  );
};

export default LeaveStatusFilter;
