import Image from "next/image";
import Links from "./links";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

async function Topbar() {
  const session = await getServerSession(options);
  // console.log(session);
  const logout = [
    { text: "sign in", link: "/api/auth/signin?callbackUrl=/home" },
    { text: "sign up", link: "http://localhost:3000/authentication/signup" },
  ];

  const login = [
    { text: "cart", link: "http://localhost:3000/home/cart" },
    { text: "log out", link: "/api/auth/signout?callbackUrl=/home" },
  ];

  return (
    <section className="bg-color2 h-full flex justify-between items-center p-[16px]  ">
      <Image
        src={"/next.svg"}
        width={0}
        height={0}
        priority={true}
        style={{
          minWidth: "150px",
          width: "10vw",
          maxWidth: "250px",
          height: "auto",
        }}
        alt=""
      />
      <div className="flex justify-center">
        <form className="flex items-center">
          <label htmlFor="search">search</label>
          <input
            id="search"
            type="text"
            name="search"
            className="w-[75%] px=[8px] p-[4px] text-black rounded-[12px]"
          />
          <input type="submit" value={"search"} />
        </form>
      </div>
      <div className="flex items-center gap-[4px] ">
        {session ? (
          <ul className="flex gap-[8px] items-center ">
            <Links
              i={{
                text: session.user.name,
                link: "http://localhost:3000/profile",
              }}
            />
            {login.map((i) => (
              <Links key={i.link} i={i} />
            ))}
          </ul>
        ) : (
          <ul className="flex gap-[8px]">
            {logout.map((i) => (
              <Links key={i.link} i={i} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Topbar;
