/* global angular, describe, it, expect, beforeEach, inject */

import '../src'

describe('ng-toolbox has', function () {
  beforeEach(function () {
    angular.mock.module('ng-toolbox')
  })

  describe('a Loader factory that', function () {
    let loader

    beforeEach(function () {
      inject(function (ngtbLoader) {
        loader = ngtbLoader()
      })
    })

    it('handles multiple loading states', function () {
      loader.setLoading('submission', true)
      loader.setLoading('pagination', true)

      expect(loader.isLoading('submission')).toBe(true)
      expect(loader.isLoading('pagination')).toBe(true)
    })

    describe('has a isLoading method that', function () {
      it('returns the loading state for a given prop name', function () {
        expect(loader.isLoading('whatever')).toBe(false)
        loader.setLoading('whatever', true)
        expect(loader.isLoading('whatever')).toBe(true)
      })

      it('returns true if one of its state is loading', function () {
        expect(loader.isLoading()).toBe(false)
        loader.setLoading('submission', true)
        loader.setLoading('pagination', false)
        expect(loader.isLoading()).toBe(true)
      })
    })

    describe('has a isntLoading method that', function () {
      it('returns false if a given state is loading', function () {
        expect(loader.isntLoading('whatever')).toBe(true)
        loader.setLoading('whatever', true)
        expect(loader.isntLoading('whatever')).toBe(false)
      })

      it('returns false if one of its state is loading', function () {
        expect(loader.isntLoading()).toBe(true)
        loader.setLoading('submission', true)
        loader.setLoading('pagination', false)
        expect(loader.isntLoading()).toBe(false)
      })
    })
  })
})
