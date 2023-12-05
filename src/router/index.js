import Layout from "@/pages/Layout";
import MonthBill from "@/pages/MonthBill";

import NewBill from "@/pages/NewBill";
import YearBill from "@/pages/YearBill";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MonthBill />,
      },
      {
        path: "/year",
        element: <YearBill />,
      },
    ],
  },
  {
    path: "/new",
    element: <NewBill />,
  },
]);

export default router;
