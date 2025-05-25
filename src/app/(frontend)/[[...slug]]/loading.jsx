import { ImSpinner2 } from 'react-icons/im'

export default function Loading() {
  return (
    <main id="main" className="full-bleed place-content-center">
      <section className="col-span-full grid place-content-center py-xl">
        <h2 className="inline-flex animate-pulse items-center gap-md text-center font-display text-3xl font-bold duration-150">
          <ImSpinner2 className="animate-spin" />
        </h2>
      </section>
    </main>
  )
}
