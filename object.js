var family = {
    'address': 'Seoul',
    members: {},
    addFamily: function(age, name, role) { // 함수 리터럴
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadcount: function() {
        return Object.keys(this.members).length;
    }
}

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadcount());

var printMemter = function() {
    var members = family.members;
    for (role in members) { // for (key in object)
        console.log('role => ' + role + ', name => ' + members[role].name + ', age => ' + members[role].age); 
    }
};
printMemter();

var members = family.members;
members['nephew'] = {age: 3, name: 'hyun'}; // 기본 객체에 새로운 객체 추가
members.niece = {age: 5, name: 'lyn'};

// 객체 접근 방법 
delete members.aunt; // 1) 객체.키
delete members['dog']; // 2) 객체[키]

printMemter();