'use server'

export async function validateNewsletter(pre, formData) {
  const data = {}
  const errorText = 'Please enter a valid email.'

  if (!formData) {
    data.error = errorText
    return data
  } else {
    data.email = formData.get('email')
    if (!data.email.includes('@')) {
      data.error = errorText
      return data
    }
  }

  return { success: 'Thanks for subscribing!' }
}

export async function validateContact(pre, formData) {
  const data = {}
  const error = {}

  if (!formData) {
    return { ...pre, ...data }
  }

  data.name = formData.get('name')

  if (!data.name) {
    error.name = 'Please enter your name.'
  }

  data.email = formData.get('email')
  if (!data.email || !data.email.includes('@')) {
    error.email = 'Please enter a valid email.'
  }

  data.message = formData.get('message')
  if (!data.message) {
    error.message = 'Please enter your message.'
  }

  if (error.name || error.email || error.message) {
    data.error = error

    return data
  } else {
    return { success: 'Your message is sent!' }
  }
}
