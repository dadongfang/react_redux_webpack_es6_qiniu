'use strict'

const SHOW_DOWNLOAD = 'SHOW_DOWNLOAD'
const SHOW_FILTER = {
  SHOW: 'SHOW',
  HIDE: 'HIDE'
}

function appDownload(show) {
  return { type: SHOW_DOWNLOAD, show }
}

export {
  SHOW_DOWNLOAD,
  SHOW_FILTER,
  appDownload
}
