export interface Testimonial {
  quote: string;
  author: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  testimonials: Testimonial[];
  email: string;
  linkedin: string;
  github: string;
  cv: string;
  skills: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "dan",
    name: "Dan",
    role: "Senior Software Engineer",
    email: "mahathun.online@gmail.com",
    linkedin: "https://linkedin.com/in/dan-mahavithana",
    github: "https://github.com/mahathun",
    bio: `
      <p className="mb-4">Dan can and has turned his hand to a large number of technologies and problems, whether it was API architecture, micromanaging microservices, or designing a seamless UI/UX experience.</p>
      <p className="mb-4">His work with technologies like TypeScript, NodeJS was terrific! He built the back end for an LLM product we lanched, using python, Django and Langsmith to build a very scalable LLM solution that we monitored and deployed to serval beta customers.</p>
      <p className="mb-4">He turned around changes super fast, but with a high level of testing and quality - it wa a real pleasure to see that!</p>
      <p className="mb-4">He wasn't afraid to roll up his sleeves and dive into technical decision-making, creating robust and scalable systems.</p>
      <p className="mb-4">Beyond his impressive technical chops, Dan was also a fantastic mentor and collaborator. He loved sharing knowledge with junior staff and ensured that the entire team thrived, not just in terms of tech skills, but also in creating an environment that was supportive and fun.</p>
    `,
    cv: "/cvs/Resume-DanMahavithana.pdf",
    testimonials: [
      {
        quote: "Just saying 'Fullstack' vastly understates the breadth of Dan's capabilities. He's a brilliant engineer, picks up new tech easily, is curious about how things are put together and then will go and build....and importantly deploy something that works and is useful",
        author: "Matt W (CTO)"
      }
    ],
    skills: ["TypeScript", "NodeJS", "Python", "React", "AI"]
  },
  {
    id: "jo",
    name: "Jo",
    role: "Intermediate Software Engineer",
    email: "jotregidga@gmail.com",
    linkedin: "https://www.linkedin.com/in/jo-tregidga/",
    github: "",
    bio: `
      <p className="mb-4">At Montoux, Jo brought a refreshing blend of technical acumen and a collaborative spirit to our development team. As a Web Developer and Front End Engineer, Jo played a key role in rebuilding our actuarial platform, utilizing TypeScript and React to revamp and optimize the architecture. With a sharp eye for detail Jo worked side by side without deisgner to realise their designs in pixel perfect detail. She also was heavily involved adoption of X-state for state management.</p>
      <p className="mb-4"> Jo didn't just build software; she built an environment of inclusivity and continuous improvement. Leveraging AWS services like DynamoDB and S3, and implementing cloud infrastructure with Terraform, Jo made significant contributions to making our deployment process reliable and efficient, and released the software that she built! </p>
      <p className="mb-4"> Jo's knack for leadership went beyond technical contributions. She was an active participant in agile ceremonies, helping to foster a collaborative culture and keep the team on track. Jo's drive to continuously learn, paired with her dedication to team cohesion, made her a standout developer that any hiring manager would be fortunate to have on their team.</p>
    `,
    cv: "/cvs/Jo-Tregidga-CV.pdf",
    testimonials: [
      {
        quote: "Hard working, dilligent, willing to ask questions and learn new things. Jo got involved in so many areas of the business and always produced high quality work.",
        author: "Matt W (CTO)"
      }
    ],
    skills: ["TypeScript", "NodeJS", "React"]
  },
  {
    id: "glynn",
    name: "Glynn",
    role: "Technical PM",
    email: "glynnfoster@me.com",
    linkedin: "https://www.linkedin.com/in/glynnfoster/",
    github: "",
    bio: "TODO",
    cv: "/cvs/Resume-GlynnFoster.pdf",
    testimonials: [
      {
        quote: "The man can do anything. Product management, design, development..customer support and mentoring. Hire this person.",
        author: "Matt W (CTO)"
      }
    ],
    skills: ["Python"]
  },
  {
    id: "glen",
    name: "Glen",
    role: "Tech Lead, Full Stack",
    email: "glen.peek@icloud.com",
    linkedin: "https://www.linkedin.com/in/glenpeek/",
    github: "",
    bio: "TODO",
    cv: "",
    testimonials: [
      {
        quote: "This startup allowed me to push the boundaries of design and create experiences that truly resonated with our users.",
        author: "Matt W"
      }
    ],
    skills: ["TypeScript", "NodeJS", "React", "AI"]
  },
  {
    id: "simon-t",
    name: "Simon",
    role: "Senior Software Engineer",
    email: "simon@simontegg.com",
    linkedin: "https://www.linkedin.com/in/simon-t-408a89244/",
    github: "",
    bio: `
      <p className="mb-4">Simon is a considerate expert. He took charge of our React/TypeScript frontend, tackling challenges that required deep technical expertise and a strategic approach.</p>
      <p className="mb-4">Simon architected our client solutions using the 'strangler' pattern, allowing new features to be delivered  atop legacy systems under tight deadlines we had with AWS, all without compromising code quality.</p>
      <p className="mb-4">He also introduced atomic design principles to streamline the development process, enhancing both efficiency and scalability. He managed to balance fixing techncal debt really well with innovating on our product and is always shipping</p>
      <p className="mb-4">Simon didn’t just contribute technically; he also played a crucial role in setting product direction alongside product managers and designers, and he mentored intermediate and junior developers, helping them grow into more effective team members.</p>
    `,
    cv: "/cvs/simon-tegg-CV.pdf",
    testimonials: [
      {
        quote: "A kind, considerate and expert developer. Anyone that adds Simon to the team isn't just getting a great developer, but they're getting a force multiplier for the whole team.",
        author: "Matt W (CTO)"
      }
    ],
    skills: ["TypeScript", "NodeJS", "React"]
  },
  {
    id: "asher",
    name: "Asher",
    role: "Senior Product Designer",
    email: "asherhutchings@gmail.comm",
    linkedin: "https://www.linkedin.com/in/asher-hutchings-501bb241/",
    github: "",
    bio: "TODO",
    cv: "/cvs/Asher-Hutchings-Resume.pdf",
    testimonials: [
      {
        quote: "This startup allowed me to push the boundaries of design and create experiences that truly resonated with our users.",
        author: "Matt W"
      }
    ],
    skills: ["Design", "UX"]
  },
  {
    id: "greg",
    name: "Greg",
    role: "Senior Engineer",
    email: "greg.lowe@gmail.com",
    linkedin: "https://www.linkedin.com/in/greg-lowe-a76741b8/",
    github: "",
    bio: "TODO",
    cv: "",
    testimonials: [
      {
        quote: "If you want a thing to run fast, without errors and that to also be a simple thing to maintain, then Greg is your man.",
        author: "Matt W"
      }
    ],
    skills: ["Go"]
  }
];

