import { client } from "../../../sanity/client";
import DonateClient from "@/components/ui/DonateClient";

export const revalidate = 10;

export default async function DonatePage() {
  const donateData = await client.fetch(
    `*[_type == 'donate'][0] {
      _id,
      headline,
      heading,
      description,
      buttonText1,
      buttonLink1,
      buttonText2,
      buttonLink2,
      cta1Text,
      cta1Link,
      cta2Text,
      cta2Link,
      callToAction,
      ctas
    }`
  ).catch((err) => {
    console.error("Error fetching donate data from Sanity:", err);
    return null;
  });

  return <DonateClient data={donateData} />;
}
