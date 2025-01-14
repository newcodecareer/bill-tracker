import { getBills } from "@/store/modules/billStore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TabBar } from "antd-mobile";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline,
} from "antd-mobile-icons";
import "./index.scss";

const tabs = [
  {
    key: "/",
    title: "月度账单",
    icon: <BillOutline />,
  },
  {
    key: "/new",
    title: "记账",
    icon: <AddCircleOutline />,
  },
  {
    key: "/year",
    title: "年度账单",
    icon: <CalculatorOutline />,
  },
];

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBills());
  }, [dispatch]);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="layout">
      <div className="container">
        {/* 二级路由出口 */}
        <Outlet />
      </div>

      <TabBar
        className="footer"
        activeKey={location.pathname}
        onChange={(key) => navigate(key)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Layout;
