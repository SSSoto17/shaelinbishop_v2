import AuthorBio from './AuthorBio'
import Newsletter from './Newsletter'

export default function RenderContent({ content }) {
  return content.map((section, id) => {
    console.log(section)
    if (section.blockType === 'bio') return <AuthorBio key={id} {...section} />
    if (section.blockType === 'newsletter') return <Newsletter key={id} {...section} />
  })
}
