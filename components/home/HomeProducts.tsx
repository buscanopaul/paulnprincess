"use client";

import { Product } from "@/lib/type";
import { setSelected } from "@/redux/features/auth-slice";
import { useAppDispatch } from "@/redux/store";
import { supabase } from "@/supabase";
import Image from "next/image";
import { useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CheckoutForm from "./CheckoutForm";
import Title from "./Title";

function HomeProducts() {
  const [products, setProducts] = useState([]);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("");
  const formRef = useRef(null);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select()
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
        return;
      }

      if (data && data.length > 0) {
        setProducts(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  fetchProducts();

  const handleSelect = (product: Product) => {
    if (!product.isTaken) {
      setActive(product.id);
      dispatch(
        setSelected({
          productId: product.id,
          productName: product.product_name,
        })
      );
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (product.id == active) {
      setActive("");
    }
  };

  return (
    <div className="relative max-w-screen-xl mx-auto px-6 mt-20">
      <Title>Wishful Union: Unveiling Our Wedding Wishlist</Title>
      <p className="text-center mt-10 text-xs text-gray-500">
        *This is merely an example; any brands will work
      </p>
      <div className="mb-14" />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 5 }}>
        <Masonry columnsCount={5} gutter="10px">
          {products.map((product: Product, i) => {
            return (
              <button
                onClick={() => handleSelect(product)}
                key={i}
                className={`${
                  active == product.id && !product.isTaken
                    ? "bg-[#DABF94]"
                    : "bg-[#17392B]"
                } relative transition-all ${
                  product.isTaken && "hover:cursor-default"
                }`}
              >
                <Image
                  className={`w-full block ${product.isTaken && "grayscale"}`}
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${product.id}.png`}
                  width={200}
                  height={200}
                  alt="product"
                />
                {product.isTaken && (
                  <Image
                    className="absolute top-1/3 left-[60px]"
                    src="/images/products/approved.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                )}
                <h4 className="text-white text-center pb-5 text-lg">
                  {product.product_name}
                </h4>
              </button>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      <CheckoutForm formRef={formRef} />
    </div>
  );
}

export default HomeProducts;
