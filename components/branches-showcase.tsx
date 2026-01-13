"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ExternalLink, Heart } from "lucide-react"
import { branches } from "@/lib/branches-data"
import { cn } from "@/lib/utils"

export function BranchesShowcase() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0])
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  const groupedByCity = branches.reduce(
    (acc, branch) => {
      const city = branch.city
      if (!acc[city]) acc[city] = []
      acc[city].push(branch)
      return acc
    },
    {} as Record<string, typeof branches>,
  )

  return (
    <div className="space-y-8">
      {/* Map Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Map Preview */}
        <div className="lg:col-span-2">
          <Card className="h-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="relative h-96 bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-primary opacity-50" />
                  <p className="text-muted-foreground">
                    <a
                      href={selectedBranch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Open {selectedBranch.city} location in Google Maps →
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-balance">{selectedBranch.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedBranch.city}, Saudi Arabia</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Address</p>
                      <p className="text-sm text-muted-foreground">{selectedBranch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Phone</p>
                      <a href={`tel:${selectedBranch.phone}`} className="text-sm text-primary hover:underline">
                        {selectedBranch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Email</p>
                      <a href={`mailto:${selectedBranch.email}`} className="text-sm text-primary hover:underline">
                        {selectedBranch.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Hours</p>
                      <p className="text-sm text-muted-foreground">{selectedBranch.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button asChild className="flex-1" size="sm">
                    <a href={selectedBranch.mapUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Maps
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFavorite(selectedBranch.id)}
                    className={cn(
                      "transition-colors",
                      favorites.includes(selectedBranch.id) && "bg-red-50 text-red-600 border-red-200 hover:bg-red-100",
                    )}
                  >
                    <Heart className={cn("h-4 w-4", favorites.includes(selectedBranch.id) && "fill-current")} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Our Locations</CardTitle>
              <CardDescription>Serving Saudi Arabia</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(groupedByCity).map(([city, cityBranches]) => (
                  <div key={city} className="rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors">
                    <p className="font-semibold text-sm">{city}</p>
                    <p className="text-xs text-muted-foreground">
                      {cityBranches.length} branch{cityBranches.length > 1 ? "es" : ""}
                    </p>
                  </div>
                ))}
                <div className="mt-4 rounded-lg bg-primary/10 p-3">
                  <p className="text-sm font-semibold text-primary">{branches.length} Total Branches</p>
                  <p className="text-xs text-muted-foreground">Across 6 major cities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Branches Grid */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">All Our Branches</h2>
          <p className="text-muted-foreground">Click on any branch to view detailed information</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <Card
              key={branch.id}
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2",
                selectedBranch.id === branch.id
                  ? "border-primary shadow-lg"
                  : "border-transparent hover:border-primary/50",
              )}
              onClick={() => setSelectedBranch(branch)}
            >
              <CardContent className="p-4">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-balance">{branch.city}</h3>
                    <p className="text-xs text-muted-foreground">Branch</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(branch.id)
                    }}
                    className="rounded-full p-2 hover:bg-muted transition-colors"
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4 transition-colors",
                        favorites.includes(branch.id) ? "fill-red-500 text-red-500" : "text-muted-foreground",
                      )}
                    />
                  </button>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:text-primary transition-colors line-clamp-1">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <p className="line-clamp-2">{branch.address}</p>
                  </div>
                </div>

                <Button asChild size="sm" className="w-full">
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Can't find what you need?</h3>
          <p className="mb-6 opacity-90">Contact our main headquarters for additional support</p>
          <Button variant="secondary" asChild>
            <a href="tel:+9668001248882">Call: +966 800 124 8882</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
