import messaging from '@react-native-firebase/messaging'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { LayoutAnimation, StyleSheet, Text, View } from 'react-native'
import Image from 'react-native-fast-image'
import { useSafeArea } from 'react-native-safe-area-context'

import { img_ui_close, img_ui_notification } from '../../assets'
import { mitter, nav } from '../../lib'
import { colors, layout, typography } from '../../styles'
import { NotificationType } from '../../types'
import { Touchable } from './touchable'

export const Notification: FunctionComponent = () => {
  const { top } = useSafeArea()

  const [notification, setNotification] = useState<NotificationType | null>(
    null
  )
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeout: number

    mitter.onError((notification) => {
      if (timeout) {
        clearTimeout(timeout)
      }

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

      setVisible(true)
      setNotification(notification)

      timeout = setTimeout(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

        setVisible(false)

        setTimeout(() => setNotification(null), 300)
      }, 5000)
    })

    const unsubscribe = messaging().onMessage((message) => {
      if (message.notification) {
        const { body, title } = message.notification

        if (body && title) {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

          setVisible(true)
          setNotification({
            body,
            deeplink: message?.data?.deeplink,
            title
          })
        }
      }
    })

    return () => unsubscribe()
  }, [])

  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    if (notification?.deeplink) {
      nav.handleDeepLink(notification?.deeplink)
    }

    setVisible(false)

    setTimeout(() => setNotification(null), 300)
  }

  const Details = notification?.deeplink ? Touchable : View

  return (
    <View
      style={[
        styles.main,
        {
          paddingTop: top + layout.margin
        },
        visible ? styles.visible : styles.hidden
      ]}>
      <Image source={img_ui_notification} style={styles.icon} />
      <Details onPress={onPress} style={styles.details}>
        <Text style={styles.title}>{notification?.title}</Text>
        <Text style={styles.body}>{notification?.body}</Text>
      </Details>
      <Touchable onPress={onPress}>
        <Image source={img_ui_close} style={styles.icon} />
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    ...typography.paragraph,
    color: colors.foreground,
    marginTop: layout.padding / 2
  },
  details: {
    flex: 1
  },
  hidden: {
    bottom: '100%'
  },
  icon: {
    height: layout.icon,
    margin: layout.margin,
    width: layout.icon
  },
  main: {
    alignItems: 'center',
    backgroundColor: colors.state.message,
    borderBottomColor: colors.state.success,
    flexDirection: 'row',
    paddingVertical: layout.margin,
    position: 'absolute',
    width: '100%'
  },
  title: {
    ...typography.subtitle,
    color: colors.foreground
  },
  visible: {
    top: 0
  }
})
