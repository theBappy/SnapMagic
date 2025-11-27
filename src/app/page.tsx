import Editor from "./modules/editor"
import Features from "./modules/features"
import Footer from "./modules/footer"
import Hero from "./modules/hero"
import Pricing from "./modules/pricing"


const Page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Editor />
      <Footer />
    </div>
  )
}

export default Page