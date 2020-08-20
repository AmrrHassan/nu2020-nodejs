class user{
    constructor(username, password){
      this.username = username;
      this.password = password;
    }
    getRole(){
      return "Admin";
    }
}

class employee extends user{
    constructor(salary, username, password){
      super(username, password);
      this.salary = salary;
    }
}
let u = new user("Amr","pass");
console.log(u.username+" "+u.password);
let r = u.getRole();
console.log(r);

let emp = new employee(1000, "Amr", "password");
console.log(emp.salary+" takes "+ emp.username);
