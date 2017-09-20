({
    doInit: function(cmp, event, helper) {
        var action = cmp.get( "c.getOpenCasesDB");
        console.log( 'calling doInit');
        action.setCallback( this, function( response) {
            var state = response.getState();
            if ( cmp.isValid() && state == "SUCCESS") {
                console.log( 'getting cases');
                cmp.set( "v.cases", response.getReturnValue());
            }
        });
        $A.enqueueAction( action);
    }
})