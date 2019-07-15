app.controller('DevChart',function($scope,dev_fact){
    var manupulatedData = {
        // reportedBug: 0, //open+solved+tbd+nab
        // solvedBug: 0, // same as closed
        criticalBug: 0, // find it
        // ********************
        open: 0,
        solved: 0,
        tbd: 0,
        nab: 0,
        Reopen: 0,
        closed: 0, // bugStatus : closed
        criticalBugList: []
    }


    $scope.data = ()=>{
        var record = JSON.parse(localStorage.record);
  
    let promise = dev_fact.getIssue({'assignTo': record.username});
    promise.then(data=>{
       
        
        for(value of data.data.record){
           
            if(value.type == "critical" && value.bugSatus != 'closed'){
                manupulatedData.criticalBug += 1; 
                manupulatedData.criticalBugList.push(value);
            }
            if(value.bugSatus){
            manupulatedData[value.bugSatus] += 1;
            }
            printData();
        }
        console.log(manupulatedData);
        }
       ,error=>{
         console.log(error);
    })
  
    }
  
    function printData(){
        $scope.unsolved = manupulatedData.open +manupulatedData.Reopen + manupulatedData.solved + manupulatedData.tbd + manupulatedData.nab;
        $scope.solved = manupulatedData.closed;
        $scope.critical = manupulatedData.criticalBug;
        $scope.tbd = manupulatedData.tbd + manupulatedData.nab;
        $scope.Issues = manupulatedData.criticalBugList;

        $scope.toggle = (issue)=>{
            console.log("clicked");
            if(issue.expanded)issue.expanded = false
            else issue.expanded = true
          }
          $scope.reload = ()=>{
            $window.location.reload();
          }
        

        var AllbugPie = {
            // "series": ["SeriesA"],
            "data": [[manupulatedData.open,manupulatedData.closed,manupulatedData.tbd,manupulatedData.nab,manupulatedData.Reopen]],
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

        $scope.allpie = AllbugPie;


    }

});