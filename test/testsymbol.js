
let user = { username: "bhnmzm", first_name: 'Behnam', last_name: "Azimi", title: "Front-End Developer" };

user[Symbol.iterator] = function*() {
 for (let key in this) {
   yield [key, this[key]];
 }
};

for (let [key, value] of user) {
 console.log(key + ": ", value)
}
