"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Shield, Activity, Heart, UserRound, Brain, Phone, Calendar, Clock } from 'lucide-react'
import { practiceData } from "@/lib/practice-data"

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="h-8 w-8 text-primary" />,
  shield: <Shield className="h-8 w-8 text-primary" />,
  activity: <Activity className="h-8 w-8 text-primary" />,
  heart: <Heart className="h-8 w-8 text-primary" />,
  user: <UserRound className="h-8 w-8 text-primary" />,
  brain: <Brain className="h-8 w-8 text-primary" />,
}

export default function Home() {
  const services = practiceData?.services?.slice(0, 6) || []
  const heroContent = practiceData?.heroContent || {
    heading: "Quality Healthcare for Your Family",
    subheading:
      "Our team of experienced doctors is committed to providing personalized care for you and your loved ones.",
    ctaText: "Book an Appointment",
    ctaLink: "/appointment",
    image: "/welcoming-clinic-reception.png",
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 py-16 md:py-24 lg:py-32 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{heroContent.heading}</h1>
              <p className="text-xl text-muted-foreground max-w-md">{heroContent.subheading}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href={heroContent.ctaLink}>{heroContent.ctaText}</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={heroContent.image || "/placeholder.svg"}
                alt="Medical clinic reception"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-muted-foreground">{practiceData?.phone || "(02) 1234 5678"}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Book Online</h3>
                  <Link href="/appointment" className="text-primary hover:underline">
                    Make an appointment
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Mon-Fri: {practiceData?.openingHours?.Monday || "8:00 - 18:00"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive healthcare services to meet the needs of our diverse patient community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon && iconMap[service.icon]}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/empathetic-medical-consultation.png"
                alt="Doctor consulting with patient"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Choose {practiceData?.practiceName || "Our Practice"}</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Experienced Doctors</h3>
                    <p className="text-muted-foreground">
                      Our team consists of highly qualified healthcare professionals with years of experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Comprehensive Care</h3>
                    <p className="text-muted-foreground">
                      We provide a wide range of services to address various health concerns under one roof.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Patient-Centered Approach</h3>
                    <p className="text-muted-foreground">
                      We focus on listening to your concerns and providing personalized care for your needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Modern Facilities</h3>
                    <p className="text-muted-foreground">
                      Our practice is equipped with the latest technology to provide accurate diagnostics and treatment.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
            Our team is ready to provide you with high-quality healthcare services. Book your appointment today.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/appointment">Book an Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
