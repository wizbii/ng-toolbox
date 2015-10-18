/* global angular, describe, it, expect, beforeEach, inject */

import '../src/ng-toolbox'

describe('ng-toolbox has', function () {
  beforeEach(function () {
    angular.mock.module('ng-toolbox')
  })

  describe('a Loader class that', function () {
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
      loader.setLoading('pagination', false)
      expect(loader.isLoading()).toBe(true)
    })
  })
})
