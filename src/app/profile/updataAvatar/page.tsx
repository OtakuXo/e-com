"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { updateAvatarAction } from "@/actions/updateAvatar";

function Page() {
  const route = useRouter();
  const [image, setImage] = useState<{ img: string }>({ img: "" });

  const updataAvatar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await updateAvatarAction(image.img);
      route.push("/home");
      alert(data.msg);
    } catch (err) {
      console.log(err);
    }
    console.log(image);
  };

  return (
    <>
      <Image
        width={500}
        height={500}
        sizes="100vw"
        style={{
          width: "300px",
          height: "auto",
          maxHeight: "80vh",
        }}
        src={image.img}
        alt="image"
      />
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => updataAvatar(e)}>
        <label htmlFor="image">your avatar</label>
        <input
          name="image"
          type="file"
          placeholder="choose images"
          onChange={(e) => {
            const fileReader = new FileReader();

            fileReader.onload = () => {
              setImage({ img: `${fileReader.result}` });
            };

            if (e.target.files) {
              fileReader.readAsDataURL(e.target.files[0]);
            }
          }}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Page;
