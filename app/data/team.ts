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
  available: Date;
  visible: boolean;
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
    cv: "/cvs/dan-mahavithana-resume.pdf",
    testimonials: [
      {
        quote: "Just saying 'Fullstack' vastly understates the breadth of Dan's capabilities. He's a brilliant engineer, picks up new tech easily, is curious about how things are put together and then will go and build....and importantly deploy something that works and is useful",
        author: "Matt W (CTO)"
      }
    ],
    skills: ["TypeScript", "NodeJS", "Python", "React", "AI"],
    available: new Date("2024-12-01"),
    visible: true
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
    skills: ["TypeScript", "NodeJS", "React"],
    available: new Date("2024-12-01"),
    visible: true
  },
  {
    id: "glynn",
    name: "Glynn",
    role: "Technical PM",
    email: "glynnfoster@me.com",
    linkedin: "https://www.linkedin.com/in/glynnfoster/",
    github: "",
    bio: `
      <p className="mb-4">The actuarial domain is a complex one to build a product in. It requires technical expertise, and ability to understand a complex business domain and a way to look through that to see a better path, a better way of doing things, a promised land. After that it takes careful thought on how to execute on that vision. That's Glynn.</p>
      <p className="mb-4">Glynn in some sense <i>is</i> the product for Montoux. He's the one that can see the bigger picture, and help us understand the domain and the users. He also guided, mentored and supported the team to deliver on this.</p>
      <p className="mb-4">He did customer support, onboarded clients and ran complex ETL processes for our clients. Stop reading now and go hire this man before anyone else does.</p>
    `,
    cv: "/cvs/Resume-GlynnFoster.pdf",
    testimonials: [
      {
        quote: "The man can do anything. Product management, design, development..customer support and mentoring. I'm really going to miss working with him.",
        author: "Matt W (CTO)"
      }
    ],
    skills: ["Python"],
    available: new Date("2024-12-01"),
    visible: true
  },
  {
    id: "glen",
    name: "Glen",
    role: "Tech Lead, Full Stack",
    email: "glen.peek@icloud.com",
    linkedin: "https://www.linkedin.com/in/glenpeek/",
    github: "",
    bio: `
      <p className="mb-4">Startups need people like Glen, they just don't work without them. He'll take a business problem, and build a team, then build a product to solve it. He'll also lead by example, pick up any language (frontend, backend, AI) and build something simple that will work.</p>
      <p className="mb-4">I think people that are in Glen's team are some of the happiest and most productive engineers I've seen. They gel, they're respectful of each other and critically they get stuff done.</p>
      <p className="mb-4">Glen makes that happen, the world needs more Glen.</p>
    `,
    cv: "",
    testimonials: [
      {
        quote: "A CTO in the making. Glen is a great developer, and a great leader. He's always thinking about the product, the business and the users. He's runs the engineering team, retros and keeps the team humming, cohesive and productive. He's also just really fun to work with - people love working with Glen. That says a lot of a leader.",
        author: "Matt W (CTO)"
      }
    ],
    skills: ["TypeScript", "NodeJS", "React", "AI"],
    available: new Date("2024-12-01"),
    visible: true
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
    skills: ["TypeScript", "NodeJS", "React"],
    available: new Date("2024-12-01"),
    visible: true
  },
  {
    id: "asher",
    name: "Asher",
    role: "Senior Product Designer",
    email: "asherhutchings@gmail.comm",
    linkedin: "https://www.linkedin.com/in/asher-hutchings-501bb241/",
    github: "",
    bio: `
      <p className="mb-4">Actuarial science is a complex domain, full of math, jargon and odd business processes imposed by the constraints of the past, regulation or just terrible system design. It's hard to design a system that caters for actuaries mental models, but shows them a new simplier more maintable way of working. But that's what Asher does.</p>
      
      <p className="mb-4">Asher is a considerate designer, and will take time to think through and try several concepts before settling on something that will work. He'll then refine that taking away things until the design is as simple as possible.</p>
      <p className="mb-4">He's also a great listener and collaborator, working with product managment and the dev team to ensure that his vision for the product realized and tweaking it through testing it himself.</p>

    `,
    cv: "/cvs/Asher-Hutchings-Resume.pdf",
    testimonials: [
      {
        quote: "Asher is always user focused, cutting through a complex domain ending in beautiful, simple and usable designs.",
        author: "Matt W - (CTO)"
      }
    ],
    skills: ["Design", "UX"],
    available: new Date("2024-12-01"),
    visible: true
  },
  {
    id: "greg",
    name: "Greg",
    role: "Senior Engineer",
    email: "greg.lowe@gmail.com",
    linkedin: "https://www.linkedin.com/in/greg-lowe-a76741b8/",
    github: "",
    bio: `<p className="mb-4">Greg has a book on his desk. It's called <a href='https://craftinginterpreters.com/'>'Crafting Interpreters'</a>. It didn't just sit there gathering dust. He used that book to build the core of our actuarial runtime in Go.</p>
    <p className="mb-4">It takes a whole career to understand that the search for simplicity in engineering is how to build things that last and scale. Building the simpliest thing to solve a problem isn't always easy, but that's Greg's starting point. He'll try very hard to understand the domain and what the real use case is before starting and he's not afraid to keep asking questions until he does understand what and "why" something needs to be built.</p>
    <p className="mb-4">Once he starts, he's relentless.</p>
    `,
    cv: "",
    testimonials: [
      {
        quote: "If you want a thing to run fast, without errors and that to also be a simple thing to maintain, then Greg is your man.",
        author: "Matt W"
      }
    ],
    skills: ["Go"],
    available: new Date("2025-02-01"),
    visible: true
  },
  {
    id: "devon",
    name: "Devon",
    role: "Senior Engineer",
    email: "",
    linkedin: "",
    github: "",
    bio: "TODO",
    cv: "",
    testimonials: [
      {
        quote: "If you want a thing to run fast, without errors and that to also be a simple thing to maintain, then Devon is your man.",
        author: "Matt W"
      }
    ],
    skills: ["Rust", "Go", "Python"],
    available: new Date("2025-02-01"),
    visible: false
  }
];

