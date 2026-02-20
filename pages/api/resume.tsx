import type { NextApiRequest, NextApiResponse } from "next";
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";

import bio from "../../data/bio.json";
import experiences from "../../data/experience.json";
import talks from "../../data/talks.json";
import { Experience } from "../../types";

// --- Classify experiences ---

const educationNames = new Set(["Rice University", "Bronx Science"]);
const pdfExcludedNames = new Set(["Rice Blockchain"]);

const workExperiences = (
  experiences.filter(
    (e) => !educationNames.has(e.name) && !pdfExcludedNames.has(e.name)
  ) as Experience[]
).map((e) =>
  e.name === "Spearbit" ? { ...e, location: "Remote, Part-Time" } : e
);

// Fold Rice Blockchain into Rice University for the PDF
const riceBlockchain = experiences.find(
  (e) => e.name === "Rice Blockchain"
) as Experience;
const riceUniversity = experiences.find(
  (e) => e.name === "Rice University"
) as Experience;

const riceDescriptions = [
  ...riceUniversity.roles.map((r) => r.description).filter(Boolean),
  riceBlockchain.roles[0].description,
].join(" ");

const mergedRiceUniversity: Experience = {
  ...riceUniversity,
  roles: [
    {
      title: "Student, Faculty Instructor, Founder of Rice Blockchain",
      description: riceDescriptions,
      start: riceUniversity.roles[riceUniversity.roles.length - 1].start,
      end: riceUniversity.roles[0].end,
    },
  ],
};

const educationExperiences = (
  experiences.filter(
    (e) => educationNames.has(e.name) && e.name !== "Rice University"
  ) as Experience[]
).concat([mergedRiceUniversity])
  // Put Rice University first
  .reverse();

// --- Contact links ---

const contactLinks = [
  { label: "yorke.dev", url: "https://yorke.dev" },
  { label: "contact@yorke.dev", url: "https://yorke.dev/link/email" },
  { label: "github", url: "https://yorke.dev/link/github" },
  { label: "linkedin", url: "https://yorke.dev/link/linkedin" },
  { label: "twitter", url: "https://yorke.dev/link/twitter" },
];

// --- Skills ---

const skills =
  "Solidity, Rust, TypeScript, Go, EVM, Solana, Cosmos SDK, Hyperledger, Smart Contract Security, Protocol Design";

// --- Selected Talks ---

const selectedTalks = [
  talks.find((t) => t.title.includes("ETHCC"))!,
  talks.find((t) => t.title.includes("ETH Denver"))!,
  talks.find((t) => t.title.includes("Hack VC"))!,
];

// --- Styles ---

const colors = {
  primary: "#111111",
  secondary: "#444444",
  muted: "#666666",
  accent: "#1a56db",
  rule: "#cccccc",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: colors.primary,
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 36,
  },

  // Header
  headerName: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  headerTagline: {
    fontSize: 9,
    color: colors.secondary,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 4,
  },
  contactLink: {
    fontSize: 8.5,
    color: colors.accent,
    textDecoration: "none",
  },
  contactSeparator: {
    fontSize: 8.5,
    color: colors.muted,
  },
  skillsRow: {
    marginTop: 3,
    marginBottom: 1,
  },
  skillsLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
  },
  skillsText: {
    fontSize: 9,
    color: colors.secondary,
  },

  // Talk
  talkContainer: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  talkTitle: {
    fontSize: 9,
    color: colors.accent,
    textDecoration: "none",
  },
  talkDate: {
    fontSize: 8.5,
    color: colors.muted,
  },

  // Section
  sectionContainer: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 3,
    paddingBottom: 2,
    borderBottomWidth: 0.75,
    borderBottomColor: colors.rule,
  },

  // Experience entry
  entryContainer: {
    marginTop: 5,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  entryCompany: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    textDecoration: "none",
  },
  entryLocation: {
    fontSize: 9,
    color: colors.muted,
  },

  // Role
  roleContainer: {
    marginTop: 1,
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  roleTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Oblique",
    color: colors.secondary,
  },
  roleDates: {
    fontSize: 8.5,
    color: colors.muted,
  },
  roleDescription: {
    fontSize: 9,
    color: colors.secondary,
    marginTop: 2,
    lineHeight: 1.3,
  },
});

// --- Components ---

const ContactRow = () => (
  <View style={styles.contactRow}>
    {contactLinks.map((item, i) => (
      <View key={item.url} style={{ flexDirection: "row", gap: 6 }}>
        {i > 0 && <Text style={styles.contactSeparator}>|</Text>}
        <Link src={item.url} style={styles.contactLink}>
          {item.label}
        </Link>
      </View>
    ))}
  </View>
);

const SkillsRow = () => (
  <View style={styles.skillsRow}>
    <Text>
      <Text style={styles.skillsLabel}>Skills: </Text>
      <Text style={styles.skillsText}>{skills}</Text>
    </Text>
  </View>
);

const TalkEntry = ({
  talk,
}: {
  talk: { title: string; link: string; published: string };
}) => (
  <View style={styles.talkContainer}>
    <Link src={talk.link} style={styles.talkTitle}>
      {talk.title}
    </Link>
    <Text style={styles.talkDate}>{talk.published}</Text>
  </View>
);

const RoleEntry = ({
  role,
}: {
  role: { title: string; description?: string; start: string; end: string };
}) => (
  <View style={styles.roleContainer}>
    <View style={styles.roleHeader}>
      <Text style={styles.roleTitle}>{role.title.trim()}</Text>
      <Text style={styles.roleDates}>
        {role.start} — {role.end}
      </Text>
    </View>
    {role.description && (
      <Text style={styles.roleDescription}>{role.description}</Text>
    )}
  </View>
);

const CollapsedEntry = ({ experience }: { experience: Experience }) => {
  const { roles } = experience;
  const descriptions = roles
    .map((r) => r.description)
    .filter(Boolean) as string[];
  const earliest = roles[roles.length - 1].start;
  const latest = roles[0].end;

  return (
    <View style={styles.entryContainer} wrap={false}>
      <View style={styles.entryHeader}>
        <Link src={experience.link} style={styles.entryCompany}>
          {experience.name}
        </Link>
        <Text style={styles.entryLocation}>{experience.location}</Text>
      </View>
      <View style={styles.roleContainer}>
        <View style={styles.roleHeader}>
          <Text style={styles.roleTitle}>{roles[0].title.trim()}</Text>
          <Text style={styles.roleDates}>
            {earliest} — {latest}
          </Text>
        </View>
        {descriptions.length > 0 && (
          <Text style={styles.roleDescription}>
            {descriptions.join(" ")}
          </Text>
        )}
      </View>
    </View>
  );
};

const ExperienceEntry = ({ experience }: { experience: Experience }) => {
  if (experience.roles.length > 1) {
    return <CollapsedEntry experience={experience} />;
  }

  return (
    <View style={styles.entryContainer} wrap={false}>
      <View style={styles.entryHeader}>
        <Link src={experience.link} style={styles.entryCompany}>
          {experience.name}
        </Link>
        <Text style={styles.entryLocation}>{experience.location}</Text>
      </View>
      {experience.roles.map((role, i) => (
        <RoleEntry key={`${role.title}-${i}`} role={role} />
      ))}
    </View>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const ResumeDocument = () => (
  <Document
    title={`${bio.name} — Resume`}
    author={bio.name}
    subject="Resume"
  >
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <Text style={styles.headerName}>{bio.name}</Text>
      <Text style={styles.headerTagline}>{bio.tagline}</Text>
      <ContactRow />
      <SkillsRow />

      {/* Experience */}
      <Section title="Experience">
        {workExperiences.map((exp) => (
          <ExperienceEntry key={exp.name} experience={exp} />
        ))}
      </Section>

      {/* Education */}
      <Section title="Education">
        {educationExperiences.map((exp) => (
          <ExperienceEntry key={exp.name} experience={exp} />
        ))}
      </Section>

      {/* Selected Talks */}
      <Section title="Selected Talks">
        {selectedTalks.map((talk) => (
          <TalkEntry key={talk.title} talk={talk} />
        ))}
      </Section>
    </Page>
  </Document>
);

// --- API Route ---

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const pdfStream = await ReactPDF.renderToStream(<ResumeDocument />);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    'inline; filename="yorke-rhodes-resume.pdf"'
  );

  pdfStream.pipe(res);
}
