import { Metadata } from "next";

export const generrateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Hello {params.productId} </h1>;
}
