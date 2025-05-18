// import AuthorBio from './AuthorBio/RenderAuthorBio'
// import Newsletter from './Newsletter/RenderNewsletter'

export default function RenderContent({ content }) {
  return content.map((section, id) => {
    console.log(section)
    return null
    // if (section.blockType === 'bio') return <AuthorBio key={id} {...section} />
    // if (section.blockType === 'newsletter') return <Newsletter key={id} {...section} />
  })
}
