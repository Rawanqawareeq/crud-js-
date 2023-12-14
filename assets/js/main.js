var courseName = document.querySelector("#courseName");
var courseCategory= document.querySelector("#courseCategory");
var coursePrice = document.getElementById("coursePrice");
var courseDescription = document.querySelector("#courseDescription");
var courseCapacity = document.querySelector("#courseCapacity");
var addbtn = document.querySelector("#click");
var search=document.querySelector("#search");
var nameerror=document.querySelector(".nameerror");
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
        name:courseName.value.toLowerCase(),
        courseCategory:courseCategory.value,
        coursePrice:coursePrice.value,
        courseDescription:courseDescription.value,
        courseCapacity:courseCapacity.value,

    }
    courses.push(course);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'course add successfully',
        showConfirmButton: false,
        timer: 3000
      })
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
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice(id,1);
            displayData();
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
   
}
search.addEventListener("keyup",function(e){
    var result = "";
    for(var i=0;i<courses.length;i++){
        if(courses[i].name.includes(e.target.value.toLowerCase())){
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
    }
    document.getElementById("data").innerHTML=result;
 


})
courseName.addEventListener("keyup",function(){
    var pattern = /^[A-Z][a-z]{2,10}$/
    if(pattern.test(courseName.value)){
        if(courseName.classList.contains('is-invalid')){
         courseName.classList.remove('is-invalid');
         courseName.classList.add('is-valid');
        }
        courseName.classList.add('is-valid'); 
        nameerror.classList.add('d-none'); 
        addbtn.removeAttribute("disabled");


       
        


    }
    else{
        if(pattern.test(courseName.value)){
            courseName.classList.remove('is-valid');
            courseName.classList.add('is-invalid');
        }
        courseName.classList.add('is-invalid');
        nameerror.classList.remove('d-none'); 
        nameerror.classList.add('d-block'); 
        addbtn.setAttribute("disabled","disabled");

    }

})

