'use strict'

import { SHOW_DOWNLOAD, SHOW_FILTER } from '../actions/appDownload'
const { SHOW } = SHOW_FILTER

function appDownload(state = SHOW, action) {
  switch(action.type) {
    case SHOW_DOWNLOAD:
      return action.show
    default:
      return state
  }
}

export default appDownload
