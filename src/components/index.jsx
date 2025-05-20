import Accordion from './Accordion'
import { FAQ } from './Accordion/index.client'
import AuthorBio from './AuthorBio'
import RenderHero from './Hero'
import MediaBlock from './MediaBlock'
import Newsletter from './Newsletter'

function RenderContent({ content }) {
  return content.map((section, id) => {
    console.log(section)
    if (section.blockType === 'bio') return <AuthorBio key={id} {...section} />
    if (section.blockType === 'accordion') return <FAQ key={id} {...section} />
    if (section.blockType === 'accordion') return <Accordion key={id} {...section} />
    if (section.blockType === 'mediaBlock') return <MediaBlock key={id} {...section} />
    if (section.blockType === 'newsletter') return <Newsletter key={id} {...section} />
  })
}

export { RenderContent as Content, RenderHero as Hero }
