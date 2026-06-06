import { redirect } from "next/navigation";
import { SITE } from "@/lib/site";

export default function RootPage(): never {
  redirect(`/${SITE.defaultLang}`);
}
