import { Button, Field, Fieldset, Input, Label, Textarea } from '@headlessui/react'
import Form from 'next/form'
import { RichText } from '../RichText'

export default function ContactForm({ info, formFields }) {
  return (
    <section className="full-bleed" id="Contact">
      <div className="span-1/2 grid grid-cols-subgrid px-lg py-2xl">
        <article className="col-span-full col-start-2">
          <RichText
            data={info}
            className="flow-space [&_a]:underline [&_a]:transition [&_a]:duration-150 [&_a]:ease-in [&_a]:hover:text-primary-600 [&_h2]:text-lg"
          />
        </article>
      </div>
      <article className="span-1/2 grid grid-cols-subgrid bg-accent-700 py-2xl">
        <Form action="/about" className="col-start-2 -col-end-2 bg-primary-50 p-md">
          <Fieldset className="grid gap-y-xs">
            {formFields.map(({ label, fieldType, placeholder, buttonAction }, id) => {
              return (
                <Field key={id} className="grid gap-y-3xs">
                  {fieldType !== 'Button' && <Label className="font-display">{label}</Label>}
                  {fieldType === 'Button' ? (
                    <Button className="my-xs grid w-full cursor-pointer place-content-center bg-accent-900 p-2xs font-display text-primary-50 uppercase transition-colors duration-150 hover:bg-accent-800 active:bg-accent-950">
                      {label}
                    </Button>
                  ) : fieldType === 'Textarea' ? (
                    <Textarea
                      name={label.toLowerCase()}
                      required
                      className="min-h-40 w-full border border-accent-600 bg-primary-50 px-2xs py-3xs text-primary-800 placeholder:tracking-wide data-focus:outline-2 data-focus:outline-accent-700"
                      placeholder={placeholder}
                    />
                  ) : (
                    <Input
                      name={label.toLowerCase()}
                      type={fieldType.toLowerCase()}
                      required
                      className="w-full max-w-80 border border-accent-600 bg-primary-50 px-2xs py-3xs text-primary-800 placeholder:tracking-wide data-focus:outline-2 data-focus:outline-accent-700"
                      placeholder={placeholder}
                    />
                  )}
                </Field>
              )
            })}
          </Fieldset>
        </Form>
      </article>
    </section>
  )
}
