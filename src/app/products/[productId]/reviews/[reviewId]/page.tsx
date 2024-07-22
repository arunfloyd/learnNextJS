"use client";
import { notFound } from "next/navigation";

type Params = {
  productId: string;
  reviewId: string;
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params }: { params: Params }) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error on loading Review");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  );
}
