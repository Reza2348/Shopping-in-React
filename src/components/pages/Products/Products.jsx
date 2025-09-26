import { useState, useEffect } from "react";
import { client } from "../../lib/index";
import { useCart } from "../../context/CartContext";
import {
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ColorsWrapper,
  ColorCircle,
  AddButton,
} from "./Products.Styled";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { addItem } = useCart();

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
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "1.5rem",
          color: "gray",
        }}
      >
        Loading...
      </p>
    );

  if (isError)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "red",
          fontSize: "1.5rem",
          color: "red",
        }}
      >
        Error receiving data
      </p>
    );

  return (
    <ProductsGrid>
      {products.map((product) => {
        const { title, company, description, category, image, price, colors } =
          product.attributes;

        return (
          <ProductCard key={product.id}>
            {image && <ProductImage src={image} alt={title} />}
            <ProductTitle>{title}</ProductTitle>
            <ProductInfo>Company: {company}</ProductInfo>
            <ProductInfo>Price: ${price}</ProductInfo>
            <ProductInfo>{description}</ProductInfo>
            <ProductInfo>
              Category: <strong>{category}</strong>
            </ProductInfo>

            {colors?.length > 0 && (
              <ColorsWrapper>
                {colors.map((color, index) => (
                  <ColorCircle key={index} color={color} />
                ))}
              </ColorsWrapper>
            )}

            <AddButton onClick={() => addItem(product)}>Add to cart</AddButton>
          </ProductCard>
        );
      })}
    </ProductsGrid>
  );
};

export default Products;
