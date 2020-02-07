const path = require('path')
const sassTrue = require('sass-true')
const glob = require('glob')

describe('Sass', () => {
  // Find all of the Sass files that end in `*.spec.scss` in any directory in this project.
  // path.resolve is used because True's required absolute paths to test files.
  const sassTestFiles = glob.sync(path.resolve(process.cwd(), 'tests/**/*.spec.scss'))

  // Requires describe and it methods provided
  sassTestFiles.forEach(file =>
    sassTrue.runSass({ file }, { describe, it })
  )
})
