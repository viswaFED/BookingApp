const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
} else {
  const name=nameInput.value;
  const email=emailInput.value;
 // localStorage.setItem('Name',name);
 // localStorage.setItem('Email',email);
  let myObj={
    Name:name,
    Email :email

  };


  localStorage.setItem(myObj.Email, JSON.stringify(myObj));
       nameInput.value = '';
      emailInput.value = '';
     
        


      showNewUserOnScreen(myObj);
//var li=document.createElement('li');

      //var editButton=document.createElement('button')
      //var deleteButton=document.createElement('button')


  }
}
const obj1= JSON.parse(localStorage.getItem('ritesh151990@gmail.com'));

function showNewUserOnScreen(user) {
const parentNode=document.getElementById('listOfUsers');
const childHTML= `<li id='${user.Email}'> ${user.Name} - ${user.Email} <button onclick=editUser('${user.Name}','${user.Email}')>EDIT</button><button onclick=deleteUser('${user.Email}')>DEL</button> </li>`;
  parentNode.innerHTML =parentNode.innerHTML+ childHTML;
}
document.addEventListener('DOMContentLoaded', ()=>{
  Object.keys(localStorage).forEach((key) => {
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      showNewUserOnScreen(detailsOfPeople);
      });
});
function editUser(name,emailId){
     document.getElementById('name').value=name;
     document.getElementById('email').value=emailId;
          deleteUser(emailId);

}
 function deleteUser(emailId){
   localStorage.removeItem(emailId);
   console.log(emailId);
    removeUserFromScreen(emailId);

   }
   function removeUserFromScreen(emailId){
   const parentNode=document.getElementById('listOfUsers');
   const childNodeToBeDeleted=document.getElementById(emailId);
   parentNode.removeChild(childNodeToBeDeleted);
   }
