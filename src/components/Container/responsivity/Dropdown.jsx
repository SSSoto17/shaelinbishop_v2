'use client'
import { Field, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useField } from '@payloadcms/ui'
import { FaDesktop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'

export default function DevicesDropdown({ field: { name, options }, path }) {
  const { value, setValue } = useField({ path })
  const icons = {
    mobile: <FaMobileAlt />,
    tablet: <FaTabletAlt />,
    desktop: <FaDesktop />,
  }

  return (
    <Field
      style={{
        alignSelf: 'center',
      }}
    >
      <Listbox name={name} value={value} onChange={(e) => setValue(e)}>
        <ListboxButton
          style={{
            display: 'grid',
            placeContent: 'center',
            cursor: 'pointer',
            padding: '.25rem',
            aspectRatio: '1/1',
            height: '100%',
          }}
        >
          {icons[value]}
        </ListboxButton>
        <ListboxOptions
          anchor={{ to: 'bottom', gap: '6px' }}
          style={{
            display: 'flex',
            gap: '.5rem',
            paddingInline: '.5rem',
            paddingBlock: '.25rem',
            borderRadius: '4px',
            border: '1px solid #8f8f9d',
            backgroundColor: '#2b2a33',
          }}
        >
          {options.map((value, id) => {
            return (
              <ListboxOption
                value={value}
                key={id}
                style={{
                  cursor: 'pointer',
                }}
              >
                {icons[value]}
              </ListboxOption>
            )
          })}
        </ListboxOptions>
      </Listbox>
    </Field>
  )
}
