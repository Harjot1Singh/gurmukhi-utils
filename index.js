const toUnicode = require( './lib/toUnicode' )
const toAscii = require( './lib/toAscii' )
const firstLetters = require( './lib/firstLetters' )
const toEnglish = require( './lib/toEnglish' )
const toShahmukhi = require( './lib/toShahmukhi' )
const toHindi = require( './lib/toHindi' )
const isGurmukhi = require( './lib/isGurmukhi' )
const stripAccents = require( './lib/stripAccents' )
const stripVishraams = require( './lib/stripVishraams' )
const stripEndings = require( './lib/stripEndings' )

module.exports = {
  toAscii,
  toUnicode,
  firstLetters,
  toEnglish,
  toShahmukhi,
  toHindi,
  isGurmukhi,
  stripAccents,
  stripVishraams,
  stripEndings,
}
