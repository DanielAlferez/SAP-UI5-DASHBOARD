import React, { useState } from "react";
import { Dialog, Button } from "@ui5/webcomponents-react";
import { LeaveStatusTable } from "@/types/leaveStatus";

type ConfirmDialogResult = {
  ConfirmDialog: React.ReactNode;
  openConfirmDialog: (id: string, status: LeaveStatusTable) => void;
};

export function useConfirmDialog(
  onConfirmAction: (id: string, status: LeaveStatusTable) => void
): ConfirmDialogResult {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<LeaveStatusTable | null>(null);

  const openConfirmDialog = (id: string, status: LeaveStatusTable) => {
    setSelectedId(id);
    setStatus(status);
    setOpen(true);
  };

  const handleConfirm = () => {
    if (selectedId && status) {
      onConfirmAction(selectedId, status);
    }
    reset();
  };

  const handleCancel = () => reset();

  const reset = () => {
    setOpen(false);
    setSelectedId(null);
    setStatus(null);
  };

  const ConfirmDialog = (
    <Dialog
      open={open}
      headerText="Confirm Action"
      footer={
        <>
          <Button design="Emphasized" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button design="Transparent" onClick={handleCancel}>
            Cancel
          </Button>
        </>
      }
    >
      Are you sure you want to{" "}
      <strong>{status === "APPROVED" ? "approve" : "reject"}</strong> this
      request?
    </Dialog>
  );

  return { ConfirmDialog, openConfirmDialog };
}
