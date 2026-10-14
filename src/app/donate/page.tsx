import { client } from "../../../sanity/client";
import DonateClient from "@/components/ui/DonateClient";

export const revalidate = 10;

export default async function DonatePage() {
  const donateData = await client.fetch("*[_type == 'donate'][0]").catch((err) => {
    console.error("Error fetching donate data from Sanity:", err);
    return null;
  });

  return <DonateClient data={donateData} />;
}
