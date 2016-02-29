/* global angular */

import html from '../helpers/html.js'

function truncate () {
  return function (str, maxLength, ellipsis = '...') {
    if (!angular.isString(str)) return str

    const _str = str
    const map = html.map(str)
    str = html.strip(str).trim()

    if (str.length <= maxLength || !/ /g.test(str)) return _str

    const partials = str.split(' ')
    str = ''

    while (partials.length && (str + ' ' + partials[0] + ellipsis).length <= maxLength) {
      str = (str + ' ' + partials.shift()).trim() // trim in case str was empty
    }

    str = html.inject(str, map)
    return str + ellipsis
  }
}

export default truncate

