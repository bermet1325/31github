let user = {
  firstName: "Growthhungry",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi();
