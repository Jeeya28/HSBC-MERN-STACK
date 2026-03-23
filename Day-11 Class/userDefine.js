

let empDetails=[
    {name:"sai", salary:50000, role:"developer"},
    {name:"sai teja", salary:60000, role:"front developer"},
    {name:"ravi", salary:90000, role:"backend developer"},
]


//to get all users 
function getEmpDetails(){
    console.log("This is use define function ");
    return empDetails;
}

//to add new employee details

function addEmpDetails(empName, empSalary, empRole){
    empDetails.push({name:empName , salary:empSalary , role:empRole })
}

module.exports={getEmpDetails, addEmpDetails};