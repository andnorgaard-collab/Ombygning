const projectHealth = [
  { label: 'Beslutninger låst', value: '3 / 8', tone: 'warn' },
  { label: 'Åbne afklaringer', value: '5', tone: 'danger' },
  { label: 'Faggrupper i gang', value: '1 / 6', tone: 'ok' },
]

const weeklyPlan = [
  {
    week: 'Uge 18',
    focus: 'Risiko og forberedelse',
    tasks: [
      'Book asbesttest og gennemgang af gamle materialer',
      'Indhent plantegning fra kommunen / tidligere ejer',
      'Saml billeder af alle rum i en delt mappe',
    ],
  },
  {
    week: 'Uge 19',
    focus: 'Lås retning',
    tasks: [
      'Vælg foretrukken planløsning (A/B)',
      'Fastlæg facadegreb og vinduesåbninger',
      'Aftal beslutningsmøde med rådgiver',
    ],
  },
  {
    week: 'Uge 20',
    focus: 'Klar til tilbud',
    tasks: [
      'Skriv kort projektbeskrivelse i punktform',
      'Indhent tilbud fra murer, tømrer og VVS på samme oplæg',
      'Læg foreløbig etapeplan med start/slut',
    ],
  },
]

const blockers = [
  {
    title: 'Planløsning ikke endeligt besluttet',
    impact: 'Forsinker alle fag (el, VVS, tømrer)',
    owner: 'Familien + rådgiver',
    next: 'Beslutning senest fredag kl. 16:00',
  },
  {
    title: 'Manglende afklaring af skjulte risici',
    impact: 'Budgetusikkerhed og risiko for stop i udførelse',
    owner: 'Rådgiver',
    next: 'Bestil destruktiv prøve og rapport',
  },
  {
    title: 'Ingen samlet tilbudspakke',
    impact: 'Tilbud kan ikke sammenlignes direkte',
    owner: 'Projektansvarlig',
    next: 'Del én ensartet beskrivelse med alle håndværkere',
  },
]

const trades = [
  {
    name: 'Arkitekt / rådgiver',
    status: 'Prioritet nu',
    tone: 'warn',
    action: 'Lås plan og prioriteringer',
  },
  {
    name: 'Murer',
    status: 'Klar når oplæg er låst',
    tone: 'idle',
    action: 'Vurdér bærende vægge, sokkel og facade',
  },
  {
    name: 'Tømrer',
    status: 'Klar til tidlig dialog',
    tone: 'ok',
    action: 'Skitsér åbninger, køkkenzone og indvendige vægge',
  },
  {
    name: 'VVS',
    status: 'Afventer bad/køkkenvalg',
    tone: 'warn',
    action: 'Lav grov rørstrategi inkl. faldstammer',
  },
  {
    name: 'Elektriker',
    status: 'Afventer planløsning',
    tone: 'idle',
    action: 'Forbered el-zoner for køkken, lys og data',
  },
]

const updates = [
  {
    date: '27. april 2026',
    text: 'Projektportalen er opdateret med konkret ugeplan, blokkere og næste handlinger.',
  },
  {
    date: 'Næste skridt',
    text: 'Erstat eksempeldata med rigtige ansvarlige, budgettal og datoer fra jeres møder.',
  },
]

function StatusPill({ tone, children }) {
  return <span className={`pill ${tone}`}>{children}</span>
}

export default function Home() {
  return (
    <main className="page">
      <section className="hero card">
        <p className="eyebrow">Ombygning · fælles cockpit</p>
        <h1>Nu har I ét sted, der viser hvad der blokerer og hvad der skal ske først.</h1>
        <p className="lead">
          Siden er gjort klar som et arbejdsværktøj: tydelig status, konkret ugeplan og klare ejere på næste handlinger.
        </p>

        <div className="healthGrid">
          {projectHealth.map((item) => (
            <article key={item.label} className="statBox">
              <p>{item.label}</p>
              <strong>{item.value}</strong>
              <StatusPill tone={item.tone}>{item.tone === 'ok' ? 'Sund' : item.tone === 'warn' ? 'Kræver fokus' : 'Kritisk'}</StatusPill>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionGrid">
        <section className="card">
          <p className="label">Køreplan</p>
          <h2>Plan for de næste 3 uger</h2>
          <div className="stack">
            {weeklyPlan.map((block) => (
              <article key={block.week} className="timelineItem">
                <header>
                  <strong>{block.week}</strong>
                  <span>{block.focus}</span>
                </header>
                <ul>
                  {block.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <p className="label">Flaskehalse</p>
          <h2>Det der stopper fremdriften</h2>
          <div className="stack">
            {blockers.map((item) => (
              <article key={item.title} className="blocker">
                <h3>{item.title}</h3>
                <p><strong>Konsekvens:</strong> {item.impact}</p>
                <p><strong>Ejer:</strong> {item.owner}</p>
                <p><strong>Næste handling:</strong> {item.next}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="card">
        <p className="label">Faggrupper</p>
        <h2>Hvem kan aktiveres hvornår?</h2>
        <div className="trades">
          {trades.map((trade) => (
            <article className="trade" key={trade.name}>
              <h3>{trade.name}</h3>
              <StatusPill tone={trade.tone}>{trade.status}</StatusPill>
              <p>{trade.action}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionGrid">
        <section className="card">
          <p className="label">Seneste opdatering</p>
          <h2>Log</h2>
          {updates.map((entry) => (
            <div key={entry.date} className="logItem">
              <strong>{entry.date}</strong>
              <p>{entry.text}</p>
            </div>
          ))}
        </section>

        <section className="card">
          <p className="label">Praktisk næste step</p>
          <h2>For at gå fra plan til udførelse</h2>
          <ol className="checklist">
            <li>Indsæt jeres rigtige deadline for hver opgave i ugeplanen.</li>
            <li>Tilføj kontaktperson og telefon på hver faggruppe.</li>
            <li>Flyt afsluttede punkter til loggen og marker nye blokkere.</li>
          </ol>
        </section>
      </section>
    </main>
  )
}
