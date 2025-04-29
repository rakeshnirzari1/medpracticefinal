// This file contains the practice data that you can customize for each client

export const practiceData = {
  practiceName: "City Medical Centre",
  shortDescription: "Providing quality healthcare services to our community with compassion and expertise.",
  longDescription: `At City Medical Centre, we are committed to providing comprehensive healthcare services to patients of all ages. Our team of experienced doctors and healthcare professionals work together to ensure you receive the highest standard of care.`,
  address: "123 Medical Street, Sydney NSW 2000",
  phone: "(02) 1234 5678",
  email: "info@citymedical.com.au",
  logo: "", // Added logo property (empty string for now)
  openingHours: {
    Monday: "8:00 - 18:00",
    Tuesday: "8:00 - 18:00",
    Wednesday: "8:00 - 18:00",
    Thursday: "8:00 - 18:00",
    Friday: "8:00 - 18:00",
    Saturday: "9:00 - 14:00",
    Sunday: "Closed",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  services: [
    {
      id: "1",
      title: "General Consultations",
      description: "Comprehensive healthcare for individuals and families of all ages.",
      icon: "stethoscope",
    },
    {
      id: "2",
      title: "Preventive Care",
      description: "Regular check-ups and screenings to maintain optimal health.",
      icon: "shield",
    },
    {
      id: "3",
      title: "Chronic Disease Management",
      description: "Ongoing care for conditions like diabetes, hypertension, and asthma.",
      icon: "activity",
    },
    {
      id: "4",
      title: "Women's Health",
      description: "Specialized care addressing the unique health needs of women.",
      icon: "heart",
    },
    {
      id: "5",
      title: "Men's Health",
      description: "Tailored healthcare services addressing men's specific health concerns.",
      icon: "user",
    },
    {
      id: "6",
      title: "Mental Health",
      description: "Supportive care for anxiety, depression, and other mental health conditions.",
      icon: "brain",
    },
  ],
  teamMembers: [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "General Practitioner",
      bio: "Dr. Johnson has over 15 years of experience in family medicine with special interests in women's health and preventive care.",
      photo: "/confident-female-doctor.png",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      role: "General Practitioner",
      bio: "Dr. Chen specializes in chronic disease management and geriatric care with 12 years of practice experience.",
      photo: "/confident-asian-doctor.png",
    },
    {
      id: "3",
      name: "Dr. Jessica Patel",
      role: "General Practitioner",
      bio: "Dr. Patel focuses on mental health and adolescent medicine, bringing 8 years of experience to our practice.",
      photo: "/confident-indian-doctor.png",
    },
    {
      id: "4",
      name: "Dr. David Wilson",
      role: "General Practitioner",
      bio: "Dr. Wilson has expertise in sports medicine and men's health with over 10 years in general practice.",
      photo: "/confident-doctor.png",
    },
  ],
  heroContent: {
    heading: "Quality Healthcare for Your Family",
    subheading:
      "Our team of experienced doctors is committed to providing personalized care for you and your loved ones.",
    ctaText: "Book an Appointment",
    ctaLink: "/appointment",
    image: "/welcoming-clinic-reception.png",
  },
  aboutContent: {
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
  },
}
