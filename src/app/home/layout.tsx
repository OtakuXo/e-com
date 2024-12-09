import React from "react";
import Topbar from "@/components/topbar/topbar";
import MobileTopBar from "@/components/topbar/mobileTopBar";
import Sidebar from "@/components/sidebar/sidebar";
import Footer from "@/components/footer/footer";
import { Suspense } from "react";
import Loading from "@/components/load";

export default async function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <nav className="sticky z-50 top-0 hidden md:block h-[80px] ">
          <Topbar />
        </nav>
        <nav className=" sticky z-50 top-0 md:hidden h-[80px] ">
          <MobileTopBar />
        </nav>
      </Suspense>

      <div className="flex ">
        <nav className="hidden md:block">
          <Sidebar />
        </nav>
        <div
          className="overflow-y-scroll w-screen"
          style={{ height: "calc(100vh - 80px)" }}
        >
          {children}
          <Footer />
        </div>
      </div>
    </section>
  );
}
