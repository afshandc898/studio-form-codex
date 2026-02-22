import { createContext, useContext, type PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type SectionContextValue = {
  id?: string
}

const SectionContext = createContext<SectionContextValue>({})

function useSectionContext() {
  return useContext(SectionContext)
}

type SectionRootProps = PropsWithChildren<{
  id?: string
  className?: string
}>

function Root({ id, className = '', children }: SectionRootProps) {
  return (
    <SectionContext.Provider value={{ id }}>
      <section id={id} className={`mx-auto max-w-7xl px-6 py-24 lg:px-12 ${className}`}>
        {children}
      </section>
    </SectionContext.Provider>
  )
}

function Header({ className = '', children }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.header>
  )
}

function Kicker({ children }: PropsWithChildren) {
  return <p className="text-xs uppercase tracking-[0.28em] text-white/60">{children}</p>
}

function Title({ children }: PropsWithChildren) {
  const { id } = useSectionContext()
  return (
    <h2 id={id ? `${id}-title` : undefined} className="font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
      {children}
    </h2>
  )
}

function Lead({ children }: PropsWithChildren) {
  return <p className="mt-6 max-w-2xl text-white/72">{children}</p>
}

function Content({ className = '', children }: PropsWithChildren<{ className?: string }>) {
  return <div className={`mt-12 ${className}`}>{children}</div>
}

export const Section = {
  Root,
  Header,
  Kicker,
  Title,
  Lead,
  Content,
}
