'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import AnimatedBackground from '@/components/AnimatedBackground'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import YamadaLogo from '@/components/YamadaLogo'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <header className="container mx-auto p-4 flex justify-between items-center">
          <YamadaLogo />
          <LanguageSwitcher />
        </header>
        <main className="container mx-auto p-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            {t('title')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-primary/50">
              <CardHeader>
                <CardTitle>{t('cardTitle')}</CardTitle>
                <CardDescription>{t('cardDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder={t('namePlaceholder')} className="bg-white/10 text-white placeholder-white/50" />
                  <Input placeholder={t('emailPlaceholder')} type="email" className="bg-white/10 text-white placeholder-white/50" />
                  <Button className="w-full">{t('submitButton')}</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}