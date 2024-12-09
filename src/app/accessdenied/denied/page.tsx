import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div>
      <p>you are logged in but you cant access this page</p>
      <Link href={"/home"}>
        <button>home</button>
      </Link>
    </div>
  );
}

export default Page;
