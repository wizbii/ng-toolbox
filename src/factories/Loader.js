function Loader () {
  return function () {
    let loading = {}

    function setLoading (prop, isLoading = false) {
      loading[prop] = isLoading
    }

    function isLoading (prop) {
      if (prop == null) {
        for (let key in loading) {
          if (!loading.hasOwnProperty(key)) continue
          if (loading[key] === true) return true
        }

        return false
      }

      return loading[prop] === true
    }

    function isntLoading (prop) {
      return !isLoading(prop)
    }

    return { setLoading, isLoading, isntLoading }
  }
}

export default Loader
