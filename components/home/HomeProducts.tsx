"use client";

import data from "@/mocks/products.json";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Title from "./Title";

function HomeProducts() {
  return (
    <div className="relative max-w-screen-xl mx-auto px-6 mt-20">
      <Title>Wishful Union: Unveiling Our Wedding Wishlist</Title>
      <div className="mb-14" />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }}>
        <Masonry columnsCount={5} gutter="10px">
          {data.products.map((product, i) => (
            <Link
              href={`/product/${product.id}`}
              key={i}
              className="bg-[#17392B]"
            >
              <img key={i} src={product.image} className="w-full block" />
              <h4 className="text-white text-center pb-5 text-lg">
                {product.title}
              </h4>
            </Link>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default HomeProducts;
