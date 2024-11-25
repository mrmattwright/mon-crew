export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  testimonial: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "dan-t",
    name: "Dan T",
    role: "Senior Software Engineer",
    bio: "Full stack, ",
    testimonial: "Working on this startup was an incredible journey. I'm proud of what we accomplished and the impact made."
  },
  {
    id: "jo-t",
    name: "Jo T",
    role: "Intermediate Software Engineer",
    bio: "Jane is a brilliant software engineer with knack for solving complex problems and leading development teams.'",
    testimonial: "Our team's dedication and creativity were unmatched. I'm grateful for the opportunity to have worked with such talented individuals."
  },
  {
    id: "'glynn'",
    name: "Glynn Foster",
    role: "Technial PM",
    bio: "The man can do anything. Product management, design, development..customer support and mentoring.",
    testimonial: "This startup allowed me to push the boundaries of design and create experiences that truly resonated with our users."
  }
];

