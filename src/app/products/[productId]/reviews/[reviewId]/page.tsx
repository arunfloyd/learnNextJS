import { notFound } from "next/navigation";

type Params = {
    productId: string;
    reviewId: string;
};

export default function ReviewDetails({ params }: { params: Params }) {
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return (
        <h1>
            Review {params.reviewId} for Product {params.productId}
        </h1>
    )
}