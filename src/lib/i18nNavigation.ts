import { createSharedPathnamesNavigation } from "next-intl/navigation";


export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: ["en", "fr"],
  localePrefix: "as-needed",
});
