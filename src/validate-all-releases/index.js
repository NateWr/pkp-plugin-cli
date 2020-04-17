const shell = require('shelljs')

module.exports = args => {
  // Extract the plugins information from an xml file
  require('./extract-releases')(args)

  // Validate the MD5 checksum for all releases
  if (
    shell.exec(`bash ./src/validate-all-releases/check-md5.sh < ${args.output}`)
      .code !== 0
  ) {
    shell.echo('Error: validation of releases failed')
    shell.exit(1)
  }
}
