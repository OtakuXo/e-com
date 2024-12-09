import Catagorized from "./fetchCatagorizedItems";

async function Page({ params }: { params: { catagory: string } }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[92%]">
        <section className="w-full my-[20px] ">
          <h4 className="w-full text-[2rem]">{params.catagory}</h4>
          <div className="w-full gap-[4px] justify-center">
            <Catagorized params={params.catagory} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
