export default function ProductDetails({ params }: { params: { productId: string } }) {
    return <h1>Hello {params.productId} </h1>
}
