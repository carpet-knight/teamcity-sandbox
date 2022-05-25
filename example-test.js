const tsm = require('teamcity-service-messages')

tsm.blockOpened({name: 'Example test block'})

tsm.testSuiteStarted({name: 'Suite 1'})

tsm.testStarted({name: 'Test 1'})
tsm.testFinished({name: 'Test 1'})

tsm.testStarted({name: 'Test 2'})
tsm.testFailed({name: 'Test 2'})

tsm.testSuiteFinished({name: 'Suite 1'})

tsm.buildProblem({description: 'Some shit happened'})

tsm.blockClosed({name: 'Example test block'})
