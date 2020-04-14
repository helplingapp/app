import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import { CommentType, RequestType } from '../types'
import { users } from './users'

class Helpers {
  createRequest(
    doc:
      | FirebaseFirestoreTypes.QueryDocumentSnapshot
      | FirebaseFirestoreTypes.DocumentSnapshot
  ): RequestType {
    const data = doc.data()

    if (!data) {
      throw new Error('No data found')
    }

    return {
      ...data,
      createdAt: data.createdAt.toDate().toISOString(),
      helpling: data.helplingId ?? users.get(data.helplingId),
      id: doc.id,
      updatedAt: data.updatedAt.toDate().toISOString(),
      user: users.get(data.userId)
    } as RequestType
  }

  createComment(
    doc:
      | FirebaseFirestoreTypes.QueryDocumentSnapshot
      | FirebaseFirestoreTypes.DocumentSnapshot
  ): CommentType {
    const data = doc.data()

    if (!data) {
      throw new Error('No data found')
    }

    return {
      ...data,
      createdAt: data.createdAt.toDate().toISOString(),
      id: doc.id,
      user: users.get(data.userId)
    } as CommentType
  }
}

export const helpers = new Helpers()