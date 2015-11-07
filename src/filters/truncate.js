/* global angular */

function truncate () {
  return function (str, maxLength, ellipsis = '...') {
    if (!angular.isString(str) || str.length <= maxLength || str.indexOf(' ') === -1) {
      return str
    }

    let partials = str.split(' ')
    str = ''

    while (partials.length && (str + ' ' + partials[0] + ellipsis).length <= maxLength) {
      str = (str + ' ' + partials.shift()).trim()
    }

    return str + ellipsis
  }
}

export default truncate
