import { Source } from 'react-native-fast-image'

import { default as img_auth_apple } from './img/auth/apple.png'
import { default as img_auth_google } from './img/auth/google.png'
import { default as img_helpling } from './img/helpling.png'
import { default as img_hero_empty } from './img/hero/empty.png'
import { default as img_hero_error } from './img/hero/error.png'
import { default as img_hero_messages } from './img/hero/messages.png'
import { default as img_nav_active_messages } from './img/nav/active_messages.png'
import { default as img_nav_active_offers } from './img/nav/active_offers.png'
import { default as img_nav_active_profile } from './img/nav/active_profile.png'
import { default as img_nav_active_requests } from './img/nav/active_requests.png'
import { default as img_nav_messages } from './img/nav/messages.png'
import { default as img_nav_offers } from './img/nav/offers.png'
import { default as img_nav_profile } from './img/nav/profile.png'
import { default as img_nav_requests } from './img/nav/requests.png'
import { default as img_profile_about } from './img/profile/about.png'
import { default as img_profile_help } from './img/profile/help.png'
import { default as img_profile_offers } from './img/profile/offers.png'
import { default as img_profile_privacy } from './img/profile/privacy.png'
import { default as img_profile_requests } from './img/profile/requests.png'
import { default as img_profile_sign_out } from './img/profile/sign_out.png'
import { default as img_type_food } from './img/types/food.png'
import { default as img_type_invite } from './img/types/invite.png'
import { default as img_type_money } from './img/types/money.png'
import { default as img_type_physical } from './img/types/physical.png'
import { default as img_ui_about } from './img/ui/about.png'
import { default as img_ui_accept } from './img/ui/accept.png'
import { default as img_ui_add } from './img/ui/add.png'
import { default as img_ui_back } from './img/ui/back.png'
import { default as img_ui_check } from './img/ui/check.png'
import { default as img_ui_close } from './img/ui/close.png'
import { default as img_ui_complete } from './img/ui/complete.png'
import { default as img_ui_edit } from './img/ui/edit.png'
import { default as img_ui_error } from './img/ui/error.png'
import { default as img_ui_expand } from './img/ui/expand.png'
import { default as img_ui_link } from './img/ui/link.png'
import { default as img_ui_menu } from './img/ui/menu.png'
import { default as img_ui_messages } from './img/ui/messages.png'
import { default as img_ui_notification } from './img/ui/notification.png'
import { default as img_ui_offer } from './img/ui/offer.png'
import { default as img_ui_remove } from './img/ui/remove.png'
import { default as img_ui_request } from './img/ui/request.png'
import { default as img_ui_save } from './img/ui/save.png'
import { default as img_ui_search } from './img/ui/search.png'
import { default as img_ui_send } from './img/ui/send.png'
import { default as img_ui_share } from './img/ui/share.png'

export const img_nav: Record<string, Source> = {
  Messages: img_nav_messages,
  Offers: img_nav_offers,
  Profile: img_nav_profile,
  Requests: img_nav_requests
}

export const img_nav_active: Record<string, Source> = {
  Messages: img_nav_active_messages,
  Offers: img_nav_active_offers,
  Profile: img_nav_active_profile,
  Requests: img_nav_active_requests
}

export const img_types: Record<string, Source> = {
  food: img_type_food,
  invite: img_type_invite,
  money: img_type_money,
  physical: img_type_physical
}

export const img_profile: Record<string, Source> = {
  about: img_profile_about,
  help: img_profile_help,
  offers: img_profile_offers,
  privacy: img_profile_privacy,
  requests: img_profile_requests,
  signOut: img_profile_sign_out
}

export const img_hero: Record<string, Source> = {
  empty: img_hero_empty,
  error: img_hero_error,
  messages: img_hero_messages
}

export {
  img_helpling,
  img_auth_apple,
  img_auth_google,
  img_ui_about,
  img_ui_accept,
  img_ui_add,
  img_ui_back,
  img_ui_check,
  img_ui_close,
  img_ui_complete,
  img_ui_edit,
  img_ui_error,
  img_ui_expand,
  img_ui_link,
  img_ui_menu,
  img_ui_messages,
  img_ui_notification,
  img_ui_offer,
  img_ui_remove,
  img_ui_request,
  img_ui_save,
  img_ui_search,
  img_ui_send,
  img_ui_share
}
