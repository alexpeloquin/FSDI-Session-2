
var members = [];

function member(firstName, lastName, age, membership, price) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.membership = membership;
    this.price = price;

    console.log('Cool Man');
}

function registerMember() {
    var firstName = document.getElementById('memberName').value;
    console.log(firstName);
    var lastName = document.getElementById('memberLastName').value;
    var age = document.getElementById('memberAge').value;
    var membership = $('input[name="membership"]:checked').val();
    
    console.log(membership);

    var price;

    var membership1 = getMembership();
    if (membership1 ==true) {
        price = 30;
    } else {
        price = 50;
    }
    
    var newMember = new member(firstName, lastName, age, membership, price);

    members.push(newMember);
    
    buildUserList(members);
}

function getMembership() {

    var membership = document.getElementsByName('membership');

    for (i = 0; i < membership.length; ++i) {
        if (membership[i].checked) {
            membership = true;
        }
        else{
            membership = false;
            }

    }
    return membership;
} 