var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Partial
function updateUser(user, updates) {
    return __assign(__assign({}, user), updates);
}
var user = { id: 1, name: "Jhon", email: "jhon@gmail.com" };
var updates = { email: "change@gmail.com" };
var updated = updateUser(user, updates);
console.log(updated);
//Readonly
var userData = {
    id: 1,
    name: "Allision",
    email: "allision@gmail.com"
};
// userData.name = "jhon"; //Cannot assign to 'name' because it is a read-only property
console.log(userData);
var userPick = { name: "Ethan", email: "ethan@gmail.com" };
console.log(userPick);
var userOmit = { id: 11, name: "Hunt" };
console.log(userOmit);
