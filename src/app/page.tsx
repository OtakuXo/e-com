import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <main className="h-screen flex justify-center items-center ">
      <div className="p-10 gap-[40px] bg-color2 md:w-[60%] w-[92%] rounded-3xl justify-center ">
        <div className="flex justify-center">
          <div className="flex flex-col justify-start items-start ">
            <div>
              <h2 className="text-[4rem]">Anime store</h2>
              <div>
                <Image
                  src={"/user.png"}
                  width={0}
                  height={0}
                  alt={"image"}
                  sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
                  // className="md:block hidden"
                  style={{
                    width: "100%",
                    height: "auto",
                    minHeight: "200px",
                    // borderRadius: "0.5rem",
                    objectFit: "cover",
                    objectPosition: "50% 0%",
                  }}
                  priority={true}
                />
              </div>
              <div className="flex justify-center items-center mt-10 before:content-[''] before:bg-color1 before:w-3 before:h-20 before:mr-6 before:rounded-lg">
                <div>
                  <p>Get your Waifu</p>
                  <p>Get your Husbendo</p>
                  <p>Get your huggong pillo</p>
                  <p>Get your plous</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Link href={"/home"}>
                <button className="bg-color2 hover:bg-color1 mt-10 px-[16px] py-[8px] rounded-sm  ">
                  start exploring
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
