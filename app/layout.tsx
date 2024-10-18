import './global.css'
import { Inter } from 'next/fout/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

const Inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale 'ja' }]
}

export default async function RootLayout({
    children,
    params: { locale}
}: {
    childen: React.ReactNode
    params: { locale: string }
}) {
    let messages
    try {
        messages = (await import('@/messages/${locale}.json')).default
    } catch (error) {
        notFound()
    }

    return (
        <html lang={locale}>
            <body className={Inter.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}