const tsm = require('teamcity-service-messages')

tsm.testStarted({name: 'Example Test'})

tsm.message({text: 'Some info about test'})
tsm.testStdErr({name: 'Error motherfuckers', out: 'Error message motherfuckers'})

tsm.testFinished({name: 'Example Test'})
