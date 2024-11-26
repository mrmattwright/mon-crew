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
}
export const teamMembers: TeamMember[] = [
  {
    id: "dan-t",
    name: "Dan T",
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
        quote: "Just saying 'Fullstack' vastly understates the breadth of Dan's capabilities. He's a brilliant engineer, picks up new tech easily, is curious about how things are put together and then will go and and build....and importantly deploy something that works and is useful",
        author: "Matt W (CTO)"
      }
    ]
  },
  {
    id: "jo-t",
    name: "Jo T",
    role: "Intermediate Software Engineer",
    email: "jo.t@montoux.com",
    linkedin: "https://linkedin.com/in/jo-t",
    github: "",
    bio: "Full stack",
    cv: "/cvs/Resume-JoT.pdf",
    testimonials: [
      {
        quote: "Our team's dedication and creativity were unmatched. I'm grateful for the opportunity to have worked with such talented individuals.",
        author: "Matt W"
      }
    ]
  },
  {
    id: "'glynn'",
    name: "Glynn Foster",
    role: "Technial PM",
    email: "glynn.foster@montoux.com",
    linkedin: "https://linkedin.com/in/glynn-foster",
    github: "https://github.com/glynn-foster",
    bio: "The man can do anything. Product management, design, development..customer support and mentoring.",
    cv: "/cvs/Resume-GlynnFoster.pdf",
    testimonials: [
      {
        quote: "This startup allowed me to push the boundaries of design and create experiences that truly resonated with our users.",
        author: "Matt W"
      }
    ]
  }
];

