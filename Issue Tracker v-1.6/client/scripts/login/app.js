const app = angular.module("login",['ngRoute','ngFileUpload','oitozero.ngSweetAlert','chart.js']);
app.directive('setFocus',function(){
    return {
       link:  function(scope, element, attrs){
         element.bind('click',function(){
                  //alert(element.attr('id'));
              document.querySelector('#' + attrs.setFocus).focus();
          })
       }
     }
})