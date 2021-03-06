import moment from 'moment'
import React, { FunctionComponent } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { colors, layout, typography } from '../../styles'
import { MessageType, UserType } from '../../types'
import { Avatar } from '../common'

interface Props {
  message: MessageType
  user?: UserType
}

export const Message: FunctionComponent<Props> = ({ message, user }) => {
  const mine = user?.id === message.user.id

  const time = moment(message.createdAt)
  const differenceInDays = moment().diff(time, 'days')
  const differenceInHours = moment().diff(time, 'hours')

  return (
    <View style={styles.main}>
      {!mine && (
        <Avatar seed={message.user.id} size="large" style={styles.avatar} />
      )}
      <View style={[styles.message, mine && styles.right]}>
        <View style={styles.body}>
          <Text style={styles.bodyText}>{message.body}</Text>
        </View>
        <Text style={styles.time}>
          {moment(message.createdAt).format(
            differenceInDays >= 7
              ? 'MMM D LT'
              : differenceInHours >= 24
              ? 'ddd LT'
              : 'LT'
          )}
        </Text>
      </View>
    </View>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  avatar: {
    marginRight: layout.margin
  },
  body: {
    backgroundColor: colors.backgroundLight,
    borderRadius: layout.radius * 5,
    maxWidth: width * 0.7,
    paddingHorizontal: layout.padding * layout.lineHeight,
    paddingVertical: layout.padding
  },
  bodyText: {
    ...typography.paragraph,
    color: colors.foreground
  },
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: layout.margin,
    paddingVertical: layout.padding
  },
  message: {
    alignItems: 'flex-start'
  },
  right: {
    alignItems: 'flex-end',
    flex: 1
  },
  time: {
    ...typography.small,
    color: colors.foregroundDark,
    marginTop: layout.padding
  }
})
