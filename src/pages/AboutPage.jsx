import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Steps from '../components/Steps'

export default function AboutPage() {
  return (
    <>
      <Seo title="About Us" description="TODO: about page description (150-160 characters)." path="/about" />
      <PageHeader eyebrow="About Us" title="Who we are" />
      <About />
      <Steps />
    </>
  )
}