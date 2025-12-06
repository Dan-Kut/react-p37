function Information(obj : {name : string, second_name : string, surname : string, phone_number : string, email : string}) {

  return <h1>Hello ! My full name is {obj.name} {obj.second_name} {obj.surname}, my phone number is {obj.phone_number}, my email is {obj.email}</h1>
}

export default Information