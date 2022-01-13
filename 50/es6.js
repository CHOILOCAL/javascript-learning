var family = {
    'address': 'Seoul',
    members: {},
    addFamily: function(age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadcount: function() {
        return Object.keys(this.members).length;
    }
}
var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {age, name};
};
var getHeadcount = function() {
    return Object.keys(this.members).length;
}

var family = {address, members, addFamily, getHeadcount}; // 단축 속성명

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadcount());

var obj = {}
for (var i = 0; i < 4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

var profile = 'chole:30';
var person = {
    [profile] : true,
    [profile.split(':')[0]]: profile.split(':')[1] // 객체를 쪼개서 
};
console.log(person);