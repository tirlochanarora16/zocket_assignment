import React from "react";
import Image from "next/image";

import { FaRegCheckCircle } from "react-icons/fa";

type Product = {
  _id: string;
  imgUrl: string;
  name: string;
  price: number;
};

interface Iprops {
  products: Product[];
  selectedProduct: number;
  setSelectedProduct: React.Dispatch<React.SetStateAction<number>>;
}

const CampaignProduct: React.FC<Iprops> = ({
  products,
  selectedProduct,
  setSelectedProduct,
}) => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {products.map((product, index) => (
        <div
          key={index}
          className={`border-[1.5px] border-[#F3F3F3] rounded-[10px] flex items-center p-[13px] cursor-pointer ${
            selectedProduct === index ? "bg-[#E7F0FF4D] border-[#0F6EFF]" : ""
          }`}
          onClick={() => setSelectedProduct(index)}
        >
          <div className="w-[58px] h-[54px] relative">
            <Image src={product.imgUrl} alt={product.name} layout="fill" />
          </div>
          <div className="ml-[13px]">
            <p className="text-black font-[500] text-[15px] leading-8">
              {product.name}
            </p>
            <p className="text-[#A5A5A5] font-[500] text-[14px] leading-8">
              Rs {product.price}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <FaRegCheckCircle
              className={`${
                selectedProduct === index ? "text-[#0F6EFF]" : "text-[#D8D8D8]"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignProduct;
