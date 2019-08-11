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
                "url": "/Dashboard",
                "icon": "dashboard"
            },
            
            {
                'rightName': "Open Issue",
                'url': "/unsolvedsolved",
                'icon': "bug_report"
            },

            {
                'rightName': "Closed Issue",
                'url': "/solved",
                'icon': "done_outline"
            },

            {
                'rightName': "User List",
                'url': "/list",
                'icon': "format_list_bulleted"

            },

            {
                'rightName': "Edit Users",
                'url': "/Userlist",
                'icon': "edit"
            },

            {
                "rightName": "Add Users",
                'url': "/userXlx",
                'icon': "group_add"
            },
           

        ]
    },

    TesterRight:{
        'rightId': "",
        'userRights': [
            {
                "rightName": "Dashboard",
                "url": "/testerDashboard",
                "icon": "dashboard"
            },
            {
                "rightName": "Reported Bug",
                "url": "/reportedissue",
                "icon": "assignment"
            },
            {
                'rightName': "Resolved Bug",
                'url': "/resolvedissue",
                 "icon": "assignment_turned_in"
            },

            {
                'rightName': "Create New Issue",
                'url': "/newissue",
                "icon": "add_circle_outline"

            },

            {
                'rightName': "Bug To be Disscused",
                'url': "/tbd",
                "icon":"report"
            },

          
           

        ]

    },
   
    DevloperRight:{
        'rightId': "",
        'userRights': [
            {
                "rightName": "Dashboard",
                "url": "/devloperDashboard",
                "icon": "dashboard"
            },
            {
                "rightName": "Assigned Bug",
                "url": "/issuelist",
                "icon": "assignment"
            },
            {
                "rightName": "Critical Bug",
                'url': "/pendingbug",
                'icon':"warning"
            },
            {
                'rightName': "Solved Bug",
                'url': "/solvedissue",
                "icon": "assignment_turned_in"

            },

            {
                'rightName': "Bug To be Disscused",
                'url': "/rtbd",
                "icon":"report"

            },

           

        ]

    }



}