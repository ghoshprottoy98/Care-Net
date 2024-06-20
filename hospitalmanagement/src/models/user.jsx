class User {

    constructor(username, firstName, lastName, address, pin, mobileNumber, email, password, role) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.pin = pin;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.password = password;
        this.role = [role];
        this.token = '';
    }

}

export default User;