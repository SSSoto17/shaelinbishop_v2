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
      className="col-start-2 -col-end-1 row-span-2 row-start-3 grid grid-cols-6 gap-x-sm self-center px-2xs text-sm"
    >
      <p className="col-span-2 self-center justify-self-end font-display font-bold text-accent-900">
        {state?.success}
      </p>
      <Field className="relative col-span-2 grid">
        <Input
          name="email"
          placeholder="Enter email"
          invalid={Boolean(state?.error)}
          defaultValue={state?.email}
          className="border border-accent-600 bg-primary-50 px-2xs font-logo text-primary-800 placeholder:tracking-wide data-focus:outline-2 data-focus:outline-accent-700 data-invalid:border-2 not-data-focus:data-invalid:border-error-600"
        />
        {state?.error && (
          <p className="absolute top-14 flex items-center gap-3xs font-display tracking-tighter text-error-600">
            <MdError /> {state?.error}
          </p>
        )}
      </Field>
      <Button
        type="submit"
        disabled={isPending}
        className="col-span-2 grid cursor-pointer place-content-center bg-accent-900 p-2xs font-display text-primary-50 uppercase transition-colors duration-150 hover:bg-accent-800 active:bg-accent-950 data-disabled:bg-accent-500"
      >
        {isPending ? (
          <span className="inline-flex animate-pulse items-center gap-3xs">
            <ImSpinner2 className="animate-spin" /> Submitting
          </span>
        ) : (
          label
        )}
      </Button>
    </Form>
  )
}
