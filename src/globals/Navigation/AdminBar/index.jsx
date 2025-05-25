import { checkAuth } from '@/lib/auth'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import actions from './data'

export default async function AdminBar({ id }) {
  const { isEnabled } = await draftMode()
  const user = await checkAuth()

  if (!user) return null

  return (
    <section className="full-bleed bg-primary-900 py-2xs font-display text-sm text-primary-50">
      <nav
        className={`grid grid-cols-[auto_1fr] items-center justify-items-end gap-lg justify-self-stretch`}
      >
        <DisplayUser {...user} target={isEnabled && `${actions[0].action}/${id}`} />
        <ul className="flex gap-md">
          {actions.map((action, index) => {
            return <AdminAction key={index} {...action} {...(action.target && { target: id })} />
          })}
        </ul>
      </nav>
    </section>
  )
}

import { MdCompassCalibration, MdRemoveRedEye } from 'react-icons/md'

function DisplayUser({ firstName, lastName, email, role, target }) {
  const fullName = firstName + ' ' + lastName
  return (
    <div className="flex items-center gap-2xs">
      <Link href="/admin" className="flex items-center gap-xs">
        <MdCompassCalibration size={20} />
        <p>
          {(firstName && fullName) || lastName || email} <span className="font-logo">|</span> {role}
        </p>
      </Link>
      {target && (
        <Link href={target} className="flex items-center gap-2xs">
          <p className="font-logo">|</p>
          <MdRemoveRedEye />
          <p>Preview Mode</p>
        </Link>
      )}
    </div>
  )
}

function AdminAction({ action, label, icon, target }) {
  return (
    <li className="relative flex items-center gap-3xs">
      <Link
        href={target ? `${action}/${target}` : action}
        target={target && '_blank'}
        className="after:absolute after:inset-0"
      >
        {label}
      </Link>
      {icon}
    </li>
  )
}
