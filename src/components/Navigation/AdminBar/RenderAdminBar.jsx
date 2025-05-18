import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'

import Link from 'next/link'
import { MdCompassCalibration, MdEdit, MdFolder, MdPerson, MdLogout } from 'react-icons/md'

export default async function RenderAdminBar({ id }) {
  const headers = await getHeaders()
  const payload = await getPayload({ config })

  const { user } = await payload.auth({ headers })

  if (!user) return null

  const actions = [
    {
      label: 'Edit Page',
      action: `/admin/collections/pages/${id}`,
      icon: 'edit',
    },
    {
      label: 'Media Library',
      action: '/admin/collections/media',
      icon: 'media',
    },
    {
      label: 'Account',
      action: '/admin/account',
      icon: 'account',
    },
    {
      label: 'Logout',
      action: '/admin/logout',
      icon: 'logout',
    },
  ]

  return (
    <section className="full-bleed bg-neutral-900 py-2xs font-accent text-sm text-neutral-50">
      <nav className="grid grid-cols-[auto_1fr] items-center justify-items-end gap-lg justify-self-stretch">
        <DisplayUser {...user} />
        <ul className="flex gap-md">
          {actions.map((action, id) => {
            return <AdminAction key={id} {...action} />
          })}
        </ul>
      </nav>
    </section>
  )
}

function DisplayUser({ firstName, lastName, email, role }) {
  return (
    <Link href="/admin" className="flex items-center gap-xs">
      <MdCompassCalibration size={20} />
      <p>
        {`${firstName} ${lastName}` || email} <span className="font-logo">|</span> {role}
      </p>
    </Link>
  )
}

function AdminAction({ action, label, icon }) {
  const icons = {
    edit: <MdEdit size={16} />,
    media: <MdFolder size={16} />,
    account: <MdPerson size={16} />,
    logout: <MdLogout size={16} />,
  }
  return (
    <li className="relative flex items-center gap-3xs">
      <Link href={action} className="after:absolute after:inset-0">
        {label}
      </Link>
      {icons[icon]}
    </li>
  )
}
