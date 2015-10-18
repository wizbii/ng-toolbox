export default function () {
  class Loader {
    constructor () {
      this.loading = {}
    }

    setLoading (prop, isLoading = false) {
      this.loading[prop] = isLoading
    }

    isLoading (prop) {
      if (prop == null) {
        for (let key in this.loading) {
          if (!this.loading.hasOwnProperty(key)) continue
          if (this.loading[key] === true) return true
        }

        return false
      }

      return this.loading[prop] === true
    }
  }

  return Loader
}
