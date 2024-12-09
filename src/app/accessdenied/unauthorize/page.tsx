import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div>
      <p>you are unauthorize to do this</p>
      <Link href={"/api/auth/signin?callbackUrl=/home"}>
        <button>sign in</button>
      </Link>
    </div>
  );
}

export default Page;
