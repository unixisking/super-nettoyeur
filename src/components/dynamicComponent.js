import SbEditable from "storyblok-react"
import React from "react"

// StoryBlok Components
import Cta from "./cta"
import Teaser from "./teaser"
import Navbar from "./navbar"
import Button from "./button"
import Hero from "./hero"
import SecondaryCta from "./secondaryCta"
import Service from "./service"
import Grid from "./grid"
import Faq from "./faq"
import Slider from "./slider"
import Heading from "./heading"
import Feature from "./feature"
import FormDevis from "./FormDevis"
import ZonesSection from "./ZonesSection"
import Flag from "./Flag"
import Footer from "./Footer"
import Section, { Perk, Perks } from "./Section"
import Card from "./Card"
import Contact from "./Contact"
import MainHero from "./MainHero"
import Seo from "./seo"
import ThankYou from "./thankyou"
import WhyUs from "./WhyUs"
import Prestations, { Prestation } from "./Prestations"

const Components = {
  teaser: Teaser,
  cta: Cta,
  button: Button,
  navbar: Navbar,
  hero: Hero,
  secondaryCta: SecondaryCta,
  service: Service,
  grid: Grid,
  faq: Faq,
  slider: Slider,
  heading: Heading,
  feature: Feature,
  formDevis: FormDevis,
  zonesSection: ZonesSection,
  Flag: Flag,
  footer: Footer,
  section: Section,
  perk: Perk,
  perks: Perks,
  card: Card,
  contact: Contact,
  main_hero: MainHero,
  SEO: Seo,
  thankyou: ThankYou,
  whyUs: WhyUs,
  prestations: Prestations,
  prestation: Prestation,
  Zones: ZonesSection,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    )
  }
  console.log("undefined", blok.component)
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
