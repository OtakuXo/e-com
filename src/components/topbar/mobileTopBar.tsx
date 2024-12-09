import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Drawer from "./drawer";
import Links from "./links";

async function Topbar() {
  const session = await getServerSession(options);

  const logout = [
    { text: "sign in", link: "/api/auth/signin?callbackUrl=/home" },
    { text: "sign up", link: "http://localhost:3000/authentication/signup" },
  ];

  const login = [
    { text: session?.user.name, link: "http://localhost:3000/profile" },
    { text: "log out", link: "/api/auth/signout?callbackUrl=/home" },
  ];

  return (
    <section className="bg-color1 h-full flex items-center ">
      <div className="w-full flex justify-between p-5 ">
        <Image
          src={"/next.svg"}
          width={0}
          height={0}
          priority={true}
          style={{
            minWidth: "100px",
            width: "10vw",
            maxWidth: "250px",
            height: "auto",
          }}
          alt=""
        />

        <ul className="flex items-center gap-[8px]">
          <Links
            i={{
              text: "cart",
              link: "http://localhost:3000/home/cart",
            }}
          />
          {session ? <Drawer i={login} /> : <Drawer i={logout} />}
        </ul>
      </div>
    </section>
  );
}

export default Topbar;
