import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ProductStatusPage from "@/components/ui/ProductStatusPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("botSeller");
  return { title: t("metaTitle"), description: t("metaDesc") };
}

export default function BotSeller() {
  return (
    <ProductStatusPage
      namespace="botSeller"
      icon="🤖"
      productName="BotSeller"
      heroWaLink="https://wa.me/5491155236820?text=Hola!%20Me%20interesa%20BotSeller%2C%20%C2%BFcu%C3%A1ndo%20est%C3%A1%20disponible%3F"
      statusWaLink="https://wa.me/5491155236820?text=Hola!%20Quiero%20enterarme%20cuando%20BotSeller%20est%C3%A9%20disponible"
    />
  );
}
