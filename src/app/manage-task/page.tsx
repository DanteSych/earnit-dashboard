import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Task | Dashboard Earnit",
  description: "Earnit Dashboard Admin Panel Management",
};

const ManageTaskPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Manage Task" />

      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default ManageTaskPage;
