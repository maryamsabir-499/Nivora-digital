import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Us" description="Get in touch with Nivora Digital for a quote or to discuss your e-commerce, import, export, logistics or web project." />
      <PageHeader eyebrow="Contact Us" title="Let's talk" text="Tell us about your business and what you need. We will get back to you with the next steps." />
      <Contact />
    </>
  )
}