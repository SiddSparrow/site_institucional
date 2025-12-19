import { getPosts } from '@/lib/sanity/queries'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Blog from '@/components/sections/Blog'
import { siteConfig } from '@/lib/site-config'

export default async function Home() {
  let posts = []
  
  if (siteConfig.features.blog) {
    try {
      posts = await getPosts()
    } catch (error) {
      console.error('Erro ao buscar posts:', error)
    }
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      
      {/* Use && para renderização condicional no JSX */}
      {siteConfig.features.blog && (
        <Blog 
          posts={posts} 
        />
      )}
      
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}