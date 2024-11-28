import Link from 'next/link'
import { teamMembers } from './data/team'
import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase } from 'lucide-react'
import SkillBadge from '@/components/skill-badge'

export default function HomePage() {
  return (
    <div className="space-y-16 py-8">
      <div className="space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
          TEAM SHOWCASE
        </div>
        <h1 className="text-5xl font-bold tracking-tight">
          Hire one of our incredible team
        </h1>
        <p className="text-xl text-neutral-600">
          Our <a href="https://montoux.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-neutral-900">Montoux</a> startup journey has come to an end. We want to celebrate the incredible humans who made it all possible. Everyone listed here is approachable for work and comes highly recommended.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers
          .filter(member => member.visible)
          .map((member) => (
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.skills.map((skill) => (
                          <SkillBadge key={skill} skill={skill} />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-end h-full">
                    <p className="text-xs text-neutral-500">
                        Available: {member.available.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pt-8">
        <Card className="bg-white/50 backdrop-blur-sm border-neutral-200">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                <Briefcase className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold">What happened?</h3>
              <p className="text-neutral-600">
                Well...it&apos;s a long story, but here&apos;s a short version. We sent the following message to all our customers:
              </p>

              <p className="text-neutral-600">
                &ldquo;Montoux was founded to bring fresh, effective, and innovative solutions to actuarial science, empowering insurers and actuaries worldwide. Recently, we have encountered a challenging situation due to a legal claim from an actuarial systems provider alleging that Montoux has improperly utilized proprietary information. We categorically deny all allegations of wrongdoing. Our solutions have been independently developed through dedicated research, advanced technology, and a deep commitment to ethical business practices.&rdquo;
              </p>

              <p className="text-neutral-600">
                That resulted in the unfortunate decision to wind down the company because of the cost of fighting this case in the US (running into millions of US Dolllars).          
              </p>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

