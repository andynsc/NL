
var ampm = context.variableManager.getValue("now_ampm");
var lower_ampm = __changeCase(ampm,"LOWER")

logger.debug("am or pm:"+ lower_ampm);
context.variableManager.setValue("lower_ampm",lower_ampm);
