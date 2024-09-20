import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableEarn from "@/components/Tables/TableEarn";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Earn | Dashboard Earnit",
  description: "Earnit Dashboard Admin Panel Management",
};

const ManageFarmPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Manage Earn" />

      <div className="flex flex-col gap-10">
        <TableEarn />
      </div>
    </DefaultLayout>
  );
};

export default ManageFarmPage;
