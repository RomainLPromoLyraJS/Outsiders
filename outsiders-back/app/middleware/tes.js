const password = 'Miamiam1!';
const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
const result = regexPassword.test(password);
console.log(result);