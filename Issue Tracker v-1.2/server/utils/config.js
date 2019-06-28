var shortid = require('shortid');
module.exports = {
    userobject: 
    { 
    'userId': "AD"+shortid.generate(),
    'usertype': "admin",
    'username': "admin",
    'email': "admin@email",
    'password': "admin",
    'firsttym': true
    },

    AdminRight:{
        'rightId': "",
        'userRights': [
            {
                "rightName": "Dashboard",
                "url": "/Dashboard"
            },
            {
                'rightName': "Solved Issue",
                'url': "/solved"
            },

            {
                'rightName': "Unsolved Issue",
                'url': "/unsolvedsolved"
            },

            {
                'rightName': "Edit Users",
                'url': "/Userlist"
            },

            {
                "rightName": "Add Users",
                'url': "/userXlx"
            },
           

        ]
    },

    TesterRight:{
        'rightId': "",
        'userRights': [
            {
                "rightName": "Reported Bug",
                "url": "/reportedissue"
            },
            {
                'rightName': "Resolved Bug",
                'url': "/resolvedissue"
            },

            {
                'rightName': "Create New Issue",
                'url': "/newissue"
            },

            {
                'rightName': "Bug To be Disscused",
                'url': "/tbd"
            },

            {
                "rightName": "Reported Not a Bug",
                'url': "/nab"
            },
           

        ]

    },
   
    DevloperRight:{
        'rightId': "",
        'userRights': [
            {
                "rightName": "Assigned Bug",
                "url": "/issuelist"
            },
            {
                "rightName": "Critical Bug",
                'url': "/pendingbug"
            },
            {
                'rightName': "Resolved Bug",
                'url': "/solvedissue"
            },

            {
                'rightName': "Bug To be Disscused",
                'url': "/rtbd"
            },

            {
                'rightName': " Reported Not a Bug",
                'url': "/rnab"
            },

           
           

        ]

    }



}