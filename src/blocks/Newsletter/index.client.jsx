'use client'

import { Button, Field, Input } from '@headlessui/react'
import Form from 'next/form'
import { useActionState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { MdError } from 'react-icons/md'
import { validateNewsletter } from '../../lib/actions'

export default function ActionForm({ label }) {
  const [state, action, isPending] = useActionState(validateNewsletter)

  return (
    <Form
      action={action}
      className="-col-end-1 grid grid-cols-6 gap-x-2xs gap-y-xs self-center text-sm md:col-start-2 md:row-span-2 md:row-start-3 md:px-2xs lg:gap-x-sm"
    >
      <Field className="relative col-span-4 grid lg:col-span-2">
        <Input
          name="email"
          placeholder="Enter email"
          invalid={Boolean(state?.error)}
          defaultValue={state?.email}
          className="w-full border border-accent-600 bg-primary-50 px-2xs font-logo text-primary-800 placeholder:tracking-wide data-focus:outline-2 data-focus:outline-accent-700 data-invalid:border-2 not-data-focus:data-invalid:border-error-600"
        />
        {state?.error && (
          <p className="absolute top-12 -left-6 flex cursor-default items-center gap-3xs font-display tracking-tighter text-nowrap text-error-600 sm:top-14">
            <MdError /> {state?.error}
          </p>
        )}
      </Field>
      <Button
        type="submit"
        disabled={isPending}
        className="col-span-2 grid h-full cursor-pointer place-content-center bg-accent-900 p-2xs font-display text-xs text-primary-50 uppercase transition-colors duration-150 hover:bg-accent-800 active:bg-accent-950 data-disabled:bg-accent-500 sm:text-sm"
      >
        {isPending ? (
          <span className="inline-flex animate-pulse items-center gap-3xs">
            <ImSpinner2 className="animate-spin text-sm" />{' '}
            <span className="hidden md:inline">Submitting</span>
          </span>
        ) : (
          label
        )}
      </Button>
      <p className="col-span-full self-center font-display font-bold text-accent-900 lg:-order-1 lg:col-span-2 lg:justify-self-end">
        {state?.success}
      </p>
    </Form>
  )
}
