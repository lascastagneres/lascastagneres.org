import Loading from '@/app/[locale]/loading';
import LcFooter from '@/components/LcFooter';
import LcHeader from '@/components/LcHeader';
import { routing } from '@/i18n/i18nNavigation';
import '@/styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Loading />}>
            <div className="flex flex-col min-h-screen">
              <div className="h-[10vh]">
                <LcHeader />
              </div>
              <div className="flex-1 flex items-center justify-center bg-gray-100 p-6">
                {children}
              </div>
              <div className="h-[10vh]">
                <LcFooter />
              </div>
            </div>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
