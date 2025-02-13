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

export default async function Menu({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Menu' });

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <main className="flex flex-col justify-center">
            {t('activites').split('|').map((a) => {
                return (
                    <div>
                        {a}
                    </div>
                )
            })}
        </main>
    );
}
