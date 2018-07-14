var array =[];

document.addEventListener( "DOMContentLoaded", function() {
  var form =document.getElementsByTagName("form")[0];
  var buttonClasses = document.getElementsByClassName("debug")[0].classList;
  buttonClasses.remove("debug");
  var listOfHousehold = document.getElementsByClassName("add")[0].parentNode.appendChild(document.createElement("div"));
   //eventListener on click of add button
  document.getElementsByClassName("add")[0].addEventListener( "click", function( e ){
    		e.preventDefault();
    		buttonClasses.remove("debug");
    		var isSubmit = checkValidation();
			  if( isSubmit == true){
    		    var form =document.getElementsByTagName("form")[0];
   	        var data = convertToJson(form);
   	        //if(!array.includes(data)){ // not to include duplicate entries
            array.push(data);
            clearData();
            listOfHousehold.innerHTML = "</br></br>Growing list of Household members</br></br>" + array;
  	    }
        console.log(array);
   }, false);
	//Event listener on click of submit button
        form.addEventListener( "submit", function( e ) {
			      e.preventDefault();
			      if(array === [] ){
			            alert("Cannot submit untill you add any household details");
			            }else {
			                    buttonClasses.add("debug");
			                    var uniqueArray = removeDuplicates(array);
                          document.getElementsByClassName("debug")[0].innerHTML = "Submitted final data and modified list removing duplicates</br></br>" +uniqueArray;
     
			                    }
            alert("you can make changes after submission by adding the fields");
		     }, false);
});
            //function to remove duplicate entries in household members list
            //instead of the below method, we can use set to remove all duplicate entries as set adds only unique values.
            
            function removeDuplicates(array){
                let tempArray = array.filter(function(e, i, self) {
                             return i == self.indexOf(e);
                          });
                return tempArray;
             }

             // function to convert html form data to json format
      
             function convertToJson(form){
                    var data ={};
                    var i;
                    for(i=0;i<form.length; i++){
                            if(form.elements[i].name){
                                          data[form.elements[i].name] = form.elements[i].value;
                             }
                     }
  
                    return JSON.stringify(data);
               }

              //function to check validations on age and relationship fields.

              function checkValidation(){
                        var age = document.getElementsByName("age")[0].value;
                        var relation = document.getElementsByName("rel")[0].value;
                        isSubmit="true";
                        if(isNaN(age)|age <=0 |age ==""){
                                    alert("please enter valid age");
                                    isSubmit ="false";
                          }
                        if(relation ==""){
                            alert("Select relationship");
                            isSubmit ="false";
                         }
                        if(isSubmit =="false"){
                              return false;
                         }
                        if(isSubmit == "true"){
                            return true;
                         }
                  }

                  //function to clear data from input fields after add
                  function clearData(){
                          document.getElementsByName("age")[0].value = " ";
                          document.getElementsByName("rel")[0].value =" ";
                          document.getElementsByName("smoker")[0].checked = false;
                   }
  
