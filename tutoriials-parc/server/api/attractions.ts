import { Attraction } from "~/model/attraction";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler<Promise<Attraction[]>>(async (event) => {
  const client = await serverSupabaseClient(event);

  const { data, statusText } = await client.from("attraction").select("*");
  console.log(data);
  console.log("Error :", statusText);
  return data ?? [];
});
