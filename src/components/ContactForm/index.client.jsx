'use client'

import { validateContact } from '@/lib/actions'
import { Button, Field, Fieldset, Input, Label, Textarea } from '@headlessui/react'
import Form from 'next/form'
import { useActionState } from 'react'
import { ImSpinner2 } from 'react-icons/im'

export default function ContactForm({ data }) {
  const [state, action, isPending] = useActionState(validateContact)

  return (
    <Form
      action={action}
      // className="col-start-2 grid place-items-center bg-primary-50 px-md py-lg *:col-span-full sm:col-start-4 sm:-col-end-4"
      className="col-start-2 -col-end-2 bg-primary-50 sm:col-start-3 sm:-col-end-3 md:col-start-2 md:-col-end-2"
    >
      <Fieldset className="relative grid gap-y-xs p-lg">
        {data.map(({ label, fieldType, placeholder, buttonAction }, id) => {
          const fieldName = label.toLowerCase()
          return (
            <Field key={id} className="grid gap-y-3xs">
              {fieldType !== 'Button' && (
                <Label className="font-display">
                  {label}{' '}
                  {state?.error && (
                    <span className="text-sm text-error-600">{state?.error[fieldName]}</span>
                  )}
                </Label>
              )}
              {fieldType === 'Button' ? (
                <Button
                  type="submit"
                  disabled={isPending}
                  className="my-xs grid w-full cursor-pointer place-content-center bg-accent-900 p-2xs font-display text-primary-50 uppercase transition-colors duration-150 hover:bg-accent-800 active:bg-accent-950 data-disabled:bg-accent-500"
                >
                  {isPending ? (
                    <span className="inline-flex animate-pulse items-center gap-3xs">
                      <ImSpinner2 className="animate-spin" /> Sending
                    </span>
                  ) : (
                    label
                  )}
                </Button>
              ) : fieldType === 'Textarea' ? (
                <Textarea
                  name={label.toLowerCase()}
                  invalid={state?.error && Boolean(state.error[fieldName])}
                  defaultValue={state && state[fieldName]}
                  className="min-h-40 w-full border border-accent-600 bg-primary-50 px-2xs py-3xs font-logo text-primary-800 placeholder:tracking-wide data-focus:outline-2 data-focus:outline-accent-700 data-invalid:border-2 not-data-focus:data-invalid:border-error-600"
                  placeholder={placeholder}
                />
              ) : (
                <Input
                  name={label.toLowerCase()}
                  invalid={state?.error && Boolean(state.error[fieldName])}
                  defaultValue={state && state[fieldName]}
                  className="w-full border border-accent-600 bg-primary-50 px-2xs py-3xs font-logo text-primary-800 placeholder:tracking-wide data-focus:outline-2 data-focus:outline-accent-700 data-invalid:border-2 not-data-focus:data-invalid:border-error-600"
                  placeholder={placeholder}
                />
              )}
            </Field>
          )
        })}
        <p className="absolute right-0 -bottom-8 left-0 text-center font-display tracking-tight text-accent-900">
          {state?.success}
        </p>
      </Fieldset>
    </Form>
  )
}
