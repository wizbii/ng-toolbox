/* global angular, describe, it, expect, beforeEach, inject */

import '../src'

describe('ng-toolbox has filters that', function () {
  let $filter

  beforeEach(function () {
    angular.mock.module('ng-toolbox')

    inject(function (_$filter_) {
      $filter = _$filter_
    })
  })

  describe('truncate strings and', function () {
    let truncate

    beforeEach(function () {
      truncate = $filter('truncate')
    })

    it('simply return non-string values', function () {
      expect(truncate(null)).toBe(null)
      expect(truncate([])).toEqual([])
      expect(truncate(123)).toBe(123)
      expect(truncate(true)).toBe(true)
      expect(truncate(false)).toBe(false)
    })

    it('doesn\'t alter a string if its length is inferior to maxLength', function () {
      expect(truncate('Hey guys, what\'s up?', 100)).toBe('Hey guys, what\'s up?')
    })

    it('is unable to truncate a string that has no spaces', function () {
      expect(truncate('Heyguys,what\'sup?', 2)).toBe('Heyguys,what\'sup?')
    })

    it('truncate strings without splitting words', function () {
      expect(truncate('Hey guys, what\'s up?', 14)).toBe('Hey guys,...')
    })

    it('doesn\'t necessarily return a value that\'s inferior to maxLength', function () {
      expect(truncate('Hey guys, what\'s up?', 14).length).not.toBe(14)
    })

    it('supports using a custom trailing ellipsis', function () {
      expect(truncate('Hey guys, what\'s up?', 14, ' (...)')).toBe('Hey (...)')
    })

    it('removes html tags', function () {
      expect(truncate('Wassup <em>my</em> nigga?', 12)).toBe('Wassup my...')
    })
  })
})
