import React, { Suspense } from "react";
import Topbar from "@/components/topbar/topbar";
import MobileTopBar from "@/components/topbar/mobileTopBar";
import Loading from "@/components/load";

export default async function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen flex flex-col ">
      <nav className="hidden md:block">
        <Topbar />
      </nav>
      <nav className="md:hidden">
        <MobileTopBar />
      </nav>
      <div className="flex-1 ">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </section>
  );
}
