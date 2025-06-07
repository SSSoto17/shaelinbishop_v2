export default function Container({ as }) {
  if (as === 'section') return <section></section>

  if (as === 'article') return <article></article>

  return <div></div>
}
