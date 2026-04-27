const trades = [
  { name: 'Arkitekt og rådgiver', icon: '📐', status: 'Afventer oplæg', tone: 'wait', note: 'Næste beslutning: fastholde retning og få lukket planløsning.' },
  { name: 'Murer', icon: '🧱', status: 'Ikke startet', tone: 'idle', note: 'Afventer endelig projektbeskrivelse og rækkefølge.' },
  { name: 'Tømrer', icon: '🪵', status: 'Klar til dialog', tone: 'ready', note: 'Kan kobles på når åbninger, facade og indvendige vægge er besluttet.' },
  { name: 'VVS', icon: '🚿', status: 'Afklaring', tone: 'wait', note: 'Bad, rørføring og eventuel kælder skal koordineres tidligt.' },
  { name: 'Elektriker', icon: '⚡', status: 'Senere ryk', tone: 'idle', note: 'Placering af køkken, ø og vægge skal låses før el-plan.' },
]

const milestones = [
  'Materialeprøver og asbestafklaring',
  'Lås planløsning og facadegreb',
  'Vælg rådgiver / arkitekt til næste fase',
  'Indhent sammenlignelige tilbud',
  'Planlæg udførelse i etaper',
]

const log = [
  { date: 'Nu', text: 'Projektplatform etableret som fælles overblik for familien, rådgivere og håndværkere.' },
  { date: 'Næste', text: 'Tilføj rigtige datoer, kontaktpersoner og beslutninger efterhånden som projektet falder på plads.' },
]

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <nav className="nav">
          <div className="brand">Ombygning</div>
          <div className="links"><span>Overblik</span><span>Plan</span><span>Fremdrift</span><span>Dokumenter</span></div>
        </nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">Projektportal</p>
            <h1>Et roligt overblik over et komplekst byggeprojekt.</h1>
            <p className="lead">Samlet status, næste ryk, faggrupper og fremdrift – bygget til at kunne bruges på mobilen af både jer og håndværkere.</p>
            <div className="actions"><button>✅ Jeg er færdig</button><button>🚀 Klar til næste ryk</button><button>❓ Jeg mangler svar</button></div>
          </div>
          <aside className="statusCard">
            <p className="label">Aktuel status</p>
            <div className="statusPill">Planlægning</div>
            <h2>Næste ryk afklares</h2>
            <p>Fokus er at lukke rådgiver, planløsning og risici, før håndværkerne sættes i gang.</p>
          </aside>
        </div>
      </section>

      <section className="section gridTwo">
        <div className="panel">
          <p className="label">Næste milepæle</p>
          <h2>Projektplan</h2>
          <ol className="timeline">{milestones.map((m, i) => <li key={m}><span>{i + 1}</span>{m}</li>)}</ol>
        </div>
        <div className="panel dark">
          <p className="label">Næste beslutning</p>
          <h2>Hvad blokerer?</h2>
          <p>Projektet skal væk fra stilstand og over i en klar rækkefølge: afklar risiko, lås retning, vælg rådgiver og giv faggrupper konkrete næste opgaver.</p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader"><p className="label">Faggrupper</p><h2>Hvem er klar til hvad?</h2></div>
        <div className="cards">{trades.map((t) => <article className="trade" key={t.name}><div className="icon">{t.icon}</div><div><h3>{t.name}</h3><span className={`badge ${t.tone}`}>{t.status}</span><p>{t.note}</p></div></article>)}</div>
      </section>

      <section className="section gridTwo">
        <div className="panel">
          <p className="label">Fremdriftslog</p>
          <h2>Seneste noter</h2>
          {log.map(item => <div className="log" key={item.date}><strong>{item.date}</strong><p>{item.text}</p></div>)}
        </div>
        <div className="panel">
          <p className="label">Dokumenter</p>
          <h2>Kommer her</h2>
          <p>Tilbud, tegninger, materialeprøver, billeder og beslutningsreferater kan samles her i næste version.</p>
        </div>
      </section>
    </main>
  )
}
