var courseName = document.querySelector("#courseName");
var courseCategory= document.querySelector("#courseCategory");
var coursePrice = document.getElementById("coursePrice");
var courseDescription = document.querySelector("#courseDescription");
var courseCapacity = document.querySelector("#courseCapacity");
var addbtn = document.querySelector("#click");
var courses=[];
var inputs =document.querySelectorAll(".inputs");
addbtn.addEventListener("click",function(e){
    e.preventDefault();
    addcourse();
    clearinput();
    displayData();
})

function addcourse(){
    var course = {
        name:courseName.value,
        courseCategory:courseCategory.value,
        coursePrice:coursePrice.value,
        courseDescription:courseDescription.value,
        courseCapacity:courseCapacity.value,

    }
    courses.push(course);
    console.log(courses); 
}
function clearinput(){
    for(var i=0;i<inputs.length;i++)
    inputs[i].value="";
    
}
function displayData(){
    var result = "";
    for(var i=0;i<courses.length;i++){
        result +=`
        <tr>
        <td>${i}</td>
        <td>${courses[i].name}</td>
        <td>${courses[i].courseCategory}</td>
        <td>${courses[i].coursePrice}</td>
         <td>${courses[i].courseDescription}</td>
         <td>${courses[i].courseCapacity}</td>
         <td><botton class="btn btn-outline-info">update</botton></td>
         <td><botton class="btn btn-outline-danger " onclick="deletebottom(${i})">Delete</botton></td>
        </tr>
        `;
    }
    document.getElementById("data").innerHTML=result;
}
function deletebottom(id){
    courses.splice(id,1);
    displayData();

}

