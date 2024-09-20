import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableBoost from "@/components/Tables/TableBoost";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Boost | Dashboard Earnit",
  description: "Earnit Dashboard Admin Panel Management",
};

const ManageBoostPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Manage Boost" />

      <div className="flex flex-col gap-10">
        <TableBoost/>
      </div>
    </DefaultLayout>
  );
};

export default ManageBoostPage;
