for (var tested = 0; tested < 1; tested++) {
  var giftsFromUser = {};
  const giftList = [{ "uuid": "0001", "pid": "0001_01" }, { "uuid": "0609", "pid": "0609_01" }, { "uuid": "1354", "pid": "1354_01" }, { "uuid": "1973", "pid": "1973_01" }, { "uuid": "1973", "pid": "1973_02" }, { "uuid": "2074", "pid": "2074_01" }, { "uuid": "2199", "pid": "2199_01" }, { "uuid": "2199", "pid": "2199_02" }, { "uuid": "2869", "pid": "2869_01" }, { "uuid": "2937", "pid": "2937_01" }, { "uuid": "2965", "pid": "2965_01" }, { "uuid": "3064", "pid": "3064_01" }, { "uuid": "0314", "pid": "0314_01" }, { "uuid": "3153", "pid": "3153_01" }, { "uuid": "3333", "pid": "3333_01" }, { "uuid": "3333", "pid": "3333_02" }, { "uuid": "3333", "pid": "3333_03" }, { "uuid": "3476", "pid": "3476_01" }, { "uuid": "5657", "pid": "5657_01" }, { "uuid": "5788", "pid": "5788_01" }, { "uuid": "5788", "pid": "5788_02" }, { "uuid": "5856", "pid": "5856_01" }, { "uuid": "6262", "pid": "6262_01" }, { "uuid": "6280", "pid": "6280_01" }, { "uuid": "6317", "pid": "6317_01" }, { "uuid": "6432", "pid": "6432_01" }, { "uuid": "6432", "pid": "6432_02" }, { "uuid": "0065", "pid": "0065_01" }, { "uuid": "0651", "pid": "0651_01" }, { "uuid": "0651", "pid": "0651_02" }, { "uuid": "0651", "pid": "0651_03" }, { "uuid": "6563", "pid": "6563_01" }, { "uuid": "6716", "pid": "6716_01" }, { "uuid": "7001", "pid": "7001_01" }, { "uuid": "7047", "pid": "7047_01" }, { "uuid": "7047", "pid": "7047_02" }, { "uuid": "7047", "pid": "7047_03" }, { "uuid": "8292", "pid": "8292_01" }, { "uuid": "8292", "pid": "8292_02" }, { "uuid": "8315", "pid": "8315_01" }, { "uuid": "9007", "pid": "9007_01" }, { "uuid": "9007", "pid": "9007_02" }, { "uuid": "9275", "pid": "9275_01" }, { "uuid": "9275", "pid": "9275_02" }, { "uuid": "9324", "pid": "9324_01" }, { "uuid": "9324", "pid": "9324_02" }, { "uuid": "9324", "pid": "9324_03" }, { "uuid": "9527", "pid": "9527_01" }, { "uuid": "9597", "pid": "9597_02" }, { "uuid": "9770", "pid": "9770_01" }, { "uuid": "9830", "pid": "9830_01" }, { "uuid": "9999", "pid": "9999_01" }, { "uuid": "2680", "pid": "2680_01" }];


  // 將禮物清單按照送禮者的 uuid 分組
  giftList.forEach(gift => {
    if (!giftsFromUser[gift.uuid]) {
        giftsFromUser[gift.uuid] = [];
    }
    giftsFromUser[gift.uuid].push(gift);
  });

  // 遍歷所有送禮者
  Object.keys(giftsFromUser).forEach(uuid => {
    const gifts = giftsFromUser[uuid];

    // 檢查是否有送給自己的禮物
    while (gifts.some(gift => gift.uuid === uuid)) {
      let exchangeableUuid;

      // 隨機選擇一位交換對象
      do {
        exchangeableUuid = Object.keys(giftsFromUser)[Math.floor(Math.random() * Object.keys(giftsFromUser).length)];
      } while (exchangeableUuid === uuid || exchangeableUuid === gifts[0].uuid);

      // 進行交換
      giftsFromUser[exchangeableUuid].push(giftsFromUser[uuid].shift());
      giftsFromUser[uuid].push(giftsFromUser[exchangeableUuid].shift());
    }
  });

  // 檢查是否還有人收到自己送出的禮物
  var usersWhoStillHoldSelfGift = Object.keys(giftsFromUser)
    .filter(uuid => giftsFromUser[uuid].some(gift => gift.uuid === uuid));

  if (usersWhoStillHoldSelfGift.length > 0) {
    console.log({ giftOwnersFromUser: giftsFromUser, usersWhoStillHoldSelfGift });
    throw new Error("unexpected");
  }
  console.log(giftsFromUser);

}

