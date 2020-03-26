const data = document.querySelectorAll('.dataEdit');
const selectTable = document.querySelector('.selectTable');
const editUser=()=>{
    data.forEach ((info) => {
    info.style.visibility = "visible";
    });
}
selectTable.addEventListener('click', editUser); 