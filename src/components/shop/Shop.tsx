import { getAllProducts } from "../../../redux/actions/products";

const Shop = async () => {

  const products = await getAllProducts();
  console.log('products', products);
  return (
    <>
      {
        products && products?.length > 0 ? (
          <div className="py-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {
              products?.map((item) => (
                <>{item.title}</>
              ))
            }
          </div>
        ) : (
          <div className="py-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <p>No Product Find</p>
          </div>
        )
      }
    </>
  )
}

export default Shop;