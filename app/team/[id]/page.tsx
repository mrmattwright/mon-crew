import { teamMembers, TeamMember } from '../../data/team'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Quote } from 'lucide-react'

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }))
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id) as TeamMember

  if (!member) {
    return <div className="text-center text-2xl text-red-600">Team member not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Team
      </Link>
      
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{member.name}</h1>
        <p className="text-xl text-neutral-600">{member.role}</p>
      </div>

      <Card className="bg-white/50 backdrop-blur-sm border-neutral-200">
        <CardContent className="p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-neutral-600">{member.bio}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50/50 border-blue-100">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Quote className="h-5 w-5 text-blue-700" />
            </div>
            <blockquote className="text-lg text-neutral-700 italic">
              {member.testimonial}
            </blockquote>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

