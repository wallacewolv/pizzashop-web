import { api } from '../lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  // await new Promise((_, reject) => {
  //   setTimeout(reject, 1000)
  // })

  await api.put('/profile', { name, description })
}
