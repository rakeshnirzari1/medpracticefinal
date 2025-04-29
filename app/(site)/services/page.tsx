"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { practiceData } from "@/lib/practice-data"
import { Stethoscope, Shield, Activity, Heart, User, Brain, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="h-16 w-16 text-primary" />,
  shield: <Shield className="h-16 w-16 text-primary" />,
  activity: <Activity className="h-16 w-16 text-primary" />,
  heart: <Heart className="h-16 w-16 text-primary" />,
  user: <User className="h-16 w-16 text-primary" />,
  brain: <Brain className="h-16 w-16 text-primary" />,
}

export default function ServicesPage() {
  const services = practiceData?.services || []

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We provide comprehensive healthcare services to meet the diverse needs of our patients.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6">{service.icon && iconMap[service.icon]}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Besides our core services, we also provide the following healthcare solutions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Preventive Health Checks</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Comprehensive health assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Immunizations and vaccinations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Cancer screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Cardiovascular risk assessments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Specialized Consultations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Travel medicine and vaccinations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Skin checks and minor procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Allied health services</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Mental health care plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
            If you have questions about our services or would like to schedule an appointment, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/appointment">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
