var jsCP = context.variableManager.getValue("CurrentPrice");
if (jsCP==null) {
        logger.debug("Variable 'CurrentPrice' not found");
}
else
{
        logger.debug("Variable 'CurrentPrice' found, value is: " + jsCP);
}

var jsRT = context.variableManager.getValue("RunningTotal");
if (jsRT==null) {
       logger.debug("Variable 'RunningTotal' not found, setting value to 0");
       jsRT=0;
}
else
{
       logger.debug("Variable 'RunningTotal' found, value is:" + jsRT);
}

var jsTheTotalSoFar = demo_add_func(jsCP,jsRT);

logger.debug("the total is this: "+jsTheTotalSoFar);

context.variableManager.setValue("NeoloadTotal",jsTheTotalSoFar);