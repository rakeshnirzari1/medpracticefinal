import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { practiceData } from "@/lib/practice-data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container px-4 py-10 md:px-6 md:py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="space-y-4 max-w-xs">
            <h2 className="font-bold text-lg">{practiceData?.practiceName || "Medical Centre"}</h2>
            <p className="text-muted-foreground text-sm">
              {practiceData?.shortDescription ||
                "Providing quality healthcare services to our community with compassion and expertise."}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={practiceData?.socialLinks?.facebook || "#"}
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={practiceData?.socialLinks?.instagram || "#"}
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={practiceData?.socialLinks?.twitter || "#"}
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-primary">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Opening Hours</h3>
              <ul className="space-y-2 text-sm">
                {practiceData?.openingHours ? (
                  Object.entries(practiceData.openingHours).map(([day, hours]) => (
                    <li key={day} className="text-muted-foreground">
                      <span className="inline-block w-20">{day}:</span> {hours}
                    </li>
                  ))
                ) : (
                  <>
                    <li className="text-muted-foreground">
                      <span className="inline-block w-20">Monday:</span> 8:00 - 18:00
                    </li>
                    <li className="text-muted-foreground">
                      <span className="inline-block w-20">Tuesday:</span> 8:00 - 18:00
                    </li>
                    <li className="text-muted-foreground">
                      <span className="inline-block w-20">Wednesday:</span> 8:00 - 18:00
                    </li>
                    <li className="text-muted-foreground">
                      <span className="inline-block w-20">Thursday:</span> 8:00 - 18:00
                    </li>
                    <li className="text-muted-foreground">
                      <span className="inline-block w-20">Friday:</span> 8:00 - 18:00
                    </li>
                    <li className="text-muted-foreground">
                      <span className="inline-block w-20">Saturday:</span> 9:00 - 14:00
                    </li>
                    <li className="text-muted-foreground">
                      <span className="inline-block w-20">Sunday:</span> Closed
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="space-y-3 col-span-2 md:col-span-1">
              <h3 className="font-semibold">Contact Us</h3>
              <address className="not-italic text-sm space-y-2 text-muted-foreground">
                <p>{practiceData?.address || "123 Medical Street, Sydney NSW 2000"}</p>
                <p>Phone: {practiceData?.phone || "(02) 1234 5678"}</p>
                <p>Email: {practiceData?.email || "info@medicalpractice.com.au"}</p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {practiceData?.practiceName || "Medical Centre"}. All rights reserved.
          </p>
          <p className="mt-1">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-primary ml-2">
              Terms of Use
            </Link>
          </p>
          <p className="mt-2 text-xs">
            This website complies with AHPRA advertising guidelines and Australian Privacy Principles.
          </p>
        </div>
      </div>
    </footer>
  )
}
