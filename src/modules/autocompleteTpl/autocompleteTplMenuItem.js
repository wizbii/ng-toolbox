function autocompleteTplMenuItem () {
  return {
    require: '^autocompleteTpl',
    link (scope, element) {
      element.on('mousemove', function () {
        this.focus()
      })
    }
  }
}

export default autocompleteTplMenuItem
