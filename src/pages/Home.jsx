import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import About from '../components/About'
import Services from '../components/Services'
import Registrations from '../components/Registrations'
import WhyChooseUs from '../components/WhyChooseUs'
import Steps from '../components/Steps'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  return (
    <>
      <Seo description="TODO: homepage description (150-160 characters)." path="/" />
      <Hero />
      <Intro />
      <About />
      <Services />
      <Registrations />
      <WhyChooseUs />
      <Steps />
      <ContactCTA />
    </>
  )
}