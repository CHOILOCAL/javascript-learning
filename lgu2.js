function solution() {
    var fees = [
        [200, 910, 93],
        [400, 1600, 188],
        [655, 7300, 281],
        [0, 15372, 435],
        // [100, 415, 90], [250, 1600, 389], [0, 7000, 480]
    ]; // 전기요금표
    // var usage = 530; // 사용한 전력량
    // var usage = 450; // 사용한 전력량
    var answer = 0; // 요금
    var basicUsage = 0;
    var sum = 0;
    var price = 0;

    // 기본 요금 구하기
    for (let i = 0; i < fees.length; i++) {
        if (fees.length <= 2) {
            if (fees[i][0] < usage) {
                basicUsage = fees[i - 1][1];
                sum = basicUsage;
            }
        } else {
            if (fees[i][0] < usage && fees[i + 1][0] > usage) {
                basicUsage = fees[i][1];
                sum = basicUsage;
                break;
            }
        }
    }
    console.log("기본 요금 = " + basicUsage);

    // 전력 요금 구하기
    for (let i = 0; i < fees.length; i++) {
        if (fees[i][0] < usage) {
            if (i === 0) {
                price = fees[i][0] * fees[i][2];
                sum += price;
                console.log(i + " , sum = ");
            } else if (i > 0 && i < fees.length - 1) {
                var namege = fees[i][0] - fees[i - 1][0];
                price = namege * fees[i][2];
                sum += price;
                console.log(i + " , sum = ");
            } else if (i == fees.length - 1) {
                console.log(i + " , sum = ");
                if (fees[i - 1][0] < usage) {
                    var namege = usage - fees[i - 1][0];
                    price = namege * fees[i][2];
                    sum += price;
                } else {
                    price = usage * fees[i - 1][2];
                    sum += price;
                }
            }
        } else if (fees[i][0] > usage) {
            console.log("dd");
        }
    }
    console.log("sum = " + sum);
}

solution();
