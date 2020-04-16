import auth from '@react-native-firebase/auth'
import firestore, {
  FirebaseFirestoreTypes
} from '@react-native-firebase/firestore'
import { useEffect, useRef, useState } from 'react'

import { helpers, mitter } from '../lib'
import { RequestType } from '../types'

export const useRequests = (
  kind: 'offers' | 'requests',
  userId?: string,
  helpling?: boolean
) => {
  const unsubscribe = useRef<() => void>(() => {})

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState<RequestType[]>([])

  const onData = async ({ docs }: FirebaseFirestoreTypes.QuerySnapshot) => {
    await helpers.fetchUsers(docs)

    const items = docs.map((doc) => helpers.createRequest(doc))

    setItems(items)
    setLoading(false)
  }

  const onError = () => {
    setLoading(false)

    mitter.error('Something went wrong. Please try again later.')

    // TODO: log to sentry
  }

  useEffect(() => {
    const user = auth().currentUser

    if (!user) {
      throw new Error('User not found')
    }

    setLoading(true)

    if (helpling) {
      unsubscribe.current = firestore()
        .collection(kind)
        .where('helplingId', '==', userId)
        .orderBy('createdAt', 'desc')
        .onSnapshot(onData, onError)
    } else if (userId) {
      unsubscribe.current = firestore()
        .collection(kind)
        .where('userId', '==', userId)
        .orderBy('createdAt', 'desc')
        .onSnapshot(onData, onError)
    } else {
      unsubscribe.current = firestore()
        .collection(kind)
        .where('status', '==', 'pending')
        .orderBy('createdAt', 'desc')
        .onSnapshot(onData, onError)
    }
  }, [helpling, kind, userId])

  return {
    items,
    loading,
    unsubscribe: unsubscribe.current
  }
}
