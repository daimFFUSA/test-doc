/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SeoItem {
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
}

export const SEO_METADATA: Record<string, SeoItem> = {
  band: {
    metaTitle: "How a Band Works | Broken Chains Prison Education",
    metaDescription: "Ten people. One student. Four promises. Ten outside sponsors pool $18 a month each to fund one student's Bible college degree through BCA.",
    targetKeyword: "band of brothers prison ministry, inmate micro-sponsorship, church prison ministry model"
  },
  degrees: {
    metaTitle: "Academic Degrees | Broken Chains Prison Education",
    metaDescription: "Scripture, studied seriously, in a place few seminaries reach. Bachelor of Biblical Studies and Master of Arts from Bible Colleges of America.",
    targetKeyword: "inmate Bible correspondence degree, prison theological diploma, BCA degrees"
  },
  impact: {
    metaTitle: "Impact & Research | Broken Chains Prison Education",
    metaDescription: "We measure, because boards and wardens will ask. Longitudinal tracking of in-facility conduct, completion velocity, and recidivism.",
    targetKeyword: "prison education research, inmate recidivism data, prison ministry outcomes"
  },
  about: {
    metaTitle: "Our Story | Broken Chains Prison Education",
    metaDescription: "A college that has mailed lessons since 1993. An initiative built to fund the seats. Partnership with Bible Colleges of America.",
    targetKeyword: "Bible Colleges of America BCA, prison education history, Michael Woolstrum"
  },
  leaders: {
    metaTitle: "Correctional Leaders Portal | Broken Chains Prison Education",
    metaDescription: "Fund nothing. Risk little. Measure everything. Zero facility cost, strict mailroom compliance, and quarterly behavioral reporting for wardens.",
    targetKeyword: "warden prison program, chaplain theological education, DOC approved correspondence"
  },
  'get-involved': {
    metaTitle: "Get Involved | Broken Chains Prison Education",
    metaDescription: "One form. Four ways in. Gather your ten, join a band, or sponsor an incarcerated student's full theological degree.",
    targetKeyword: "sponsor incarcerated student, prison ministry volunteer, build a band of 10"
  }
};

export const HOMEPAGE_CONTENT = {
  hero: {
    badge: "The 10-to-1 Support Circle Model",
    h1: "What If Ten People Outside Knew His Name?",
    subheadline: "Incarceration breeds silence and isolation. Broken Chains pairs one incarcerated student with a dedicated circle of ten believers who pool $18/month to fund his degree, pray for him daily, and write him through his sentence.",
    primaryCta: "Build a Band of 10",
    secondaryCta: "Explore Degrees",
    stats: [
      { value: "10 : 1", label: "Advocate Ratio", sub: "10 sponsors surround 1 student" },
      { value: "$18 / mo", label: "Micro-Pledge", sub: "Less than 60¢ per day per sponsor" },
      { value: "Since 1993", label: "BCA Heritage", sub: "30+ years of paper correspondence" }
    ]
  },
  coreProblemVsSolution: {
    headline: "The Prison Yard Culture vs. The Band of 10 Circle",
    subhead: "Most correctional facilities warehouse bodies in noise and isolation. Broken Chains builds an intentional, accountable community.",
    problemBox: {
      p1: "Incarceration breeds severe isolation. Letters cease, phone lines go silent, and men and women become forgotten institutional identification numbers.",
      p2: "Without outside advocates or educational purpose, yard culture reinforces the very cycles that lead to recidivism."
    },
    solutionBox: {
      p1: "A dedicated circle of ten outside sponsors surrounds one student with structured care, prayer, and academic accountability.",
      p2: "For $18 a month each, sponsors completely remove tuition barriers while exchanging monthly letters of eternal encouragement."
    }
  },
  howBandWorks: {
    headline: "How The Band Works: Simple, Transparent Stewardship",
    subhead: "By dividing the cost among ten believers, tuition becomes affordable for any budget with zero student debt.",
    steps: [
      {
        step: "01",
        title: "10 Believers Step Forward",
        bullets: [
          "**$18 / month pledge** per advocate (less than 60¢ a day).",
          "Personal commitment to pray weekly for the student by name.",
          "Monthly letter of spiritual encouragement routed via ministry P.O. Box."
        ]
      },
      {
        step: "02",
        title: "100% Tuition Is Covered",
        bullets: [
          "**$180 / month total pool** covers all textbooks, binders, and proctor fees.",
          "Physical coursework shipped directly to the facility chaplain.",
          "Zero inmate debt and zero financial burden on low-income families."
        ]
      },
      {
        step: "03",
        title: "Brotherhood Breaks Isolation",
        bullets: [
          "Regular mail call restores self-worth and dignity behind bars.",
          "Quarterly academic progress reports sent to all ten sponsors.",
          "Family wraparound outreach assures children they are not forgotten."
        ]
      }
    ]
  },
  academicPartner: {
    headline: "Rigorous Pedagogy Built for Prison Walls",
    subhead: "Partnered with Bible Colleges of America (BCA) — Founded 1993",
    summary: "Online college degrees are impossible behind bars because state and federal facilities strictly ban inmate internet access. For over 30 years, Bible Colleges of America has administered physical, printed correspondence degrees that comply with the strictest correctional security protocols.",
    narrative: "Online degrees do not work behind bars because federal and state prisons do not grant prisoners internet access. BCA’s paper-packet correspondence is the only secure pathway to higher education.",
    highlights: [
      "**100% Physical Course Binders:** Heavyweight, staple-free printed study volumes.",
      "**Chaplain-Proctored Exams:** Closed-book evaluations supervised by facility chaplains.",
      "**Handwritten Exegesis:** In-depth written essays graded directly by BCA faculty.",
      "**Independent by Conviction:** Unaccredited to preserve uncompromised biblical fidelity."
    ]
  },
  fourBeneficiaries: {
    headline: "Four Stakeholders Transformed by One Band",
    subhead: "The 10-to-1 circle produces measurable return for the student, family, facility, and church.",
    cards: [
      {
        id: "student",
        tag: "For The Student",
        role: "Academic Dignity & Purpose",
        oneSentence: "Replaces dead yard hours with collegiate theology and restores self-worth through regular letters.",
        stat: "30 credits earned per year"
      },
      {
        id: "family",
        tag: "For The Family",
        role: "Generational Stability",
        oneSentence: "Children see an incarcerated father become an educated spiritual leader while removing tuition burdens.",
        stat: "Seasonal family care cards"
      },
      {
        id: "warden",
        tag: "For The Warden",
        role: "Calmer, Safer Living Pods",
        oneSentence: "Zero taxpayer dollars required; enrolled students exhibit an 84% reduction in disciplinary write-ups.",
        stat: "84% infraction reduction"
      },
      {
        id: "church",
        tag: "For The Church",
        role: "Turn-Key Discipleship",
        oneSentence: "Sunday School classes and small groups unite around a living human life with transparent reporting.",
        stat: "10-member group project"
      }
    ]
  },
  measuredResults: {
    headline: "Documented Transformation, Not Sentimentality",
    p1: "Broken Chains tracks institutional conduct reports, academic module velocity, and family reconnection from the first day of Band activation.",
    p2: "Criminological data proves that **structured outside community paired with serious higher education** is the single greatest deterrent to recidivism.",
    metrics: [
      { value: "84%", label: "Disciplinary Infraction Drop", note: "Within 6 months of Band activation" },
      { value: "92%", label: "Course Completion Velocity", note: "Compared to 23% in unmonitored distance study" },
      { value: "14%", label: "Projected Recidivism Rate", note: "Versus 68% nationwide 3-year baseline" },
      { value: "30+", label: "Years of BCA Experience", note: "Administering paper degrees since 1993" }
    ]
  },
  finalCta: {
    scripture: "“I was in prison, and ye came unto me.”",
    citation: "— Matthew 25:36",
    headline: "Will You Be One of His Ten Advocates?",
    subheadline: "For $18 a month, you can replace the silence of a cell with collegiate study, weekly prayer, and unbroken Christian brotherhood.",
    buttonText: "Build a Band of 10 ($18/mo)",
    secondaryText: "Partner Your Church"
  }
};

export const ABOUT_CONTENT = {
  hero: {
    h1: "About Broken Chains Prison Education",
    subheadline: "Restoring dignity and biblical purpose to incarcerated men and women through collegiate correspondence degrees and dedicated 10-to-1 advocate circles."
  },
  mission: {
    kicker: "Mission & History",
    headline: "Our Founding Conviction",
    intro: "Broken Chains was founded on the biblical truth that no human soul is beyond the reach of God's regenerating grace, and that true rehabilitation requires both academic rigor and intentional Christian community.",
    bullets: [
      "**Breaking Yard Isolation:** Pairing every incarcerated scholar with ten dedicated mentors who pray, write, and encourage.",
      "**Removing Financial Barriers:** Ensuring 100% of tuition, textbooks, and proctoring fees are covered without inmate or family debt.",
      "**Equipping Inside Leaders:** Training students to become pastors, peer tutors, and peacemakers across crowded cell blocks."
    ]
  },
  institutionalBacking: {
    kicker: "Academic Backing",
    headline: "Partnered with Bible Colleges of America (BCA)",
    p1: "Founded in 1993, Bible Colleges of America has over three decades of documented experience administering physical correspondence degrees specifically designed for correctional security standards.",
    p2: "BCA coursework requires zero internet access, utilizing heavyweight study binders, physical study Bibles, and chaplain-supervised examinations.",
    bullets: [
      "**Established in 1993:** 30+ years of unbroken correctional correspondence heritage.",
      "**Chaplain Coordination:** Verified proctoring network across state and federal facilities.",
      "**Doctrinal Fidelity:** Conservative, literal-grammatical approach to biblical exposition."
    ]
  },
  statementOfFaith: {
    kicker: "Doctrinal Conviction",
    headline: "Statement of Faith",
    intro: "Our ministry stands firmly on historic, evangelical Christian doctrine, centered on the authority of Scripture and the transformative power of the Gospel.",
    articles: [
      {
        title: "The Inerrancy of Scripture",
        body: "We believe the Holy Bible is the inspired, inerrant, and infallible Word of God, serving as the supreme authority in all matters of faith, doctrine, and practice."
      },
      {
        title: "The Triune God",
        body: "We believe in one God eternally existing in three co-equal persons: Father, Son, and Holy Spirit, who created and sovereignly governs all things."
      },
      {
        title: "Salvation by Grace Alone",
        body: "We believe sinners are justified solely by grace through faith in the finished substitutionary atonement of Jesus Christ on the cross, apart from human works."
      },
      {
        title: "The Value of Every Soul",
        body: "We believe all individuals bear the image of God and possess inherent dignity, making the incarcerated worthy of education, respect, and redemptive discipleship."
      }
    ]
  }
};

export const BAND_MODEL_CONTENT = {
  hero: {
    h1: "The Band of Brothers & Sisters Model",
    subheadline: "Ten people on the outside pool $18 a month each to fund one incarcerated student's full college degree, pray weekly, and write monthly letters."
  },
  anatomy: {
    kicker: "Structure & Roles",
    headline: "The Anatomy of a Band: Four Shared Commitments",
    subhead: "A Band distributes the emotional and financial investment so that no single volunteer carries the burden alone.",
    roles: [
      {
        id: "prayer",
        title: "Weekly Prayer Advocates",
        cadence: "Weekly Cadence",
        summary: "Interceding specifically by name for the student’s spiritual growth, cell block protection, and family peace."
      },
      {
        id: "correspondence",
        title: "Monthly Letter Writers",
        cadence: "Monthly Cadence",
        summary: "Sending handwritten words of encouragement routed safely through our centralized ministry P.O. Box."
      },
      {
        id: "family",
        title: "Family Care Liaisons",
        cadence: "Seasonal Cadence",
        summary: "Reaching out with holiday cards and prayer support to the student’s spouse and children on the outside."
      },
      {
        id: "funding",
        title: "Tuition Underwriters",
        cadence: "$18 / Month",
        summary: "Ten gifts of $18 provide $180 per month, covering 100% of course binders, proctoring fees, and grading."
      }
    ]
  },
  financialPooling: {
    breakdownList: [
      { item: "Course Materials & Printed Binders", amount: "$90 / mo", details: "Physical BCA study volumes, textbooks, and syllabus guides shipped directly to facility." },
      { item: "Faculty Grading & Academic Mentorship", amount: "$60 / mo", details: "BCA professor evaluation of handwritten exegesis essays and comprehensive exams." },
      { item: "Institutional Proctoring & Mail Routing", amount: "$30 / mo", details: "Chaplain coordination, secure P.O. Box mail screening, and quarterly donor reports." }
    ]
  },
  churchOnboarding: {
    kicker: "Church Implementation",
    headline: "Launch a Band in Your Church in 3 Simple Steps",
    subhead: "A turnkey discipleship project designed for Sunday School classes, Men’s/Women’s ministries, and mission committees.",
    steps: [
      {
        step: "Step 01",
        title: "Form Your 10-Person Circle",
        description: "Gather 10 believers in your small group or Sunday School class who agree to pledge $18/month and commit to praying by name."
      },
      {
        step: "Step 02",
        title: "Receive Your Student Dossier",
        description: "Broken Chains assigns an enrolled BCA student with his background testimony, facility details, and academic track."
      },
      {
        step: "Step 03",
        title: "Begin Mail Call & Track Progress",
        description: "Receive ministry-addressed correspondence envelopes and receive quarterly grade cards celebrating your student’s milestones."
      }
    ]
  }
};

export const DEGREES_CONTENT = {
  hero: {
    h1: "Academic Degrees & BCA Curriculum",
    subheadline: "Rigorous, paper-delivered collegiate theological degrees designed to meet Department of Corrections mail protocols without digital devices."
  },
  overview: {
    p1: "Online degrees are strictly banned behind prison walls. BCA's physical correspondence methodology provides comprehensive theological instruction directly to the cell.",
    p2: "Students complete 120 credit hours for the undergraduate track and 36 credit hours for the graduate track, with closed-book exams supervised by facility chaplains."
  },
  pedagogy: {
    kicker: "Physical Correspondence",
    headline: "Pedagogy Built for Correctional Realities",
    p1: "Because state and federal institutions prohibit internet devices for inmates, all BCA coursework is physical. Students receive printed study volumes, write comprehensive exegesis essays by hand, and take closed-book exams proctored by institutional chaplains.",
    bullets: [
      "**Physical Study Binders:** Heavyweight, spiral-bound courses compliant with prison contraband inspections.",
      "**Closed-Book Examinations:** Proctored under the direct oversight of facility chaplains.",
      "**Faculty-Graded Essays:** Handwritten theological essays evaluated and returned with mentor feedback."
    ]
  },
  bachelorProgram: {
    kicker: "Undergraduate Program",
    title: "Bachelor of Biblical Studies (B.B.S.)",
    duration: "4-Year Comprehensive Undergraduate Track (120 Credit Hours)",
    tuition: "$216 / month ($2,160 / academic year)",
    summary: "A thorough undergraduate program grounding students in historical theology, pastoral leadership, and biblical hermeneutics.",
    curriculumBullets: [
      "**Old & New Testament Survey:** Historical context, chronology, and covenantal frameworks.",
      "**Systematic Theology:** Exhaustive study of Bibliology, Soteriology, Christology, and Eschatology.",
      "**Hermeneutics & Exegesis:** Literal-grammatical principles of sound biblical interpretation.",
      "**Biblical Counseling:** Pastoral tools for overcoming trauma, chemical addiction, and anger.",
      "**Pastoral Epistles:** Christian leadership qualifications, administration, and disciple-making."
    ],
    outcomes: "Graduates are equipped to teach Sunday school classes inside the facility, mentor peers on the yard, and serve local churches upon release."
  },
  masterProgram: {
    kicker: "Graduate Program",
    title: "Master of Arts in Ministry & Theology (M.A.)",
    duration: "2-Year Advanced Graduate Track (36 Credit Hours)",
    tuition: "$258 / month ($2,580 / academic year)",
    summary: "Advanced theological education for seasoned inmate leaders called to senior pastoral ministry, chaplaincy, and church planting.",
    curriculumBullets: [
      "**Advanced Exegesis:** Original language syntax and Greek/Hebrew tools.",
      "**Expository Homiletics:** Crafting clear, Christ-centered sermons for tough cultural contexts.",
      "**Historical Theology:** Church history from the Early Church Fathers through the Reformation.",
      "**Urban Missiology:** Practical outreach and church planting models for high-density environments.",
      "**Graduate Thesis / Practicum:** Major research paper or institutional chaplaincy handbook."
    ],
    outcomes: "Equips candidates for senior pastoral pulpits, rescue mission directorships, and prison re-entry leadership."
  },
  unaccreditedNote: {
    kicker: "Independence by Conviction",
    title: "Why BCA Degrees Are Unaccredited by Design",
    p1: "Secular accreditation boards increasingly demand compromise in institutional doctrinal statements, faculty hiring, and student conduct codes.",
    p2: "By remaining unaccredited and privately funded, Bible Colleges of America preserves **uncompromised biblical fidelity** while avoiding bureaucratic tuition inflation."
  }
};

export const GET_INVOLVED_CONTENT = {
  hero: {
    badge: "Ways to Partner",
    h1: "Join the Broken Chains Community",
    subheadline: "Whether you are an individual believer, a church missions leader, or a correctional chaplain, there is a clear pathway to break isolation."
  },
  pathways: [
    {
      id: "individuals-churches",
      target: "Individuals & Churches",
      title: "Join an $18/Mo Band or Adopt a Student",
      cost: "$18 / month",
      summary: "Join an existing 10-person Band as a monthly sponsor and letter writer, or adopt an entire student through your Sunday School class.",
      actionText: "Join a Band ($18/mo)",
      bullets: [
        "Pledge $18/month (less than 60¢ a day).",
        "Commit to praying for your student weekly by name.",
        "Write monthly encouragement letters via our central P.O. Box.",
        "Receive quarterly academic reports and graduation updates."
      ]
    },
    {
      id: "major-donors",
      target: "Major Donors & Businesses",
      title: "Underwrite a Student Cohort",
      cost: "$1,800 / month (or $21,600/yr)",
      summary: "Fully sponsor a cohort of 10 incarcerated students through their entire degree program, establishing an accredited-alternative study hall.",
      actionText: "Underwrite a Cohort",
      bullets: [
        "Fund 10 students across their 4-year B.B.S. program.",
        "Receive executive impact briefings from BCA leadership.",
        "Named scholarship designation across participating facilities.",
        "Direct measurable return on prison recidivism reduction."
      ]
    },
    {
      id: "wardens-chaplains",
      target: "Wardens & Chaplains",
      title: "Bring BCA to Your Facility",
      cost: "$0 Facility Budget",
      summary: "Zero budget required from state or county Department of Corrections. We supply all course materials and proctoring packets.",
      actionText: "Request Facility Packet",
      bullets: [
        "Zero taxpayer cost — 100% privately funded by outside Bands.",
        "Compliant with strict prison mail and contraband rules.",
        "Proven 84% reduction in living pod disciplinary infractions.",
        "Chaplain support with turn-key examination administration."
      ]
    }
  ],
  leadForm: {
    headline: "Connect With Our Sponsorship Team",
    subhead: "Submit your details below to receive a student profile, church small group kit, or correctional chaplaincy packet.",
    directorContact: {
      title: "Michael Woolstrum",
      tagline: "Director of Outreach & Partnerships · Bible Colleges of America Partnership",
      email: "michael@tricordteam.com",
      phone: "(737) 881-7777",
      routingNote: "All physical mail screened and routed via Central Ministry P.O. Box."
    }
  }
};

// Backward-compatibility token exports
export const TOKENS_DATA = {
  colors: {
    teal: "#1A4B54",
    offwhite: "#FAFAF8",
    rust: "#B85B3F",
    charcoal: "#33383D",
    border: "#E2DFD8"
  },
  typography: {
    h1: "clamp(2.25rem, 4.5vw, 3.5rem)",
    h2: "clamp(1.65rem, 3.2vw, 2.35rem)",
    h3: "clamp(1.2rem, 2vw, 1.55rem)",
    lead: "clamp(1.0625rem, 1.3vw, 1.25rem)",
    body: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
    small: "clamp(0.8125rem, 0.9vw, 0.875rem)"
  }
};

export const SITE_SECTIONS = {
  brand: "BROKEN CHAINS PRISON EDUCATION",
  partner: "Bible Colleges of America (BCA, Founded 1993)"
};
