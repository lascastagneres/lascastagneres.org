import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'it', 'fr'],
  defaultLocale: 'fr',
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
