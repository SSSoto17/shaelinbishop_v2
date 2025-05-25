import { MdEdit, MdFolder, MdPerson, MdLogout } from 'react-icons/md'

const actions = [
  {
    label: 'Edit Page',
    action: '/admin/collections/pages',
    icon: <MdEdit size={16} />,
    target: true,
  },
  {
    label: 'Media Library',
    action: '/admin/collections/images',
    icon: <MdFolder size={16} />,
  },
  {
    label: 'Account',
    action: '/admin/account',
    icon: <MdPerson size={16} />,
  },
  {
    label: 'Logout',
    action: '/admin/logout',
    icon: <MdLogout size={16} />,
  },
]

export default actions
