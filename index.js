const mathsteps = require('mathsteps')


const equation = 'x^2 - x - 4 = 0'
const steps = mathsteps.simplifyExpression(equation)

steps.forEach(step => {
    console.log("before change: " + step.oldNode.toString())
	console.log("change: " + step.changeType)
	console.log("after change: " + step.newNode.toString())
	console.log("# of substeps: " + step.substeps.length)
})