'use client'
import { Rocket } from '@/types/rocket'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

export function RocketCard({ rocket }: { rocket: Rocket }) {
  return (
    <Card className="bg-zinc-900 border border-zinc-600 rounded-xl p-6 shadow transition-all duration-300 hover:scale-[1.01] animate-fade-in">
      <CardHeader className="space-y-1 pb-2">
        <h2 className="text-2xl font-bebas font-semibold uppercase text-white tracking-wide">{rocket.name}</h2>
        <p className="text-white italic text-sm">{rocket.type}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-white">{rocket.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm text-white mt-4">
          <p>🟢 <strong className="text-white">Active:</strong> {rocket.active ? "Yes" : "No"}</p>
          <p>🚀 <strong className="text-white">Stages:</strong> {rocket.stages}</p>
          <p>🔥 <strong className="text-white">Boosters:</strong> {rocket.boosters}</p>
          <p>💰 <strong className="text-white">Cost:</strong> ${rocket.cost_per_launch.toLocaleString()}</p>
          <p>📈 <strong className="text-white">Success:</strong> {rocket.success_rate_pct}%</p>
          <p>📅 <strong className="text-white">First Flight:</strong> {rocket.first_flight}</p>
          <p>🌍 <strong className="text-white">Country:</strong> {rocket.country}</p>
          <p>🏢 <strong className="text-white">Company:</strong> {rocket.company}</p>
        </div>
      </CardContent>
    </Card>

  )
}
