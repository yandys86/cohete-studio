import { SITE } from "@/lib/site";

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function phoneLink(): string {
  return `tel:+${SITE.whatsapp}`;
}
