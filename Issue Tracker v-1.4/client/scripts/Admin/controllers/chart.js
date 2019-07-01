app.controller("chart",function($scope){
    var json = {
        "series": ["SeriesA"],
        "data": [["90", "99", "80", "91", "76"]],
        "labels": ["01", "02", "03", "04", "05"],
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
  $scope.ocw = json;


})