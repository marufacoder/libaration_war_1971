//update date and time
//function declaration
function UpdateDateTime(){
const now = new Date();
const updateDateTime = now.toLocaleString();
document.getElementById('datetime').textContent = updateDateTime;
}
 UpdateDateTime();
 setInterval(UpdateDateTime, 1000);