import React from "react";
import { formatter } from "../helperfunctions/Formatter";
import { useNavigate } from "react-router-dom";
import useAddToCart from "../helperfunctions/AddToCart";
import noImage from "../assets/no_image.jpg";
import { calculateDiscount } from "../helperfunctions/CalculateDiscount";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const addToCart = useAddToCart();

  const removeBlur = (img) => {
    img.style.filter = "blur(0px)";
  };

  return (
    <div className="w-full flex flex-col lg:w-48">
      <div onClick={() => navigate(`/product/${product.id}`)} className="w-36 flex flex-col lg:w-48 cursor-pointer">
        {product?.discountPrice && (
          <p className="bg-yellow-300 w-fit px-2 py-1 rounded-full font-semibold text-sm">
            Spar {calculateDiscount(Number(product.price), Number(product.discountPrice))}%
          </p>
        )}
        <img
          src={product?.imageSource}
          alt={product.altText}
          onError={(e) => (e.target.src = noImage)}
          onLoad={(e) => removeBlur(e.target)}
          className="w-28 aspect-square place-self-center lg:w-32 blur-sm"
          loading="lazy"
        />
        <p className="text-xs mt-3 line-clamp-4">{product.title}</p>
        {product.discountPrice ? (
          <div className="flex items-center gap-2">
            <p className="font-bold mt-3 lg:text-md line-through text-sm text-zinc-600">
              {formatter.format(product.price)}
            </p>
            <p className="font-bold mt-3 lg:text-md text-customRed">{formatter.format(product.discountPrice)}</p>
          </div>
        ) : (
          <>
            <p className="font-bold mt-3 lg:text-md">{formatter.format(product.price)}</p>
          </>
        )}
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-customGreen text-white font-semibold w-full py-[5px] rounded-sm mt-1 lg:font-bold hover:bg-customDarkGreen transition-colors"
      >
        Læg i kurv
      </button>
    </div>
  );
};

export default Product;
