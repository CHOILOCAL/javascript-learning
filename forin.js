var store = {snack: 1000, flower: 5000, beverge: 2000};

for (var item in store) {
    if (!store.hasOwnProperty(item)) { // store객체에 item키 정보가 있는지 확인 (hasOwnProperty)를 통해 객체 안에 속성이 있는지 한 번 더 확인
        continue;
    };
    console.log(item + '는 가격이 ' + store[item] + ' 입니다.');
}