import { useState, useEffect } from "react";
import { client } from "../lib/index";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await client.get("api/products");
        setProducts(response.data.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  if (isLoading)
    return (
      <p className="text-center text-2xl mt-10 text-gray-500">Loading...</p>
    );
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Error receiving data</p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => {
        const {
          title,
          company,
          description,
          featured,
          category,
          image,
          price,
          shipping,
          colors,
        } = product.attributes;

        return (
          <div
            key={product.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover mb-2 rounded"
              />
            )}
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-500 text-sm mb-1">Company: {company}</p>
            <p className="text-gray-700 mb-1">Price: ${price}</p>
            <p className="text-gray-600 text-sm mb-2">{description}</p>
            <p className="text-sm mb-2">
              Category: <strong>{category}</strong> | Featured:{" "}
              <strong>{featured ? "Yes" : "No"}</strong> | Shipping:{" "}
              <strong>{shipping ? "Available" : "Not Available"}</strong>
            </p>
            {colors?.length > 0 && (
              <div className="flex gap-1 mb-2">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-6 h-6 rounded-full border"
                  ></span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
