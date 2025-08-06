sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'departmentlistreport/test/integration/FirstJourney',
		'departmentlistreport/test/integration/pages/DEPARTMENTList',
		'departmentlistreport/test/integration/pages/DEPARTMENTObjectPage',
		'departmentlistreport/test/integration/pages/EMPLOYEEObjectPage'
    ],
    function(JourneyRunner, opaJourney, DEPARTMENTList, DEPARTMENTObjectPage, EMPLOYEEObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('departmentlistreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheDEPARTMENTList: DEPARTMENTList,
					onTheDEPARTMENTObjectPage: DEPARTMENTObjectPage,
					onTheEMPLOYEEObjectPage: EMPLOYEEObjectPage
                }
            },
            opaJourney.run
        );
    }
);