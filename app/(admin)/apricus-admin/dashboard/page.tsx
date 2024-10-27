//File : /apricus-admin/dashboard/page.tsx
import React from "react";
import LoginPage from "../auth/page";
import ContactStatistics from "./stats/page";

const page = () => {
  return (
    <div className="">
      <ContactStatistics />
    </div>
  );
};

export default page;
