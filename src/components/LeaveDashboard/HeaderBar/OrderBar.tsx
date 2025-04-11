import { Button } from "@ui5/webcomponents-react";
import React from "react";

const OrderBar = ({
  sortOrder,
  onToggleSort,
}: {
  sortOrder: "asc" | "desc";
  onToggleSort: () => void;
}) => {
  return (
    <Button
      design="Positive"
      onClick={onToggleSort}
      icon={sortOrder === "asc" ? "sort-ascending" : "sort-descending"}
    >
      {sortOrder === "asc" ? "Sort Date Ascending" : "Sort Date Descending"}
    </Button>
  );
};

export default OrderBar;
