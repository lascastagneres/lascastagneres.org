import { Link } from '@/i18n/i18nNavigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  return {
    title: t('home'),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="flex flex-col">
      <p className="w-full text-2xl">{t('desc')}</p>
      <Link
        href="menu"
        className="w-[600px] h-[100px] mt-10 bg-black text-white flex justify-center items-center font-bold text-4xl">
        {t('menu').toUpperCase()}
      </Link>
    </main>
  );
}
