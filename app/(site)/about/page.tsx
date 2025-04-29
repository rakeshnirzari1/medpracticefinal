"use client"

import { Card, CardContent } from "@/components/ui/card"
import { practiceData } from "@/lib/practice-data"
import { Check } from 'lucide-react'

export default function AboutPage() {
  const aboutContent = practiceData?.aboutContent || {
    mission: "To provide accessible, high-quality healthcare with compassion and respect for all patients.",
    vision:
      "To be the leading healthcare provider in our community, known for excellence and innovation in patient care.",
    values: [
      "Patient-centered care",
      "Professional excellence",
      "Integrity and ethics",
      "Teamwork and collaboration",
      "Continuous improvement",
    ],
    image: "/collaborative-care.png",
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About {practiceData.practiceName}</h1>
            <p className="text-xl text-muted-foreground">
              {practiceData?.shortDescription ||
                "Providing quality healthcare services to our community with compassion and expertise."}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  {practiceData?.longDescription ||
                    "At our medical practice, we are committed to providing comprehensive healthcare services to patients of all ages. Our team of experienced doctors and healthcare professionals work together to ensure you receive the highest standard of care."}
                </p>
                <p>
                  We understand that each patient has unique healthcare needs, which is why we take a personalized
                  approach to treatment. Our goal is to establish long-term relationships with our patients and their
                  families to better address their evolving healthcare requirements.
                </p>
              </div>
            </div>
            <div>
              <img
                src={aboutContent.image || "/placeholder.svg"}
                alt="Our medical team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">{aboutContent.mission}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">{aboutContent.vision}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Our Values</h3>
                <ul className="space-y-2">
                  {aboutContent.values.map((value, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Accreditations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of healthcare delivery through accreditation with recognized industry
              bodies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="p-4">
              <img src="/abstract-medical-symbol.png" alt="RACGP Accreditation" className="max-h-16 w-auto" />
            </div>
            <div className="p-4">
              <img src="/quality-improvement-symbol.png" alt="QIP Accreditation" className="max-h-16 w-auto" />
            </div>
            <div className="p-4">
              <img src="/abstract-interconnectedness.png" alt="AGPAL Accreditation" className="max-h-16 w-auto" />
            </div>
            <div className="p-4">
              <img src="/stylized-medical-symbol.png" alt="AMA Member" className="max-h-16 w-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
