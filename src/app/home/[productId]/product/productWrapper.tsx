import { getProductAction } from "@/actions/getProduct";
import Product from "./product";

async function ProductWrapper({ params }: { params: string }) {
  const data = await getProductAction(params);
  return <Product data={data} />;
}

export default ProductWrapper;
