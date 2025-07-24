
import ShopDetailsMainArea from "@components/product-details/product-details-area-main";


export const metadata = {
  title: "Product Details - greenenergypowerco",
};

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  return <ShopDetailsMainArea id={id} />;
};

export default ProductDetailsPage;
