import { useMemo, useState, type ComponentType } from 'react'
import {
  ArrowUpRight,
  Building2,
  Instagram,
  Linkedin,
  Leaf,
  Menu,
  MoveRight,
  Sparkles,
  X,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
    title: 'Minimalism',
    body: 'We remove the unnecessary so light, shadow, and material can become the architecture.',
    icon: Sparkles,
  },
  {
    title: 'Sustainability',
    body: 'Passive solar performance, low-toxicity materials, and deeply efficient planning for long life.',
    icon: Leaf,
  },
  {
    title: 'Craft',
    body: 'Every junction is resolved with care — concrete, timber, brass, and stone in quiet balance.',
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
  { title: 'Consult', body: 'Site, brief, lifestyle and budget alignment.' },
  { title: 'Concept', body: 'Spatial narratives, daylight testing, and mood studies.' },
  { title: 'Design', body: 'Detailed documentation, planning, and consultant coordination.' },
  { title: 'Build', body: 'Tender support, site reviews, and finish-level quality control.' },
]

const team: Team[] = [
  {
    name: 'Amelia Hart',
    role: 'Founding Director',
    bio: 'Leads design direction with a focus on monolithic form, light modulation, and calm living.',
  },
  {
    name: 'Noah Reeves',
    role: 'Associate Architect',
    bio: 'Specialises in sustainable systems, embodied carbon reduction, and passive house detailing.',
  },
  {
    name: 'Sofia Lin',
    role: 'Interiors & Materials',
    bio: 'Curates tactile palettes with local stone, timber, and hand-finished surfaces.',
  },
]

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const year = useMemo(() => new Date().getFullYear(), [])
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -80])

  return (
    <div className="bg-[#1a1a1a] text-[#faf9f7] selection:bg-[#c75b39] selection:text-[#faf9f7]">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1a1a1a]/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <a href="#" className="font-serif text-xl tracking-[0.24em]">STUDIO FORM</a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <motion.a whileHover={{ y: -2, color: '#c75b39' }} key={link.href} href={link.href} className="text-sm uppercase tracking-[0.18em] text-[#faf9f7]/70 transition-colors">
                {link.label}
              </motion.a>
            ))}
          </nav>
          <motion.button whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.04 }} className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
        <motion.div animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }} className="overflow-hidden border-t border-white/10 bg-[#1a1a1a] md:hidden">
          <div className="flex flex-col p-6">
            {navLinks.map((link) => (
              <motion.a whileHover={{ x: 4, color: '#c75b39' }} key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-3 uppercase tracking-[0.16em] text-[#faf9f7]/75">
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.header>

      <main>
        <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32 lg:px-12" id="hero">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(199,91,57,0.26),transparent_35%),linear-gradient(130deg,#252525_5%,#1a1a1a_40%,#101010_100%)]" />
          </motion.div>
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-end">
            <motion.div initial="hidden" animate="show" variants={sectionReveal} transition={{ duration: 0.8 }}>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#faf9f7]/70">Melbourne Architecture Studio</p>
              <h1 className="font-serif text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">Form Follows Light</h1>
              <p className="mt-6 max-w-xl text-[#faf9f7]/75">Minimal, sustainable homes shaped by atmosphere, material honesty, and indoor-outdoor continuity.</p>
              <motion.a whileHover={{ x: 4 }} href="#works" className="mt-10 inline-flex items-center gap-2 border-b border-[#c75b39] pb-1 text-sm uppercase tracking-[0.18em] text-[#c75b39]">
                View Selected Works <MoveRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="rounded-2xl border border-white/15 p-6 backdrop-blur-sm">
              <div className="aspect-[4/5] rounded-xl bg-[linear-gradient(170deg,#2f2f2f_0%,#171717_100%)] p-6">
                <div className="flex h-full items-end justify-between text-[#faf9f7]/65">
                  <span className="font-serif text-3xl">Atmosphere Study</span>
                  <span className="text-xs uppercase tracking-[0.16em]">Hero Visual</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section id="philosophy" className="mx-auto max-w-7xl px-6 py-24 lg:px-12" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.6 }}>
          <h2 className="font-serif text-4xl sm:text-5xl">Our Philosophy</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.article key={pillar.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} whileHover={{ y: -8 }} className="group rounded-2xl border border-white/10 bg-[#222] p-8">
                  <Icon className="h-7 w-7 text-[#c75b39]" />
                  <h3 className="mt-10 font-serif text-3xl">{pillar.title}</h3>
                  <motion.p initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }} className="mt-4 text-[#faf9f7]/70">
                    {pillar.body}
                  </motion.p>
                  <div className="mt-8 h-px w-full bg-white/10 transition group-hover:bg-[#c75b39]/70" />
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <section id="works" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionReveal}>
            <h2 className="font-serif text-4xl sm:text-5xl">Selected Works</h2>
          </motion.div>
          <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-3">
            {works.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ scale: 1.01 }} className={`${item.span} group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(140deg,#313131,#1f1f1f)] p-6`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-50" />
                <motion.div initial={{ y: 10, opacity: 0.85 }} whileHover={{ y: 0, opacity: 1 }} className="relative flex h-full flex-col justify-end">
                  <p className="text-xs uppercase tracking-[0.17em] text-[#faf9f7]/70">{item.type} · {item.year}</p>
                  <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#faf9f7]/70">{item.location}</p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="overflow-x-clip py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionReveal} className="font-serif text-4xl sm:text-5xl">Process</motion.h2>
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {steps.map((step, index) => (
                <motion.article key={step.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-[#212121] p-8">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#c75b39]">0{index + 1}</p>
                  <h3 className="mt-5 font-serif text-3xl">{step.title}</h3>
                  <p className="mt-4 text-[#faf9f7]/70">{step.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionReveal} className="font-serif text-4xl sm:text-5xl">Team</motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.article key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#232323]">
                <div className="aspect-[3/4] bg-[linear-gradient(160deg,#3a3a3a,#232323)] p-6">
                  <p className="font-serif text-2xl text-[#faf9f7]/70">Portrait</p>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{member.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[#c75b39]">{member.role}</p>
                  <motion.p initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} className="mt-4 text-[#faf9f7]/70">{member.bio}</motion.p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-y border-white/10 bg-[#171717] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-12">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-4xl sm:text-5xl">Start Your Project</h2>
              <p className="mt-6 text-[#faf9f7]/75">Collingwood, Melbourne — Available for custom residential projects across Victoria.</p>
              <div className="mt-10 aspect-[16/10] rounded-2xl border border-white/15 bg-[linear-gradient(145deg,#2c2c2c,#1f1f1f)] p-6 text-[#faf9f7]/65">
                Map Placeholder · Collingwood VIC
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4 rounded-2xl border border-white/10 bg-[#1d1d1d] p-8">
              {['Name', 'Email', 'Project Type'].map((label) => (
                <motion.label whileFocus={{ scale: 1.01 }} key={label} className="block text-sm uppercase tracking-[0.14em] text-[#faf9f7]/70">
                  {label}
                  <input className="mt-2 w-full border-b border-white/25 bg-transparent py-3 text-base text-[#faf9f7] outline-none placeholder:text-[#faf9f7]/35 focus:border-[#c75b39]" placeholder={label} />
                </motion.label>
              ))}
              <label className="block text-sm uppercase tracking-[0.14em] text-[#faf9f7]/70">
                Vision
                <textarea rows={4} className="mt-2 w-full border border-white/20 bg-transparent p-3 text-base text-[#faf9f7] outline-none placeholder:text-[#faf9f7]/35 focus:border-[#c75b39]" placeholder="Tell us about your site, timeline, and ambitions." />
              </label>
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 rounded-full border border-[#c75b39] px-6 py-3 text-sm uppercase tracking-[0.17em] text-[#c75b39]">
                Send Enquiry <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-end">
          <div>
            <p className="font-serif text-2xl">STUDIO FORM</p>
            <p className="mt-2 text-sm text-[#faf9f7]/65">Architecture for light, longevity, and calm living.</p>
          </div>
          <div className="flex items-center gap-4 md:justify-center">
            {[Instagram, Linkedin].map((Icon, i) => (
              <motion.a key={i} whileHover={{ y: -2, color: '#c75b39' }} href="#" className="text-[#faf9f7]/70">
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
          <motion.form whileHover={{ y: -2 }} className="flex items-center gap-2 border-b border-white/25 pb-2">
            <input className="w-full bg-transparent text-sm text-[#faf9f7] outline-none placeholder:text-[#faf9f7]/40" placeholder="Newsletter email" />
            <button className="text-[#c75b39]">
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.14em] text-[#faf9f7]/40">© {year} Studio Form · Melbourne</p>
      </footer>
    </div>
  )
}

export default App
