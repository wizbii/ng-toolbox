/* global angular */

function truncate () {
  return function (str, maxLength, ellipsis = '...') {
    if (!angular.isString(str)) return str

    str = str.replace(/<[^>]+>/g, '').trim()

    if (str.length <= maxLength || !/ /g.test(str)) return str

    const partials = str.split(' ')
    str = ''

    while (partials.length && (str + ' ' + partials[0] + ellipsis).length <= maxLength) {
      str = (str + ' ' + partials.shift()).trim() // trim in case str was empty
    }

    return str + ellipsis
  }
}

export default truncate
