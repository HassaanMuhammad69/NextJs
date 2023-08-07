import React from 'react'
import { getUserById } from '@/lib/prisma/users'
import User from './user'

const page = async ({params}) => {
    const {user} = await getUserById(params.userId)
  return (
    <User user={user}/>
  )
}

export default page