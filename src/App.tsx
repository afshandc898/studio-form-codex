import { useMemo, useState, type ComponentType } from 'react'
import {
  ArrowUpRight,
  Building2,
  Instagram,
  Leaf,
  Linkedin,
  Menu,
  MoveRight,
  Sparkles,
  X,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Section } from './components/Section'
import { GlassCard } from './components/GlassCard'

type NavLink = { label: string; href: string }
type Pillar = { title: string; body: string; icon: ComponentType<{ className?: string }> }
type Work = { title: string; type: string; year: string; location: string; span: string }

type Step = { title: string; body: string }
type Team = { name: string; role: string; bio: string }

const navLinks: NavLink[] = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Works', href: '#works' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

const pillars: Pillar[] = [
  {
    title: 'Spatial Clarity',
    body: 'We strip noise away so light can script the day, and material can speak quietly.',
    icon: Sparkles,
  },
  {
    title: 'Low-Impact Living',
    body: 'Passive-first planning, airtight envelopes, and healthy, low-toxicity material systems.',
    icon: Leaf,
  },
  {
    title: 'Craft at Every Junction',
    body: 'From shadow lines to thresholds, every detail is resolved for calm and longevity.',
    icon: Building2,
  },
]

const works: Work[] = [
  { title: 'Northcote Light Court', type: 'Residential', year: '2025', location: 'Northcote', span: 'md:col-span-2 md:row-span-2' },
  { title: 'Elwood Courtyard House', type: 'Renovation', year: '2024', location: 'Elwood', span: 'md:col-span-1 md:row-span-1' },
  { title: 'Brunswick Brick Pavilion', type: 'New Build', year: '2025', location: 'Brunswick', span: 'md:col-span-1 md:row-span-1' },
  { title: 'Fitzroy Terrace Reframed', type: 'Adaptive Reuse', year: '2023', location: 'Fitzroy', span: 'md:col-span-1 md:row-span-1' },
  { title: 'Brighton Coastal Residence', type: 'Residential', year: '2026', location: 'Brighton', span: 'md:col-span-2 md:row-span-1' },
  { title: 'Armadale Garden Rooms', type: 'Extension', year: '2024', location: 'Armadale', span: 'md:col-span-1 md:row-span-1' },
]

const steps: Step[] = [
  { title: 'Consult', body: 'Brief, site and budget alignment with direct strategic recommendations.' },
  { title: 'Concept', body: 'Options, daylight studies and material narratives shaped into one direction.' },
  { title: 'Design', body: 'Approvals, consultant coordination, and precise construction documentation.' },
  { title: 'Build', body: 'Tender review, site collaboration and finish-level quality stewardship.' },
]

const team: Team[] = [
  { name: 'Amelia Hart', role: 'Founding Director', bio: 'Leads monolithic form, light modulation, and calm spatial sequencing.' },
  { name: 'Noah Reeves', role: 'Associate Architect', bio: 'Focuses on embodied-carbon reduction and high-performance detailing.' },
  { name: 'Sofia Lin', role: 'Interiors & Materials', bio: 'Curates tactile palettes of stone, timber and hand-finished surfaces.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120])
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="theme-obsidian min-h-screen bg-[#090b10] text-[#f5f1ea] selection:bg-[#e3a686] selection:text-[#090b10]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="noise-overlay" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090b10]/55 backdrop-blur-2xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <a href="#hero" className="font-display text-xl tracking-[0.28em]">STUDIO FORM</a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2, color: '#f8b090' }}
                className="text-sm uppercase tracking-[0.18em] text-white/70 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <motion.div animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }} className="overflow-hidden border-t border-white/10 bg-[#090b10]/95 md:hidden">
          <div className="px-6 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm uppercase tracking-[0.16em] text-white/70">
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.header>

      <main>
        <section id="hero" className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32 lg:px-12">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <div className="h-full w-full bg-[radial-gradient(circle_at_18%_16%,rgba(253,180,143,0.25),transparent_35%),radial-gradient(circle_at_85%_5%,rgba(141,196,255,0.15),transparent_28%),linear-gradient(130deg,#0d1016_5%,#090b10_56%,#06080d_100%)]" />
          </motion.div>

          <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
              <p className="text-sm uppercase tracking-[0.22em] text-white/65">Melbourne Architecture Studio</p>
              <h1 className="mt-6 font-display text-5xl leading-[0.88] sm:text-7xl lg:text-8xl">Form, Atmosphere, Legacy.</h1>
              <p className="mt-8 max-w-xl text-lg text-white/72">High-performance residential architecture with tactile material palettes, quiet luxury, and daylight-first planning.</p>
              <motion.a whileHover={{ x: 4 }} href="#works" className="mt-10 inline-flex items-center gap-2 border-b border-[#f8b090] pb-1 text-sm uppercase tracking-[0.16em] text-[#f8b090]">
                Explore Projects <MoveRight className="h-4 w-4" />
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="glass-panel glass-cool p-6">
              <div className="spotlight-frame aspect-[4/5] rounded-[1.4rem] p-6">
                <div className="flex h-full flex-col justify-between text-white/70">
                  <span className="text-xs uppercase tracking-[0.2em]">Atmosphere study</span>
                  <span className="font-display text-3xl leading-tight">Stone, timber, and filtered western light.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section.Root id="philosophy">
          <Section.Header>
            <Section.Kicker>Design Ethos</Section.Kicker>
            <Section.Title>Architecture that feels inevitable.</Section.Title>
            <Section.Lead>Our process balances emotional resonance and technical rigour so every space feels calm, clear and deeply livable.</Section.Lead>
          </Section.Header>
          <Section.Content className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div key={pillar.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                  <GlassCard.Root toned="warm" className="h-full p-8">
                    <Icon className="h-7 w-7 text-[#f8b090]" />
                    <GlassCard.Eyebrow>Principle 0{i + 1}</GlassCard.Eyebrow>
                    <GlassCard.Title>{pillar.title}</GlassCard.Title>
                    <GlassCard.Body>{pillar.body}</GlassCard.Body>
                  </GlassCard.Root>
                </motion.div>
              )
            })}
          </Section.Content>
        </Section.Root>

        <Section.Root id="works">
          <Section.Header>
            <Section.Kicker>Portfolio</Section.Kicker>
            <Section.Title>Selected Works</Section.Title>
          </Section.Header>
          <Section.Content className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
            {works.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`${item.span} group relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-[linear-gradient(145deg,#1a2230,#11161f)] p-6`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(173,215,255,0.22),transparent_35%),linear-gradient(to_top,rgba(0,0,0,.65),transparent_52%)]" />
                <div className="relative flex h-full flex-col justify-end">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/75">{item.type} · {item.year}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.location}</p>
                </div>
              </motion.article>
            ))}
          </Section.Content>
        </Section.Root>

        <Section.Root id="process">
          <Section.Header>
            <Section.Kicker>Method</Section.Kicker>
            <Section.Title>From brief to built form.</Section.Title>
          </Section.Header>
          <Section.Content className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <GlassCard.Root key={step.title} toned={index % 2 === 0 ? 'warm' : 'cool'} className="p-8">
                <GlassCard.Eyebrow>0{index + 1}</GlassCard.Eyebrow>
                <GlassCard.Title>{step.title}</GlassCard.Title>
                <GlassCard.Body>{step.body}</GlassCard.Body>
              </GlassCard.Root>
            ))}
          </Section.Content>
        </Section.Root>

        <Section.Root id="team">
          <Section.Header>
            <Section.Kicker>People</Section.Kicker>
            <Section.Title>The studio team</Section.Title>
          </Section.Header>
          <Section.Content className="grid gap-6 md:grid-cols-3">
            {team.map((member, i) => (
              <motion.article key={member.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-panel glass-cool overflow-hidden">
                <div className="aspect-[3/4] bg-[linear-gradient(165deg,#2a3346,#1b2330)] p-6">
                  <p className="font-display text-2xl text-white/75">Portrait</p>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{member.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#add7ff]">{member.role}</p>
                  <p className="mt-4 text-white/72">{member.bio}</p>
                </div>
              </motion.article>
            ))}
          </Section.Content>
        </Section.Root>

        <section id="contact" className="border-y border-white/10 bg-[#0b0f16]/80 py-24 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-12">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">Contact</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95]">Start your project</h2>
              <p className="mt-6 text-white/72">Collingwood, Melbourne — available for custom residential work across Victoria.</p>
            </div>

            <motion.form initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-panel glass-warm space-y-4 p-8">
              {['Name', 'Email', 'Project Type'].map((label) => (
                <label key={label} className="block text-sm uppercase tracking-[0.14em] text-white/70">
                  {label}
                  <input className="mt-2 w-full border-b border-white/25 bg-transparent py-3 text-base text-white outline-none placeholder:text-white/40 focus:border-[#f8b090]" placeholder={label} />
                </label>
              ))}
              <label className="block text-sm uppercase tracking-[0.14em] text-white/70">
                Vision
                <textarea rows={4} className="mt-2 w-full rounded-xl border border-white/20 bg-transparent p-3 text-base text-white outline-none placeholder:text-white/40 focus:border-[#f8b090]" placeholder="Tell us about your site, timeline, and ambitions." />
              </label>
              <button className="inline-flex items-center gap-2 rounded-full border border-[#f8b090] px-6 py-3 text-sm uppercase tracking-[0.16em] text-[#f8b090]">
                Send Enquiry <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-end">
          <div>
            <p className="font-display text-2xl">STUDIO FORM</p>
            <p className="mt-2 text-sm text-white/65">Architecture for light, longevity, and calm living.</p>
          </div>
          <div className="flex items-center gap-4 md:justify-center">
            {[Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-white/70 transition hover:-translate-y-0.5 hover:text-[#f8b090]">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <form className="flex items-center gap-2 border-b border-white/25 pb-2">
            <input className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40" placeholder="Newsletter email" />
            <button className="text-[#f8b090]">
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.14em] text-white/40">© {year} Studio Form · Melbourne</p>
      </footer>
    </div>
  )
}

export default App
