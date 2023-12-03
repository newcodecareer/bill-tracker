import { getBills } from "@/store/modules/billStore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBills());
  }, [dispatch]);

  return (
    <div>
      <Outlet />
      Layout
    </div>
  );
};

export default Layout;
