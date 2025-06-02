import { ImSpinner2 } from 'react-icons/im'

export default function Loading() {
  return (
    <main id="main">
      <section className="py-xl *:col-span-full">
        <h2 className="inline-flex animate-pulse place-content-center place-items-center gap-md text-center font-display text-3xl font-bold duration-150">
          <ImSpinner2 className="animate-spin" />
        </h2>
      </section>
    </main>
  )
}
