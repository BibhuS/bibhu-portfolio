import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Big Data & Processing",
    items: [
      "Apache Spark",
      "PySpark",
      "Spark Streaming",
      "Databricks",
      "Delta Lake",
      "Hive",
      "Sqoop",
      "Kafka",
      "Apache NiFi",
      "Streamsets",
    ],
  },
  {
    group: "Cloud",
    items: [
      "AWS Glue",
      "AWS Athena",
      "AWS S3",
      "AWS Lambda",
      "Step Functions",
      "DynamoDB",
      "Redshift",
      "CloudFormation",
      "Terraform",
      "Azure ADLS",
    ],
  },
  {
    group: "Languages",
    items: ["Scala", "Python", "Java", "SQL", "Shell"],
  },
  {
    group: "Orchestration & DevOps",
    items: [
      "Airflow",
      "Autosys",
      "Control-M",
      "Tivoli",
      "Oozie",
      "Jenkins",
      "Azure DevOps",
      "Git",
    ],
  },
  {
    group: "Data Stores",
    items: [
      "Snowflake",
      "PostgreSQL",
      "HBase",
      "Cassandra",
      "MongoDB",
      "Elastic Search",
      "MySQL",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer III — Data Engineering",
    org: "JP Morgan Chase",
    period: "Sep 2024 — Present",
    location: "United Kingdom",
    bullets: [
      "Modernized legacy ETL workflows onto Databricks with the Medallion (Bronze/Silver/Gold) architecture on AWS.",
      "Designed hybrid pipelines with Databricks + Apache NiFi, masking PI attributes for restricted-country data.",
      "Built Python reconciliation tooling validating record counts and primary-key consistency across source and bronze layers.",
    ],
  },
  {
    role: "Consultant — Data Engineering",
    org: "Capgemini UK (Client: Barclays)",
    period: "Sep 2022 — Aug 2024",
    location: "United Kingdom",
    bullets: [
      "Built an Investment Banking datamart on AWS with Glue-PySpark, Step Functions, DynamoDB metadata and CloudFormation IaC.",
      "Landed curated data into Redshift powering dashboards, views and downstream consumer APIs.",
      "Automated S3-event driven ingestion via Lambda + EventBridge for unzipping, task status and scheduled orchestration.",
    ],
  },
  {
    role: "Specialist — Data Engineering",
    org: "LTI Mindtree (Client: Travelers Insurance)",
    period: "Nov 2020 — Aug 2022",
    location: "India",
    bullets: [
      "Built SIP-based data pipelines landing raw data in S3, parsed via PySpark on Databricks into Glue/Athena tables.",
      "Triggered PySpark jobs via Terraform-orchestrated Jenkins CI/CD pipelines.",
      "Owned P1 production support for critical client SIP jobs.",
    ],
  },
  {
    role: "Technical Lead — Big Data",
    org: "Wipro (Clients: MITIE Mozaic, Capital One)",
    period: "Jul 2018 — Nov 2020",
    location: "India",
    bullets: [
      "Built IoT → Kafka streaming pipelines with Streamsets and Python REST APIs feeding user dashboards.",
      "Developed reprocessing scripts to recover missed Kafka data windows.",
      "For Capital One: authored quantum sub-workflow JSON, Snowflake unit tests and Spark performance tuning.",
    ],
  },
  {
    role: "Associate — Big Data",
    org: "Cognizant (Clients: Sabre, ING Vysya)",
    period: "Apr 2016 — Jun 2018",
    location: "India",
    bullets: [
      "Built a Spark Streaming + Kafka Direct API consumer and a custom Flume EBCDIC→ASCII interceptor.",
      "Automated Spark batch/streaming with Oozie Coordinators, Bundles and Workflows.",
      "Designed HDFS ingestion, Hive schemas and standardization frameworks for enterprise reference data.",
    ],
  },
  {
    role: "Software Dev Analyst",
    org: "Dell International Services (Client: Sabre)",
    period: "Jan 2013 — Apr 2016",
    location: "India",
    bullets: [
      "Ingested SQL Server transactional data into HDFS via Sqoop and annotated with Apache UIMA + Java text analytics.",
      "Stored annotated data in HBase (JSON) powering pattern mining, rule engine and predictive scoring.",
      "Two-time Dell 'On the Spot' award recipient.",
    ],
  },
];

const PROJECTS = [
  {
    title: "OSKAR — Client Onboarding Analytics",
    client: "JP Morgan Chase",
    tag: "Databricks · Medallion · AWS",
    body: "Reengineered legacy ETL onto Databricks with Bronze/Silver/Gold Delta layers, hybrid pipelines for restricted geographies, and Python-based reconciliation across source and lakehouse.",
  },
  {
    title: "Investment Banking Datamart",
    client: "Barclays",
    tag: "AWS Glue · Step Functions · Redshift",
    body: "PySpark pipelines on Glue orchestrated by Step Functions with DynamoDB metadata. CloudFormation-driven infra, Lambda + EventBridge automation, curated Redshift marts feeding dashboards.",
  },
  {
    title: "Insurance Lakehouse on Databricks",
    client: "Travelers Insurance",
    tag: "PySpark · Databricks · Athena",
    body: "SIP ingestion landing to S3, parsed via PySpark on Databricks into Glue tables queried through Athena. CI/CD via Jenkins with Terraform orchestration.",
  },
  {
    title: "IoT Streaming Platform",
    client: "MITIE Mozaic",
    tag: "Streamsets · Kafka · Python API",
    body: "End-to-end IoT streaming from sensors through Streamsets into Kafka, with Python REST APIs powering user dashboards and re-processing tooling for missed data.",
  },
  {
    title: "Real-time Airline Data Pipeline",
    client: "Sabre",
    tag: "Spark Streaming · Scala · Oozie",
    body: "Spark Streaming consumer on Kafka Direct API, custom Flume EBCDIC→ASCII interceptor, and Oozie Coordinators/Bundles automating batch and streaming across the Hadoop cluster.",
  },
  {
    title: "Transactional Text Analytics",
    client: "Sabre @ Dell",
    tag: "Sqoop · UIMA · HBase",
    body: "Sqoop ingestion from SQL Server to HDFS, Apache UIMA + Java annotation, HBase JSON store feeding pattern mining, rule engine, predictive scoring and offer rotation.",
  },
];

function Portfolio() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute top-[40%] -right-40 h-[420px] w-[600px] rounded-full bg-accent/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
              &lt;/&gt;
            </span>
            <span className="hidden sm:inline text-foreground/90">bibhu.dev</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/20"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-24 md:pt-32 md:pb-32">
          <div className="flex items-center gap-2 text-xs font-mono text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            AVAILABLE · 1 MONTH NOTICE
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Bibhu Bhushan
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Sinha.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Senior Data Engineer with{" "}
            <span className="text-foreground">13+ years</span> building Spark,
            Databricks and cloud lakehouse platforms across banking, insurance
            and IoT.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> United Kingdom
            </span>
            <a
              href="mailto:bibhuhadoop2016@gmail.com"
              className="inline-flex items-center gap-1.5 transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> bibhuhadoop2016@gmail.com
            </a>
            <a
              href="tel:+447867211118"
              className="inline-flex items-center gap-1.5 transition hover:text-foreground"
            >
              <Phone className="h-4 w-4" /> +44 7867 211118
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-primary/40"
            >
              View work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-card"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:grid-cols-4">
            {[
              ["13+", "Years in data"],
              ["9+", "Years in cloud"],
              ["6", "Enterprise clients"],
              ["4", "Industry domains"],
            ].map(([n, label]) => (
              <div key={label}>
                <div className="text-3xl font-semibold text-foreground">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <Section id="about" label="01" title="About">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2 text-muted-foreground leading-relaxed">
              <p>
                I design and ship large-scale data platforms — the kind that
                move billions of records a day, survive audits, and stay boring
                to operate. Most of my career has been in{" "}
                <span className="text-foreground">Spark, PySpark and Scala</span>{" "}
                on Cloudera, AWS and Azure Databricks.
              </p>
              <p>
                Right now I'm at JP Morgan Chase modernizing legacy ETL onto
                Databricks with a Medallion lakehouse on AWS. Before that I
                spent two years at Capgemini building an investment-banking
                datamart for Barclays with AWS Glue, Step Functions and
                Redshift.
              </p>
              <p>
                I care about the un-glamorous parts: idempotent pipelines,
                metadata-driven orchestration, honest reconciliation, and
                pipelines that a tired on-call engineer can actually read at
                3am.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Domains
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Banking & Capital Markets",
                  "Insurance",
                  "IoT & Streaming",
                  "Aerospace / GIS",
                ].map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                Methodology
              </div>
              <p className="mt-2 text-sm">Agile · Scrum · Waterfall</p>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" label="02" title="Skills & Toolkit">
          <div className="grid gap-4 md:grid-cols-2">
            {SKILLS.map((s) => (
              <div
                key={s.group}
                className="group rounded-xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/30 hover:bg-card/70"
              >
                <div className="text-xs uppercase tracking-widest text-primary">
                  {s.group}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-xs text-foreground/90"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" label="03" title="Experience">
          <ol className="relative border-l border-border/60 pl-6 md:pl-8">
            {EXPERIENCE.map((e, i) => (
              <li key={e.role + i} className="pb-12 last:pb-0">
                <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full border border-primary bg-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {e.role}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <div className="mt-1 text-sm text-primary">{e.org}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {e.location}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" label="04" title="Selected Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/70"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {p.client}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <div className="mt-5 inline-flex rounded-md border border-border/60 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                  {p.tag}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="05" title="Get in touch">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/60 to-card/20 p-8 md:p-12">
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Building something data-heavy?
            </h3>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Happy to chat about Spark, Databricks, lakehouses, streaming, or
              your next data platform. Currently on 1 month notice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:bibhuhadoop2016@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> Say hello
              </a>
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40"
              >
                <Download className="h-4 w-4" /> Resume (PDF)
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 border-t border-border/60 pt-6 text-sm text-muted-foreground">
              <a
                href="mailto:bibhuhadoop2016@gmail.com"
                className="inline-flex items-center gap-2 transition hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> bibhuhadoop2016@gmail.com
              </a>
              <a
                href="tel:+447867211118"
                className="inline-flex items-center gap-2 transition hover:text-foreground"
              >
                <Phone className="h-4 w-4" /> +44 7867 211118
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </Section>

        <footer className="border-t border-border/60 py-8 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Bibhu Bhushan Sinha</span>
            <span className="font-mono">Built with TanStack Start</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            {label} — Section
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="hidden h-px flex-1 bg-border/60 md:block" />
      </div>
      {children}
    </section>
  );
}
