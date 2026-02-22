import { createContext, useContext, type PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type GlassCardContextValue = {
  toned?: 'warm' | 'cool'
}

const GlassCardContext = createContext<GlassCardContextValue>({ toned: 'warm' })

function useGlassCard() {
  return useContext(GlassCardContext)
}

function Root({ toned = 'warm', className = '', children }: PropsWithChildren<{ toned?: 'warm' | 'cool'; className?: string }>) {
  return (
    <GlassCardContext.Provider value={{ toned }}>
      <motion.article
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className={`glass-panel ${toned === 'warm' ? 'glass-warm' : 'glass-cool'} ${className}`}
      >
        {children}
      </motion.article>
    </GlassCardContext.Provider>
  )
}

function Eyebrow({ children }: PropsWithChildren) {
  const { toned } = useGlassCard()
  return <p className={`text-xs uppercase tracking-[0.2em] ${toned === 'warm' ? 'text-[#f8b090]' : 'text-[#add7ff]'}`}>{children}</p>
}

function Title({ children }: PropsWithChildren) {
  return <h3 className="mt-4 font-display text-3xl leading-tight">{children}</h3>
}

function Body({ children }: PropsWithChildren) {
  return <p className="mt-4 text-white/72">{children}</p>
}

export const GlassCard = {
  Root,
  Eyebrow,
  Title,
  Body,
}
