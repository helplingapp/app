import { createStackNavigator } from '@react-navigation/stack'
import React, { FunctionComponent } from 'react'
import { useSafeArea } from 'react-native-safe-area-context'

import { Header } from '../../components/common'
import { layout } from '../../styles'
import { RequestType, ThreadType } from '../../types'
import { Offer } from '../offers/offer'
import { Request } from '../requests/request'
import { Messages } from './messages'
import { Thread } from './thread'

export type MessagesParamList = {
  Messages: undefined
  Offer: {
    offer: RequestType
  }
  Request: {
    request: RequestType
  }
  Thread: {
    thread: ThreadType
  }
}

const { Navigator, Screen } = createStackNavigator<MessagesParamList>()

export const MessagesNavigator: FunctionComponent = () => {
  const { top } = useSafeArea()

  const headerStyle = {
    height: layout.header + top
  }

  return (
    <Navigator>
      <Screen
        component={Messages}
        name="Messages"
        options={{
          header: (props) => <Header {...props} />,
          headerStyle,
          title: 'Messages'
        }}
      />
      <Screen
        component={Thread}
        name="Thread"
        options={{
          header: (props) => <Header {...props} />,
          headerStyle,
          title: 'Thread'
        }}
      />
      <Screen
        component={Request}
        name="Request"
        options={{
          header: (props) => <Header {...props} />,
          headerStyle,
          title: 'Request'
        }}
      />
      <Screen
        component={Offer}
        name="Offer"
        options={{
          header: (props) => <Header {...props} />,
          headerStyle,
          title: 'Offer'
        }}
      />
    </Navigator>
  )
}
