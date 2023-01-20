const giftList = [{ "uuid": "0001", "pid": "0001_01" }, { "uuid": "0609", "pid": "0609_01" }, { "uuid": "1354", "pid": "1354_01" }, { "uuid": "1973", "pid": "1973_01" }, { "uuid": "1973", "pid": "1973_02" }, { "uuid": "2074", "pid": "2074_01" }, { "uuid": "2199", "pid": "2199_01" }, { "uuid": "2199", "pid": "2199_02" }, { "uuid": "2869", "pid": "2869_01" }, { "uuid": "2937", "pid": "2937_01" }, { "uuid": "2965", "pid": "2965_01" }, { "uuid": "3064", "pid": "3064_01" }, { "uuid": "0314", "pid": "0314_01" }, { "uuid": "3153", "pid": "3153_01" }, { "uuid": "3333", "pid": "3333_01" }, { "uuid": "3333", "pid": "3333_02" }, { "uuid": "3333", "pid": "3333_03" }, { "uuid": "3476", "pid": "3476_01" }, { "uuid": "5657", "pid": "5657_01" }, { "uuid": "5788", "pid": "5788_01" }, { "uuid": "5788", "pid": "5788_02" }, { "uuid": "5856", "pid": "5856_01" }, { "uuid": "6262", "pid": "6262_01" }, { "uuid": "6280", "pid": "6280_01" }, { "uuid": "6317", "pid": "6317_01" }, { "uuid": "6432", "pid": "6432_01" }, { "uuid": "6432", "pid": "6432_02" }, { "uuid": "0065", "pid": "0065_01" }, { "uuid": "0651", "pid": "0651_01" }, { "uuid": "0651", "pid": "0651_02" }, { "uuid": "0651", "pid": "0651_03" }, { "uuid": "6563", "pid": "6563_01" }, { "uuid": "6716", "pid": "6716_01" }, { "uuid": "7001", "pid": "7001_01" }, { "uuid": "7047", "pid": "7047_01" }, { "uuid": "7047", "pid": "7047_02" }, { "uuid": "7047", "pid": "7047_03" }, { "uuid": "8292", "pid": "8292_01" }, { "uuid": "8292", "pid": "8292_02" }, { "uuid": "8315", "pid": "8315_01" }, { "uuid": "9007", "pid": "9007_01" }, { "uuid": "9007", "pid": "9007_02" }, { "uuid": "9275", "pid": "9275_01" }, { "uuid": "9275", "pid": "9275_02" }, { "uuid": "9324", "pid": "9324_01" }, { "uuid": "9324", "pid": "9324_02" }, { "uuid": "9324", "pid": "9324_03" }, { "uuid": "9527", "pid": "9527_01" }, { "uuid": "9597", "pid": "9597_02" }, { "uuid": "9770", "pid": "9770_01" }, { "uuid": "9830", "pid": "9830_01" }, { "uuid": "9999", "pid": "9999_01" }, { "uuid": "2680", "pid": "2680_01" }];



// 輸入: 禮物清單陣列
// 輸出: 交換後的禮物清單陣列

function exchangeGifts(giftList) {
    // 用於儲存交換過的禮物
    let exchangedGifts = {};
    let giftCounts = {};
    let receivedGifts = {};

    // // 計算每個人提供的禮物數量
    // giftList.forEach(gift => {
    //     if (!giftCounts[gift.uuid]) {
    //         giftCounts[gift.uuid] = 0;
    //     }
    //     giftCounts[gift.uuid]++;
    // });
    // 計算每個人提供的禮物數量
    giftList.forEach(gift => {
        let randomUUID = gift.uuid;
        while (randomUUID === gift.uuid || (receivedGifts[gift.uuid] && receivedGifts[gift.uuid].includes(randomUUID)) || giftCounts[randomUUID] >= 3) {
            randomUUID = giftList[Math.floor(Math.random() * giftList.length)].uuid;
        }
        if (!receivedGifts[randomUUID]) {
            receivedGifts[randomUUID] = [];
        }
        receivedGifts[randomUUID].push(gift.pid);
    });

    // 遍歷禮物清單
    for (let i = 0; i < giftList.length; i++) {
        let currentGift = giftList[i];
        let currentUuid = currentGift.uuid;

        // 檢查是否為同一人送給自己
        let randomIndex = Math.floor(Math.random() * giftList.length);
        while (giftList[randomIndex].uuid === currentUuid) {
            randomIndex = Math.floor(Math.random() * giftList.length);
        }

        // 檢查是否已經收過此人的禮物
        let targetUuid = giftList[randomIndex].uuid;
        while (exchangedGifts[currentUuid] && exchangedGifts[currentUuid].includes(targetUuid)) {
            randomIndex = Math.floor(Math.random() * giftList.length);
            targetUuid = giftList[randomIndex].uuid;
        }

        // 進行交換
        let targetGift = giftList[randomIndex];
        giftList[i] = targetGift;
        giftList[randomIndex] = currentGift;

        // 儲存已交換過的禮物
        if (!exchangedGifts[currentUuid]) {
            exchangedGifts[currentUuid] = [targetUuid];
        } else {
            exchangedGifts[currentUuid].push(targetUuid);
        }

        // 為了確保每個人都可以換到相當自己提供禮物數量的禮物
        if (!receivedGifts[currentUuid]) {
            receivedGifts[currentUuid] = [];
        }

        receivedGifts[currentUuid].push(targetGift);
        // if (receivedGifts[currentUuid].length === giftCounts[currentUuid]) {
        //     delete receivedGifts[currentUuid];
        // }
        console.log(receivedGifts);
    }
}
exchangeGifts(giftList)