import Editor from "./modules/editor"
import Features from "./modules/features"
import Hero from "./modules/hero"
import Pricing from "./modules/pricing"


const Page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Editor />
    </div>
  )
}

export default Page