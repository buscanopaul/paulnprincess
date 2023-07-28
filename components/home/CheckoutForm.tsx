"use client";

import { clearSelected } from "@/redux/features/auth-slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { supabase } from "@/supabase";
import Image from "next/image";
import { FormEvent, useEffect, useState, useTransition } from "react";
import NewEntry from "./NewEntry";
import Title from "./Title";

type CheckoutFormProps = {
  formRef: any;
};
function CheckoutForm({ formRef }: CheckoutFormProps) {
  const dispatch = useAppDispatch();
  const selectedValue = useAppSelector((state) => state.auth.selectedValue);
  const [isErrorName, setIsErrorName] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter name");
      setIsErrorName(true);
    } else {
      const { data: checkIfTaken, error: errorIfTaken } = await supabase
        .from("products")
        .select("isTaken")
        .eq("id", selectedValue.productId);

      if (errorIfTaken) {
        console.log(errorIfTaken);
        return;
      }

      if (checkIfTaken && !checkIfTaken[0].isTaken) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("message", message);
        formData.append("productId", selectedValue.productId);
        setIsErrorName(false);
        startTransition(() => NewEntry(formData));
        setName("");
        setMessage("");
        dispatch(clearSelected());
        setIsErrorName(false);
        setIsSuccess(true);
      } else {
        alert("Product already taken. Please select a new one.");
        setName("");
        setMessage("");
        dispatch(clearSelected());
        setIsErrorName(false);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }
  }, [isSuccess]);

  return (
    <div className="relative max-w-screen-sm mx-auto px-6 mt-20">
      {isPending && (
        <div className="bg-[#F3E3E3] absolute z-10 h-full w-full items-center justify-center flex flex-col">
          <Image
            src="/images/loading.gif"
            width={300}
            height={300}
            alt="loading"
          />
          <h4 className="text-[#17392B] mt-7">Loading...</h4>
        </div>
      )}
      {isSuccess && (
        <div className="mt-32">
          <p className="text-[#17392B] text-center text-xs mb-5">
            We have gotten your entry.
          </p>
          <Title>Thank you</Title>
        </div>
      )}
      <div ref={formRef} />
      {selectedValue && selectedValue.productId != "" && (
        <div>
          <Title>Oh my God!</Title>
          <div className="flex items-center gap-5">
            <h4 className="text-[#17392B] text-2xl">Great Choice:</h4>
            <div className="flex items-center gap-5 border bg-[#F8F9FD] rounded-xl px-4 w-[250px] mt-10 mb-10 justify-center">
              <h4 className="text-[#17392B]">{selectedValue.productName}</h4>
              <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${selectedValue.productId}.png`}
                width={50}
                height={50}
                alt=""
              />
            </div>
          </div>
          <form
            method="post"
            className="flex flex-col"
            onSubmit={handleSubmit}
            id="form"
          >
            <label htmlFor="name" className="text-[#17392B] mb-1 text-sm">
              Name (anonymous)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border  ${
                isErrorName ? "border-red-500" : "bg-[#F8F9FD]"
              } h-10 rounded-lg px-2 text-[#17392B]`}
            />
            <label
              htmlFor="message"
              className="mt-8 mb-1 text-[#17392B] text-sm"
            >
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              cols={50}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border bg-[#F8F9FD] rounded-lg p-2 text-[#17392B]"
            />
            <input
              type="hidden"
              id="productId"
              name="productId"
              value={selectedValue.productId}
            />
            <button
              type="submit"
              className="bg-[#17392B] w-40 mx-auto p-3 text-white rounded-full mt-8 uppercase"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      )}
      <div className="h-40" />
    </div>
  );
}

export default CheckoutForm;
