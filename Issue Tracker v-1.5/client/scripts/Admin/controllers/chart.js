/*
    Total Bugs In Each Project

2. Crtical Bugs

 
3. Solved Bugs

        
 Pie Chart
    
*/


app.controller("chart",function($scope,$window,fact){

    

    var manupulatedDATA = {
         closed: 0,
         open: 0,
         tbd: 0,
         nab: 0,
         Reopen: 0,
         critical: 0,
         projectname: [],
         crticalBUGS: [],
    }


    $scope.data = ()=>{
        let promise = fact.getIssue();
        promise.then(data=>{
            console.log(data.data.data);
            for(let value of data.data.data){
                // let bug =;
                manupulatedDATA[ "" + value.bugSatus] +=1;
                
                
            let index = manupulatedDATA.projectname.findIndex(obj=>obj.projectName == value.projectName);
            
               if(index<0){
                manupulatedDATA.projectname.push({projectName: value.projectName,open: 0,open_critical: 0 ,closed: 0}); 
                 index = manupulatedDATA.projectname.length - 1;
               }

               if(value.type == 'critical' && value.bugSatus != 'closed' ){
                manupulatedDATA['critical'] +=1;
                 manupulatedDATA.projectname[index].open_critical +=1

            }

               if(value.bugSatus != 'closed'){
                     manupulatedDATA.projectname[index].open +=1
                }else{
                    manupulatedDATA.projectname[index].closed +=1  
                }

            // ****************Calculating points****************************

            // var TesterIndex = manupulatedDATA.topEmployes.findIndex(obj=>obj.username == value.name);
            // var DevIndex = manupulatedDATA.topEmployes.findIndex(obj=>obj.username == value.assignTo);

            // if(TesterIndex<0){
            //     manupulatedDATA.topEmployes.push({username: value.name,pts: 0}); 
            //     TesterIndex = manupulatedDATA.topEmployes.length - 1;
            // }
            // if(DevIndex<0){
            //     manupulatedDATA.topEmployes.push({username: value.assignTo,pts: 0}); 
            //     DevIndex = manupulatedDATA.topEmployes.length - 1;
            // }

            // if(value.bugSatus == 'open'){
            //   manupulatedDATA.topEmployes[TesterIndex].pts +=1;
            // }else{
            //     manupulatedDATA.topEmployes[TesterIndex].pts +=1;
            //     manupulatedDATA.topEmployes[DevIndex].pts +=1;
            // }
               if(value.type == "critical" && value.bugSatus != "closed" ){
                   manupulatedDATA.crticalBUGS.push(value);
               }

            }


         $scope.unsolved = manupulatedDATA.open + manupulatedDATA.tbd + manupulatedDATA.nab + manupulatedDATA.Reopen;
         $scope.critical = manupulatedDATA.critical; 
         $scope.activeProj = manupulatedDATA.projectname.length;
         calculatingGraph();   // like call back fn;
           
           },err=>{
               console.log(err);
           }


        )}


        let promise = fact.userlist();
        promise.then(data=>{
            // console.log(data.data.record.length);
            $scope.emp = data.data.record.length;
        },err=>{
            console.log(err);
        })

     
        console.log(manupulatedDATA);

   

        function calculatingGraph(){
           
            $scope.Issues = manupulatedDATA.crticalBUGS;
  
    var Totalbugs = {
        "series": ["SeriesA"],
        "data": [[]],
        "labels": [],
        "colours": [{ // default
            backgroundColor: "#F8D3E0",
            pointBackgroundColor: "#F8D3E0",
            pointHoverBackgroundColor: "#F8D3E0",
            borderColor: "#F8D3E0",
            pointBorderColor: '#F8D3E0',
            pointHoverBorderColor: "#F8D3E0"
        }],
        "options":{
            legend: {
                labels: {
                     fontColor: '#F8D3E0'
                    }
                 },
        //    title: {
        //        display: true,
        //        fontColor: '#F8D3E0',
        //        text: 'Custom Chart Title'
        //    }     ,
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true,
                       fontColor: '#F8D3E0'
                   },
               }],
             xAxes: [{
                   ticks: {
                       fontColor: '#F8D3E0'
                   },
               }]
           } 
        }
      };

      var criticalBug = {
        "series": ["SeriesA"],
        "data": [[]],
        "labels": [],
        "colours": [{ // default
            backgroundColor: "#F8FBF8",
            pointBackgroundColor: "#FD9912",
            pointHoverBackgroundColor: "#FD9912",
            borderColor: "#FD9912",
            pointBorderColor: '#FD9912',
            pointHoverBorderColor: "#FD9912"
        }],
        "options":{
            legend: {
                labels: {
                     fontColor: '#F8FBF8'
                    }
                 },
        //    title: {
        //        display: true,
        //        fontColor: '#F8D3E0',
        //        text: 'Custom Chart Title'
        //    }     ,
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true,
                       fontColor: '#F8FBF8'
                   },
               }],
             xAxes: [{
                   ticks: {
                       fontColor: '#F8FBF8'
                   },
               }]
           } 
        }
    }

    var solvedBug = {
        "series": ["SeriesA"],
        "data": [[]],
        "labels": [],
        "colours": [{ // default
            // backgroundColor: "#F8D3E0",
            pointBackgroundColor: "#F8D3E0",
            pointHoverBackgroundColor: "#F8D3E0",
            borderColor: "#F8D3E0",
            pointBorderColor: '#F8D3E0',
            pointHoverBorderColor: "#F8D3E0"
        }],
        "options":{
            legend: {
                labels: {
                     fontColor: '#F8D3E0'
                    }
                 },
        //    title: {
        //        display: true,
        //        fontColor: '#F8D3E0',
        //        text: 'Custom Chart Title'
        //    }     ,
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true,
                       fontColor: '#F8D3E0'
                   },
               }],
             xAxes: [{
                   ticks: {
                       fontColor: '#F8D3E0'
                   },
               }]
           } 
        }
    }

    var AllbugPie = {
        // "series": ["SeriesA"],
        "data": [[manupulatedDATA.open,manupulatedDATA.closed,manupulatedDATA.tbd,manupulatedDATA.nab,manupulatedDATA.Reopen]],
        "labels": ["open","closed","tbd","nab","Reopen"],
        "colours": [
            // "#E73F3B","#4DA751","#FC9107","#FC940C"
        ],
        "datasetOverride":[
            {
                backgroundColor: ["#E73F3B","#4DA751","#FF6384","#808080","#87ceeb"],
                pointBackgroundColor: ["#E73F3B","#4DA751","#FF6384","#808080","#87ceeb"],
                pointHoverBackgroundColor: ["#E73F3B","#4DA751","#FF6384","#808080","#87ceeb"],
                borderColor: ["#E73F3B","#4DA751","#FF6384","#808080","#87ceeb"],
                pointBorderColor: ["#E73F3B","#4DA751","#FF6384","#808080","#87ceeb"],
                pointHoverBorderColor: ["#E73F3B","#4DA751","#FF6384","#808080","#87ceeb"]

            }
        ],
        "options":{
            legend: {
                position:'right',
                labels: {
                     fontColor: '#F6FCFD'
                    }
                 },
                 tooltips:{
                    enabled:true
                  },
           title: {
               display: true,
               fontColor: '#F6FCFD',
               text: 'All Bugs'
           }     ,
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true,
                       fontColor: '#F6FCFD'
                   },
               }],
             xAxes: [{
                   ticks: {
                       fontColor: '#F6FCFD'
                   },
               }]
           } 
        }
    }

    

    
      for(let value of manupulatedDATA.projectname){
        // json.labels = value.projectName;
        Totalbugs.labels.push(value.projectName);
        Totalbugs.data[0].push(value.open);
        criticalBug.labels.push(value.projectName);
        criticalBug.data[0].push(value.open_critical);
        solvedBug.labels.push(value.projectName);
        solvedBug.data[0].push(value.closed);

       }

    //    for(let value of manupulatedDATA.)
   $scope.ocw = Totalbugs;
   $scope.crtical = criticalBug;
   $scope.Solvedbug = solvedBug;
   $scope.allpie = AllbugPie;
    }

$scope.expand = (issue)=>{
//  console.log(issue.rightId);
 if(issue.expanded)issue.expanded = false;
else issue.expanded = true;

// console.log(manupulatedDATA.crticalBUGS.find(obj=>obj.rightId == issue.rightId));
var obj = manupulatedDATA.crticalBUGS.find(obj=>obj.rightId == issue.rightId);
$scope.Projectname = obj.projectName;
$scope.desc = obj.description;
$scope.Assinedto = obj.assignTo;
$scope.Assinedby = obj.name;
}
  
$scope.toggle = (issue)=>{
    console.log("clicked");
    if(issue.expanded)issue.expanded = false
    else issue.expanded = true
  }
  $scope.reload = ()=>{
    $window.location.reload();
  }
})