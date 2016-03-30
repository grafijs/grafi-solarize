;(function(){

import '../node_modules/grafi-formatter/src/formatter'
import 'solarize'

  var grafi = {}
  grafi.solarize = solarize

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())
