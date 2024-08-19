const semver = require('semver')
const requiredVersion = '>=14.0.0 <16.0.0'

if (!semver.satisfies(process.version, requiredVersion)) {
  console.error(
    `Required Node.js version ${requiredVersion} not satisfied with current version ${process.version}.`,
  )
  process.exit(1)
}
