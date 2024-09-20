import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GeneralPage from "./general/page";

export const metadata: Metadata = {
  title:
    "General | Dashboard Earnit",
  description: "Earnit Dashboard Admin Panel Management",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <GeneralPage />
      </DefaultLayout>
    </>
  );
}
