"use server";

import { supabase } from "@/supabase";
import { revalidatePath } from "next/cache";

async function NewEntry(formData: FormData) {
  const name = formData.get("name");
  const message = formData.get("message");
  const productId = formData.get("productId");

  const { data: insertData, error } = await supabase.from("entries").insert({
    name: name,
    message: message,
    product_id: productId,
  });
  if (error) {
    console.log(error.message);
    return;
  }

  const { data: updateData } = await supabase
    .from("products")
    .update({ isTaken: true })
    .eq("id", productId);

  revalidatePath("/");
}

export default NewEntry;
