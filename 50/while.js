// 객체 자료형 4개가 들어 있는 배열
var hometown = [
    {name: '남준', place: '일산', city: '고양'},
    {name: '진', place: '과천'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'},
];

var isHometown = function(h, name) {
    console.log(`함수가 실행되었습니다 ${h.city} 도시에서 ${name} 을 찾습니다. `);

    if(h.name === name) {
        console.log(`${h.name}의 고향은 ${h.city} ${h.Place} 입니다. `);
        return true;
    }
    return false;
}

var h;

while ( h = hometown.shift() ) { // 배열의 앞에서부터 값{}을 빼내오는 함수
    if (!h.name || !h.place || !h.city ) { // 모든 키가 존재하는 지 확인, 키가 부족한 객체면 Skip
        continue;
    }

    var result = isHometown(h, '호석');
    if (result) {
        break; // 해당 값을 찾았다면 while문 종료
    }
}

var i = 0;
var names = ['남준', '정국', '윤기', '호섭'];
var cities = ['경기', '부산', '대구', '광주'];

do {
    hometown[i] = {name: names[i], city: cities[i]};
    i++;
} while ( i < 4 );

console.log(hometown);