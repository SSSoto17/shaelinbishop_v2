import { RichText } from '../RichText'

export default function TextColumns({ textColumns }) {
  // Need to add means of making the number of text columns dynamic
  return (
    <section className="gap-x-md-lg gap-y-sm py-md">
      {textColumns.map(({ textColumn }, id) => {
        return (
          <RichText
            data={textColumn}
            key={id}
            className="col-span-full transition duration-150 ease-in flow-space md:col-span-6 [&_a]:not-hover:underline [&_a]:hover:text-primary-700"
          />
        )
      })}
    </section>
  )
}
