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
    bio: "Full stack",
    cv: "",
    testimonials: [
      {
        quote: "Our team's dedication and creativity were unmatched. I'm grateful for the opportunity to have worked with such talented individuals.",
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
    bio: "TODO",
    cv: "",
    testimonials: [
      {
        quote: "This startup allowed me to push the boundaries of design and create experiences that truly resonated with our users.",
        author: "Matt W"
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
    cv: "",
    testimonials: [
      {
        quote: "This startup allowed me to push the boundaries of design and create experiences that truly resonated with our users.",
        author: "Matt W"
      }
    ],
    skills: ["Design", "UX"]
  }
];

