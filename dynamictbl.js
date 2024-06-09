var form=document.querySelector('form');
var row1=document.querySelector('#data');
var check=document.getElementById('checkboxGroup')
var DeleteData=document.getElementById('Delete_data');
var students=[];
var Counter=1;
check_box_validation()
document.getElementById('insert_data').onclick = function (e) {
    //var col_length= $('td').length
    e.preventDefault()
    var studentid=document.getElementById('studentid').value.trim()
    var fname=document.getElementById('First_Name').value.trim()
    var lname =document.getElementById('Last_Name').value.trim()
    var contact=document.getElementById('Contact').value.trim()
    var Email=document.getElementById('Email').value.trim()
    var Pass=document.getElementById('Password').value.trim()
    var hobbies='';
    var errmsg='';
    var name=fname+" "+lname
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox)
    {
        hobbies+=checkbox.value+",";
    }
    )

    var gender ;
    document.querySelectorAll('input[type="radio"]:checked').forEach(function(radio)
    {
        gender=radio.value;
    }
    )
   // checkbox validation 
    check_box_validation()
    
   ///
    // document.querySelector('input[type="radio"]:checked').value;
    //var g=$('#Gender').value
    var d=document.getElementById('day').value.trim()
    var m=document.getElementById('month').value.trim()
    var y=document.getElementById('year').value.trim()
    var  dob=d+'-'+m+'-'+y
    if (!studentid)
        errmsg+="Enter student id.\n"
    if(!fname)
       errmsg+="Enter first name.\n"
    if(!lname)
       errmsg+="Enter last name.\n"
    if ((!contact)||contact.length!=10)
       errmsg+="Enter contact number.\n It must be 10 digits.\n"
    if(!Email)
       errmsg+="Enter email in format of @gmail.com.\n"
    if((!Pass) || Pass.length<8 )
       errmsg+="Enter password \n .It must be 8 character long.\n"
    if(!hobbies)
       errmsg+="Enter hobbies \n .at least one hobby.\n"
    if(!gender)
       errmsg+="Specify the gender.\n"
    if((!d)||(!m)||(!y))
       errmsg+="Enter the date of birth.\n"
    if(errmsg)
    {
     // alert(errmsg)
    }
    else
    {
      var data={
         rownum:Counter,
         studentid:studentid,
         name:name,
         contact:contact,
         Email:Email,
         hobbies:hobbies,
         gender:gender,
         dob:dob
      };
      students.push(data);
      localStorage.setItem('Students',JSON.stringify(students));
      document.getElementById('studentForm').reset();  
      //var i=Counter-1;
      var newRow = '<tr><td>' + Counter+ '</td><td>'+studentid+ '</td><td>' + name + '</td><td>' +contact + '</td><td>' + Email + '</td><td>'+ hobbies + '</td><td>' + gender+ '</td>'+'</td><td>' + dob+ '</td></tr>';
      document.getElementById('data').insertAdjacentHTML('beforeend', newRow);
      Counter++;
  daySelect.value='DD' 
  yearSelect.value='YYYY'
    }
}
const Student_data=JSON.parse(window.localStorage.getItem('Students'))||[];
for(var i=0;i<Student_data.length;i++){
var newRow = '<tr><td>' + Student_data[i].rownum + '</td><td>'+Student_data[i].studentid+ '</td><td>' + Student_data[i].name + '</td><td>' + Student_data[i].contact + '</td><td>' + Student_data[i].Email + '</td><td>'+ Student_data[i].hobbies + '</td><td>' + Student_data[i].gender+ '</td>'+'</td><td>' + Student_data[i].dob+ '</td></tr>';
document.getElementById('data').insertAdjacentHTML('beforeend', newRow);
}
var daySelect = document.getElementById('day');
 for (var i = 1; i <= 31; i++) {
     var option = document.createElement('option');
     option.value = i;
     option.text = i;
     daySelect.appendChild(option);
     daySelect.value='DD'
 }

 var monthSelect = document.getElementById('month');
 var months = ['',"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 for (var i = 0; i < months.length; i++) {
     var option = document.createElement('option');
     option.value = i + 1;
     option.text = months[i];
     monthSelect.appendChild(option);
     monthSelect.value='';
 }

 var yearSelect = document.getElementById('year');
 var currentYear = new Date().getFullYear();
 for (var i = currentYear; i >= 1900; i--) {
     var option = document.createElement('option');
     option.value = i;
     option.text = i;
     yearSelect.appendChild(option);
     yearSelect.value='YYYY'

 }

DeleteData.onclick = function (e){
   localStorage.clear();
   location.reload();
}


function check_box_validation(){
   var min = 1 //minumum number of boxes to be checked for this form-group
   if($('input[name="Hobbies"]:checked').length<min){
       $('input[name="Hobbies"]').prop('required',true);
   }
   else{ 
      $('input[name="Hobbies"]').prop('required',false);
   }
}