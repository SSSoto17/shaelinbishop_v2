import Accordion from './Accordion'
import Archive from './Archive'
import AuthorBio from './AuthorBio'
import Contact from './ContactForm'
import EditorPromo from './EditorPromo'
import Featured from './Featured'
import RenderHero from './Hero'
import ListBlock from './ListBlock'
import MediaBlock from './MediaBlock'
import MediaWithTitle from './MediaWithTitle'
import Newsletter from './Newsletter'
import TextColumns from './TextColumns'

function RenderContent({ sections: content }) {
  return content.map((section, id) => {
    // console.log(section)
    if (section.blockType === 'bio') return <AuthorBio key={id} {...section} />
    if (section.blockType === 'archive') return <Archive key={id} {...section} />
    if (section.blockType === 'accordion') return <Accordion key={id} {...section} />
    if (section.blockType === 'editorPromo') return <EditorPromo key={id} {...section} />
    if (section.blockType === 'form') return <Contact key={id} {...section} />
    if (section.blockType === 'featuredContent') return <Featured key={id} {...section} />
    if (section.blockType === 'listBlock') return <ListBlock key={id} {...section} />
    if (section.blockType === 'mediaBlock') return <MediaBlock key={id} {...section} />
    if (section.blockType === 'mediaWTitle') return <MediaWithTitle key={id} {...section} />
    if (section.blockType === 'newsletter') return <Newsletter key={id} {...section} />
    // if (section.blockType === 'promo') return <YouTubePromo key={id} {...section} />
    if (section.blockType === 'textColumns') return <TextColumns key={id} {...section} />
  })
}

export { RenderContent as Content, RenderHero as Hero }
