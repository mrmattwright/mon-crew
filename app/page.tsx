import Link from 'next/link'
import { teamMembers } from './data/team'
import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, Award } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-16 py-8">
      <div className="space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
          TEAM SHOWCASE
        </div>
        <h1 className="text-5xl font-bold tracking-tight">
          Meet our incredible team
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl">
          Although our startup journey has come to an end, we want to celebrate the incredible individuals who made it all possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Link href={`/team/${member.id}`} key={member.id}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/50 backdrop-blur-sm border-neutral-200">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <Users className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                    <p className="text-sm text-neutral-600 mb-4">{member.role}</p>
                    <p className="text-neutral-600">{member.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        <Card className="bg-white/50 backdrop-blur-sm border-neutral-200">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                <Briefcase className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-neutral-600">
                We set out to revolutionize the industry with innovative solutions and unwavering dedication to excellence.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/50 backdrop-blur-sm border-neutral-200">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                <Award className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold">Our Values</h3>
              <p className="text-neutral-600">
                Built on the foundations of transparency, innovation, and putting our users first in everything we do.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

