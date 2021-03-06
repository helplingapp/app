import { Source } from 'react-native-fast-image'

// components

export type PickerItemType = {
  label: string
  value: string
}

export type NotificationType = {
  body: string
  deeplink?: string
  title: string
}

export type MenuItemType = {
  icon: Source
  label: string
  link?: boolean
  loading?: boolean

  onPress: () => void
}

export type KindPluralType = 'offers' | 'requests'
export type KindType = 'offer' | 'request'

// models

export type UserType = {
  id: string
  city: string
  country: string
  name: string
}

export type RequestType = {
  id: string
  city: string
  country: string
  description: string
  helpling?: UserType
  status: RequestStatusType
  threadId?: string
  type: RequestTypeType
  user: UserType
  createdAt: string
  updatedAt: string
}

export type RequestStatusType = 'pending' | 'accepted' | 'completed'

export type RequestTypeType = 'food' | 'invite' | 'money' | 'physical'

export type CommentType = {
  id: string
  body: string
  user: UserType
  createdAt: string
}

export type ThreadType = {
  id: string
  itemId: string
  itemType: KindType
  last: string
  users: UserType[]
  createdAt: string
  updatedAt: string
}

export type MessageType = {
  id: string
  body: string
  user: UserType
  createdAt: string
}

// input

export type RequestInputType = {
  city: string
  country: string
  description: string
  type: RequestTypeType
}
