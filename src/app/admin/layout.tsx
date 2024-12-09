import React from "react";
import Topbar from "@/components/topbar/topbar";
import MobileTopBar from "@/components/topbar/mobileTopBar";
import AdminSidebar from "@/components/sidebar/adminSidebar";
import { Suspense } from "react";
import Loading from "@/components/load";

export default async function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex">
      <div className=" min-h-full hidden md:block ">
        <AdminSidebar />
      </div>
      <div className="min-h-screen w-screen">
        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      </div>
    </section>
  );
}
