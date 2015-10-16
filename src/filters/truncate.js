/* global angular */

export default function truncate () {
  return function (str, maxLength, ellipsis = '...') {
    if (!angular.isString(str) || str.length <= maxLength) {
      return str
    }

    let partials = str.split(' ')
    str = ''

    while (partials.length && (str + partials[0].length + ellipsis.length) <= maxLength) {
      str += partials.shift()
    }

    return str + ellipsis
  }
}
