import type {
  Subject,
  CoverField,
  LibraryBranch,
  EventItem,
  Mentor,
  LedgerStat,
  NavItem,
} from "./types";

export const navItems: NavItem[] = [
  { path: "/about", label: "About" },
  { path: "/subjects", label: "Subjects" },
  { path: "/library", label: "Library" },
  { path: "/events", label: "Events" },
  { path: "/mentors", label: "Mentors" },
  { path: "/contact", label: "Contact Us" },
];

export const discordInviteId = "Eke2BFAAT";
export const discordInviteCode = "https://discord.com/invite/Eke2BFAAT";
export const web3FormsAccessKey = "33a4c03c-6a8a-48be-a22d-f5cd1f6a5e03";

// ---------------------------------------------------------------------------
// Subjects
// ---------------------------------------------------------------------------

export const subjects: Subject[] = [
  {
    id: "biology",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Biology",
    description:
      "AP Biology explores evolution, cellular processes, genetics, energetics, ecology, and biological systems through conceptual and data-based analysis. AMN provides the College Board CED, released FRQs, study materials, and useful external resources recommended by students to support both course learning and AP Exam preparation.",
    channel: "#ap-biology",
  },
  {
    id: "chemistry",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Chemistry",
    description:
      "AP Chemistry explores atomic structure, molecular interactions, chemical reactions, kinetics, thermodynamics, equilibrium, acids and bases, and electrochemistry. AMN provides the College Board CED, released FRQs, study materials, and useful external resources recommended by students to strengthen quantitative and conceptual understanding.",
    channel: "#ap-chemistry",
  },
  {
    id: "physics",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Physics 1",
    description:
      "AP Physics 1 explores algebra-based mechanics, including kinematics, forces, energy, momentum, rotational motion, and oscillations. AMN provides the College Board CED, released FRQs, review materials, and useful external resources recommended by students to support conceptual understanding and AP Exam preparation.",
    channel: "#ap-physics",
  },
  {
    id: "physics2",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Physics 2",
    description:
      "AP Physics 2 explores algebra-based physics topics including thermodynamics, electric fields and circuits, magnetism, optics, waves, and modern physics. AMN provides the College Board CED, released FRQs, review materials, and useful external resources recommended by students to strengthen problem-solving skills and prepare for the AP Exam.",
    channel: "#ap-physics-2",
  },
  {
    id: "calculus",
    dept: "math",
    tag: "[MATH]",
    name: "AP Calculus AB",
    description:
      "AP Calculus AB introduces differential and integral calculus through limits, derivatives, applications of differentiation, integration, and differential equations, while AP Calculus BC covers the same curriculum and extends into additional integration techniques, parametric and polar functions, sequences, and infinite series. AMN provides the College Board CED, released FRQs, review materials, and useful external resources recommended by students to develop calculus skills and prepare for the AP Exam, with BC-only topics marked separately so AB students can skip them.",
    channel: "#ap-calculus",
  },
  {
    id: "macroeconomics",
    dept: "hum",
    tag: "[HUM]",
    name: "AP Macroeconomics",
    description:
      "AP Macroeconomics examines economy-wide concepts including economic indicators, national income, inflation, unemployment, fiscal and monetary policy, economic growth, and international economics. AMN provides the College Board CED, released FRQs, review materials, and useful external resources recommended by students to reinforce economic concepts and exam skills.",
    channel: "#ap-macroeconomics",
  },
  {
    id: "literature",
    dept: "hum",
    tag: "[HUM]",
    name: "AP English Literature",
    description:
      "Annotated model essays for all three free-response types, plus a running list of texts past cohorts have written about.",
    channel: "#ap-lit",
  },
  {
    id: "worldhistory",
    dept: "hum",
    tag: "[HUM]",
    name: "AP World History: Modern",
    description:
      "AP World History: Modern examines major global developments, interactions, and transformations from approximately 1200 CE to the present. AMN provides the College Board CED, released FRQs, review materials, and useful external resources recommended by students to develop historical reasoning, document analysis, and AP Exam writing skills.",
    channel: "#ap-worldhistory",
  },
];

export const mentors: Mentor[] = [
  {
    name: "Henry Y.",
    subjects: "AP Biology, AP World History",
    background: "Scored 5s on AP World, AP Bio, AP Physics I",
    status: "Founder",
  },
  {
    name: "Raymon Z.",
    subjects: "AP Lit, AP Physics I",
    background: "Scored 5s on AP Lit, AP Physics I, AP Chem, AP Calc AB",
    status: "Mentor",
  },
  {
    name: "Jayden L.",
    subjects: "AP Macro, AP Stats",
    background: "Scored 5s on AP Macro, AP Physics I, AP Stats",
    status: "Mentor",
  },
  {
    name: "Howie X.",
    subjects: "AP Calc AB/BC",
    background: "Scored 5 on AP Calc AB, 4s on AP Chem and Physics I",
    status: "Mentor",
  },
  {
    name: "Ethan Y.",
    subjects: "AP Chem",
    background: "Scored 5s on AP Chem and AP Bio",
    status: "Mentor",
  },
];

export const coverFields: CoverField[] = [
  { label: "Members", value: "50" },
  { label: "Mentors", value: String(mentors.length) },
  { label: "Subjects", value: String(subjects.length) },
];

// ---------------------------------------------------------------------------
// About Us page content
// ---------------------------------------------------------------------------

export const aboutUs = {
  intro: [
    "Welcome to the AP Mentorship Network (AMN), a student-led peer mentorship community created to support high school students who are taking, self-studying, or considering Advanced Placement courses.",
    "AP courses provide students with an opportunity to challenge themselves academically and explore subjects at a deeper level. However, preparing for an AP course or exam can also be difficult. Students may struggle to find reliable study materials, understand challenging concepts, determine what to prioritize for the AP Exam, or simply find someone who has gone through the same experience before.",
    "The AP Mentorship Network was created to help bridge this gap. We connect students with experienced peers who can share their knowledge, resources, strategies, and experiences with AP courses. By combining peer mentorship with organized academic resources and collaborative learning opportunities, AMN aims to make AP preparation more accessible and manageable for students in our community.",
    "Rather than replacing classroom instruction, our goal is to complement the support students already receive at school. Whether you need help understanding a difficult concept, want advice from someone who has previously taken the exam, are looking for reliable practice resources, or are exploring an AP course for the first time, AMN provides a community where students can learn from and support one another.",
  ],
  subjectsWeSupportIntro:
    "AMN currently provides support for:",
  subjectsWeSupport: [
    "AP Biology",
    "AP Physics 1",
    "AP Chemistry",
    "AP Macroeconomics",
    "AP Calculus",
    "AP World History: Modern",
    "AP English Literature and Composition",
  ],
  subjectsWeSupportOutro:
    "As our community grows, we hope to expand into additional AP subjects based on student interest and the availability of qualified peer mentors.",
  whatWeOffer: [
    {
      title: "Subject Q&A",
      description:
        "Students can ask questions about specific concepts, problems, assignments, and AP course content and receive help from mentors and other students.",
    },
    {
      title: "Peer Mentorship",
      description:
        "Students who have experience with AP courses can share the approaches, mistakes, study methods, and exam strategies that helped them succeed.",
    },
    {
      title: "Study Resources",
      description:
        "AMN organizes useful study materials and directs students toward reliable resources for reviewing course content and preparing for AP Exams.",
    },
    {
      title: "AP Exam Strategy",
      description:
        "Beyond understanding the curriculum, students can learn how to approach AP-style multiple-choice and free-response questions, manage their time, and prepare effectively for exam day.",
    },
    {
      title: "Workshops and Review Sessions",
      description:
        "AMN hosts student-led workshops covering important AP topics, foundational concepts, exam strategies, and review activities. These sessions provide opportunities to learn collaboratively and ask questions in real time.",
    },
  ],
  mission: [
    "Our mission is to create a free, accessible, and collaborative AP learning community where students can benefit from the experiences of those who came before them and, in turn, help future students.",
    "AMN is built around a simple idea: students should not have to navigate challenging AP courses alone. By sharing knowledge and making high-quality academic support easier to find, we hope to help more students approach AP courses with confidence, curiosity, and the resources they need to succeed.",
  ],
  disclaimer:
    "AP Mentorship Network is a student-led initiative and is not affiliated with or endorsed by College Board. AP\u00ae is a trademark registered by College Board.",
};

export const libraryTree: LibraryBranch[] = [
  {
    subject: "AP Physics 1",
    units: [
      {
        unit: "Unit 1 \u2014 Kinematics and Dynamics",
        resources: [
          {
            title: "AP Physics 101: Kinematics and Dynamics Lesson 1 slides (PDF)",
            downloadUrl: "/downloads/ap-physics-1-kinematics-lesson-1.pdf",
          },
        ],
      },
    ],
  },
];

/*
  No workshops are currently scheduled. Once a new one is planned,
  add an entry here with its date, time, subject, topic, and presenter
  and the "empty docket" message on the Events page will be replaced
  automatically by the table.
*/
export const events: EventItem[] = [];

export const ledgerStats: LedgerStat[] = [
  { label: "Members", value: "50" },
  { label: "Mentors", value: "5" },
  { label: "Schools reached", value: "NA" },
  { label: "Total workshop attendance", value: "NA" },
];