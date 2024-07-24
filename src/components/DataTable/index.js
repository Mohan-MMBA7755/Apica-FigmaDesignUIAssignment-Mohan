import customerOrders from "../mockData/customerOrderDetails";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";

const DataTable = ({ filteredOrders }) => {
  const columns = [
    { field: "name", headerName: "Customer Name", width: 150 },
    { field: "orderDate", headerName: "Order Date", type: Date, width: 150 },
    { field: "orderType", headerName: "Order Type", width: 150 },
    {
      field: "tractingId",
      headerName: "Tracking Id",
      type: "number",
      width: 120,
    },
    {
      field: "orderTotal",
      headerName: "Order Total",
      type: "number",
      width: 150,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => (
        <select className="p-2 rounded-lg bg-slate-200">
          <option>{params.value}</option>
        </select>
      ),
    },
    {
      field: "Status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Completed"
              ? "success"
              : params.value === "Pending"
                ? "warning"
                : "error"
          }
        />
      ),
    },
  ];
  return (
    <div style={{ height: 600, width: "100%", marginTop: "20px" }}>
      <DataGrid
        rows={filteredOrders}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
