import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Image from 'react-native-fast-image'

import { colors, layout, typography } from '../../styles'
import { UserType } from '../../types'

interface Props {
  user: UserType
}

export const User: FunctionComponent<Props> = ({ user }) => (
  <View style={styles.main}>
    <Image
      source={{
        uri: `https://api.adorable.io/avatar/${user.id}`
      }}
      style={styles.avatar}
    />
    <View style={styles.details}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.location}>
        {user.city}, {user.country}
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.backgroundLight,
    borderRadius: layout.icon * 2,
    height: layout.icon * 2,
    width: layout.icon * 2
  },
  details: {
    flex: 1,
    marginLeft: layout.margin
  },
  location: {
    ...typography.small,
    color: colors.foreground,
    marginTop: layout.padding
  },
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: layout.margin
  },
  name: {
    ...typography.title,
    color: colors.accent
  }
})
