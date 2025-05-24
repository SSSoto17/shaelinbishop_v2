import Accordion from './Accordion'
import Archive from './Archive'
import AuthorBio from './AuthorBio'
import ContactForm from './ContactForm'
import RenderHero from './Hero'
import MediaBlock from './MediaBlock'
import Newsletter from './Newsletter'

function RenderContent({ sections: content }) {
  return content.map((section, id) => {
    // console.log(section)
    if (section.blockType === 'bio') return <AuthorBio key={id} {...section} />
    if (section.blockType === 'archive') return <Archive key={id} {...section} />
    if (section.blockType === 'accordion') return <Accordion key={id} {...section} />
    if (section.blockType === 'form') return <ContactForm key={id} {...section} />
    if (section.blockType === 'mediaBlock') return <MediaBlock key={id} {...section} />
    if (section.blockType === 'newsletter') return <Newsletter key={id} {...section} />
  })
}

export { RenderContent as Content, RenderHero as Hero }
