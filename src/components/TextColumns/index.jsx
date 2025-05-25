import { RichText } from '../RichText'

export default function TextColumns({ textColumns }) {
  // Need to add means of making the number of text columns dynamic
  return (
    <section className="grid grid-cols-2 gap-x-md-lg py-md">
      {textColumns.map(({ textColumn }, id) => {
        return (
          <RichText
            data={textColumn}
            key={id}
            className="transition duration-150 ease-in flow-space [&_a]:not-hover:underline [&_a]:hover:text-primary-700"
          />
        )
      })}
    </section>
  )
}
