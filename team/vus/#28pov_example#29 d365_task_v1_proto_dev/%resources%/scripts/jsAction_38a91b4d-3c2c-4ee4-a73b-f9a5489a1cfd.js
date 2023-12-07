
// Get variable value from VariableManager
var tim = context.variableManager.getValue("time_in_millis");

logger.debug("time_in_millis="+tim);

// Inject the computed value in a runtime variable
context.variableManager.setValue("uid",tim);
