import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <>
      <Seo title="Services" description="TODO: services page description (150-160 characters)." path="/services" />
      <PageHeader eyebrow="Services" title="What we offer" text="TODO: one line from management." />
      <Services />
    </>
  )
}