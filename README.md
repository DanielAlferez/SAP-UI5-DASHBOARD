# SAP UI5 Dashboard

This project is a **Leave Request Dashboard** built using **Next.js**, **React**, and **SAP UI5 Web Components**. It provides a user-friendly interface for managing leave requests, including features like filtering, sorting, and status updates.

## What You Implemented

- **Leave Request Dashboard**: A comprehensive dashboard to view, filter, and manage leave requests.
- **Leave Table**: Displays leave requests in a tabular format with sorting and filtering capabilities.
- **Leave Cards**: A card-based view of leave requests, optimized for mobile devices and showing detailed information for each request.
- **Confirmation Dialogs**: Custom dialogs for approving or rejecting leave requests.
- **Leave Summary Cards**: Displays summarized leave request statistics.
- **Custom Hooks**: Implemented reusable hooks like `useConfirmDialog` and `useLeaveRequests` for managing state and actions.
- **SegmentedButton for Filtering**: Used to filter leave requests by status (e.g., Pending, Approved, Rejected).
- **Button for Sorting**: Allows users to toggle between ascending and descending order by request date.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd sap-ui5-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variable for the backend URL. Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_API_URL=https://67f551e6913986b16fa426fd.mockapi.io/api/v1/
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## How to Run the Tests

1. Run the test suite using the following command:

   ```bash
   npm run test
   ```

2. The tests are written using **Vitest** and **React Testing Library**. The tests are written using Vitest and React Testing Library. They cover utility functions and key components of the dashboard:

### ✅ Utility Tests (`utils/__tests__`)

- `leaveUtils.test.ts`: Tests for leave management utilities.
- `updateLeaveStatus.test.ts`: Verifies the logic for updating leave status.

### ✅ Component Tests (`components/.../__tests__`)

- `LeaveCardList.test.tsx`: Tests for rendering and displaying leave cards.
- `LeaveTableRow.test.tsx`: Ensures correct rendering of table rows with dynamic data.
- `LeaveTableStatus.test.tsx`: Tests status-specific rendering logic in the leave table.

## What UI5 Components Were Used

The project leverages the following **SAP UI5 Web Components**:

- **`@ui5/webcomponents-react`**:

  - `Table`, `TableRow`, `TableCell`, `TableRowAction`: Used for displaying leave requests in tabular format.
  - `Card`, `CardHeader`: Used for showing leave requests in a card layout.
  - `Dialog`: Used for approval and rejection confirmation dialogs.
  - `Button`: Used for triggering confirmation actions and toggling sort order.
  - `SegmentedButton`: Used for filtering leave requests by status.
  - `Icon`: Used to visually represent leave types and statuses.
  - `Tag`: Used to display leave statuses and leave types in a compact and styled way.

- **`@ui5/webcomponents`**:

  - Core assets and utilities for SAP UI5 components.

- **`@ui5/webcomponents-fiori`**:
  - Additional Fiori-specific components and assets.

## Additional Notes

- The project uses **Tailwind CSS** for styling alongside SAP UI5 components.
- The application is optimized for both desktop and mobile views.
