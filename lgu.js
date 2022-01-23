function solution() {
    var delivery = [
        [1, 3, 1],
        [3, 5, 0],
        [5, 4, 0],
        [2, 5, 0],
    ];
    var n = 6;

    var isKnown = [];
    var isntKnown = [];

    // 재고 있는 상품 걸러내기
    delivery.forEach((arr) => {
        if (arr[2] === 1) {
            isKnown.push(arr[0]);
            isKnown.push(arr[1]);
            var index = delivery.indexOf(arr);
            delivery.splice(index, 1);
        }
    });

    // 재고 없는 상품 걸러내기
    delivery.forEach((arr) => {
        if (arr[2] === 0) {
            for (let i = 0; i < isKnown.length; i++) {
                if (isKnown[i] === arr[0]) {
                    isntKnown.push(arr[1]);
                } else if (isKnown[i] === arr[1]) {
                    isntKnown.push(arr[0]);
                }
            }
        }
    });

    // 중복 값 제거
    const set_1 = new Set(isKnown);
    const uniqKnown = [...set_1];

    const set_2 = new Set(isntKnown);
    const uniqIsntKnown = [...set_2];

    var result = "";

    for (let i = 1; i <= n; i++) {
        if (uniqKnown.includes(i)) {
            result += "O";
        } else if (uniqIsntKnown.includes(i)) {
            result += "X";
        } else if (!uniqKnown.includes(i) && !uniqIsntKnown.includes(i)) {
            result += "?";
        }
    }
}

solution();
