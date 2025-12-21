import Container from '@/components/ui/Container'
import ContactForm from '@/components/forms/ContactForm'
import { SiteConfig } from '@/types'
import { siteConfig } from '@/lib/site-config'
import Location from '../ui/Location'

export default function Contact() {
  return (
    <section id="contact" className="py-20" style={{backgroundColor: siteConfig.colors.contact}}>
      <Container>
        <Location
          address="Av. Paulista, 1578"
          city="São Paulo - SP"
          latitude={-23.5614}
          longitude={-46.6558}
          placeName="MASP"
          mapStyle='roadmap'
          layout='overlay'
          />
          
          <div style={{margin:'2rem'}}></div>
        <ContactForm />
      </Container>
    </section>
  )
}