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
  })

  describe('has a Loader class that', function () {
    let loader

    beforeEach(function () {
      inject(function (Loader) {
        loader = new Loader()
      })
    })

    it('handles multiple loading states', function () {
      loader.setLoading('submission', true)
      loader.setLoading('pagination', true)

      expect(loader.isLoading('submission')).toBe(true)
      expect(loader.isLoading('pagination')).toBe(true)
    })

    it('has a isLoading method that returns the loading state for a given prop name', function () {
      expect(loader.isLoading('whatever')).toBe(false)
      loader.setLoading('whatever', true)
      expect(loader.isLoading('whatever')).toBe(true)
    })

    it('has a isLoading method that returns true if one of its state is loading', function () {
      expect(loader.isLoading()).toBe(false)
      loader.setLoading('submission', true)
      expect(loader.isLoading()).toBe(true)
    })
  })
})
