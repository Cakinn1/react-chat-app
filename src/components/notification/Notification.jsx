import React from "react";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function Notification() {
  return (
    <div className="">
      <ToastContainer position="bottom-right" />
    </div>
  );
}
