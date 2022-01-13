var hometown = [
    {name: '남준', Place: '일산', city: '고양'},
    {name: '진', Place: '과천'},
    {name: '호석', Place: '광주', city: '전라도'},
];

for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;
    console.log(i + '번째 실행입니다.');

    if (h.name == '호석') {
        console.log(h.name + '의 고향은 ' + h.city + ' ' + h.Place + ' 입니다');
    };
}