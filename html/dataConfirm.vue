<template>
    <div>
        <div class="row">
            <div class="col-xl-2"></div>
            <div class="col-xl-8 col-12">
                <!-- 進度條顯示 -->
                <div class="d-none d-lg-block w-100">
                    <ul class="progressBar">
                        <li>確認商品</li>
                        <li class="active">填寫資料</li>
                        <li>前往結帳</li>
                    </ul>
                </div>
                <div class="d-none d-lg-block">
                    <br><br><br><br><br><br><br>
                </div>
            </div>
            <div class="col-xl-2"></div>
        </div>

        <div class="row">

            <!-- 收件人資料填寫 -->
            <div class="col-1"></div>
            <div class="col-xl-4 col-10">
                <p class="h3 fw-bolder" id="sendMethod">取貨方式</p>

                <div class="form-check border-top py-3" v-show="!sendInfo.mainIslandFreeCheck">
                    <input class="form-check-input" type="radio" name="mainIsland" id="mainIsland" value="mainIsland"
                        v-model="sendInfo.sendMethod">
                    <label class="form-check-label" for="mainIsland">
                        國內一般宅配(本島)
                    </label>
                </div>

                <div class="form-check border-top py-3" v-show="sendInfo.mainIslandFreeCheck">
                    <input class="form-check-input" type="radio" name="mainIslandFree" id="mainIslandFree"
                        value="mainIslandFree" v-model="sendInfo.sendMethod">
                    <label class="form-check-label" for="mainIslandFree">
                        國內一般宅配(本島)(免運費)
                    </label>
                </div>

                <div class="form-check border-top py-3">
                    <input class="form-check-input" type="radio" name="outerIsland" id="outerIsland" value="outerIsland"
                        v-model="sendInfo.sendMethod">
                    <label class="form-check-label" for="outerIsland">
                        郵局(外島)-退換貨自付
                    </label>
                </div>
                <p class="text-danger" v-show="sendInfo.sendMethodCheck">請選擇取貨方式</p>
                <hr>
                <!-- 商品購買人資料 -->
                <p class="h3 fw-bolder" id="purchaserName">商品購買人</p>
                <!-- 姓名 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請填寫真實姓名，以免無法取貨"
                        v-model="sendInfo.purchaser.name">
                </div>
                <p class="text-danger" v-show="sendInfo.purchaser.nameCheck">請輸入購買人姓名</p>
                <!-- 電話 -->
                <div>
                    <input type="tel" class="fs-5 w-100 my-2" placeholder="手機號碼"
                        v-model="sendInfo.purchaser.phoneNumber">
                </div>
                <p class="text-danger" v-show="sendInfo.purchaser.phoneNumberCheck">請輸入購買人的電話</p>
                <!-- 電子信箱 -->
                <div>
                    <input type="email" class="fs-5 w-100 my-2" placeholder="電子信箱" v-model="sendInfo.purchaser.email">
                </div>
                <p class="text-danger" v-show="sendInfo.purchaser.emailCheck">請輸入購買人的電子信箱</p>
                <!-- 鄉鎮選擇 -->
                <div id="twzipcodePurchaser" class="fs-5 w-100 my-2">
                    <div data-role="zipcode" data-value="信義區" style="display: none;"></div>
                </div>
                <div>
                    <!-- 不在class內套用d-inline-block原因是會造成顯示異常，因此使用style宣告 -->
                    <span class="text-danger w-50" v-show="sendInfo.purchaser.countyCheck"
                        style="display: inline-block;">請選擇縣市</span>
                    <span class="text-danger w-25" v-show="sendInfo.purchaser.districtCheck"
                        style="display: inline-block;">請選擇鄉鎮</span>
                </div>

                <!-- 地址輸入 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請輸入詳細地址"
                        v-model="sendInfo.purchaser.address">
                </div>
                <p class="text-danger" v-show="sendInfo.purchaser.addressCheck">請輸入詳細地址</p>
                <hr>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="dataSame"
                        v-model="sendInfo.purchaserAndRecipientSame">
                    <label class="form-check-label" for="dataSame">
                        收件人資料與購買人資料相同
                    </label>
                </div>
                <hr>
                <!-- 商品收件人資料 -->
                <p class="h3 fw-bolder" id="recipientName">商品收件人</p>
                <!-- 姓名 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請填寫真實姓名，以免無法取貨"
                        v-model="sendInfo.recipient.name">
                </div>
                <p class="text-danger" v-show="sendInfo.recipient.nameCheck">請輸入收件人姓名</p>
                <!-- 電話 -->
                <div>
                    <input type="tel" class="fs-5 w-100 my-2" placeholder="手機號碼"
                        v-model="sendInfo.recipient.phoneNumber">
                </div>
                <p class="text-danger" v-show="sendInfo.recipient.phoneNumberCheck">請輸入收件人的手機號碼</p>
                <!-- 鄉鎮選擇 -->
                <div id="twzipcodeRecipient" class="fs-5 w-100 my-2">
                    <div data-role="zipcode" data-value="信義區" style="display: none;"></div>
                </div>
                <div>
                    <span class="text-danger w-50" v-show="sendInfo.recipient.countyCheck"
                        style="display: inline-block;">請選擇縣市</span>
                    <span class="text-danger w-25" v-show="sendInfo.recipient.districtCheck"
                        style="display: inline-block;">請選擇鄉鎮</span>
                </div>
                <!-- 地址輸入 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請輸入詳細地址"
                        v-model="sendInfo.recipient.address">
                </div>
                <p class="text-danger" v-show="sendInfo.recipient.addressCheck">請輸入收件人的詳細地址</p>
                <hr>

                <!-- 付款方式 -->
                <p class="h3 fw-bolder" id="payMethod">付款方式</p>

                <div class="form-check border-top py-3">
                    <input class="form-check-input" type="radio" name="payMethiod" id="creditCard" value="creditCard"
                        v-model="sendInfo.payMethod" checked>
                    <label class="form-check-label" for="creditCard">
                        信用卡
                    </label>
                </div>
                <div class="form-check border-top py-3">
                    <input class="form-check-input" type="radio" name="payMethod" id="cash" value="cash"
                        v-model="sendInfo.payMethod">
                    <label class="form-check-label" for="cash">
                        貨到付款( + NT30 )
                    </label>
                </div>
                <p class="text-danger" v-show="sendInfo.payMethodCheck">請選擇付款方式</p>
                <hr>
                <p class="h4 fw-bolder">有沒有什麼想買本店卻沒有的呢 ?</p>
                <div>
                    <textarea name="" id="" cols="30" rows="5" class="w-100"></textarea>
                </div>
                <p class="h4 fw-bolder pt-3">留言給店長</p>
                <div>
                    <textarea name="" id="" cols="30" rows="5" class="w-100"></textarea>
                </div>

                <div class="form-check" id="ruleAgree">
                    <input class="form-check-input" type="checkbox" v-model="sendInfo.ruleAgree">
                    <label class="form-check-label" for="ruleAgree">
                        我已閱讀並同意 政策條款
                    </label>
                </div>
                <p class="text-danger" v-show="sendInfo.ruleAgreeCheck">請勾選同意政策條款</p>
                <button class="btn btn-success fs-3 w-100 my-3" v-on:click="createOrder()">下一步 | 送出訂單</button>
            </div>

            <div class="col-1"></div>

            <!-- 訂單內的商品顯示 -->
            <div class="col-1"></div>
            <div class="col-xl-4 col-10">
                <div style="position: sticky; top: 60px;">

                    <table>
                        <tbody>

                            <tr v-for="(item,index) in shopCartContentBuffer">
                                <td>
                                    <div class="shopCartIcon me-3 position-relative">
                                        <img v-bind:src="shopCartContentBuffer[index][0]" alt="" class="border"
                                            style="height: 100px;">
                                        <span
                                            class="cartQuantity text-light bg-primary">{{shopCartContentBuffer[index][2]}}</span>
                                    </div>
                                </td>
                                <td class="align-text-top">
                                    {{shopCartContentBuffer[index][1]}}
                                </td>
                                <td style="width: 100px;"></td>
                                <td class="text-end">NT&nbsp{{shopCartContentBuffer[index][4]}}</td>
                            </tr>


                        </tbody>
                    </table>
                    <hr>
                    <div class="input-group input-group-lg my-3">
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg" placeholder="輸入優惠券代碼">
                        <button class="input-group-text btn btn-primary" id="inputGroup-sizing-lg">使用</button>
                    </div>
                    <hr>
                    <table class="w-100">
                        <tbody>
                            <tr class="border-bottom border-light">
                                <td class="text-start">商品小計</td>
                                <td class="text-end">NT {{billInfo.productPrice}}</td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td>
                                    <a href="#dataConfirm">
                                        <i class="fa-solid fa-caret-down" style="color:rgb(162,172,185);"></i>
                                    </a>
                                    運費/手續費
                                </td>
                            </tr>
                            <tr class="border-bottom border-light text-secondary" v-show="sendInfo.mainIsland">
                                <td class="text-start">國內一般宅配(本島)</td>
                                <td class="text-end">NT 90</td>
                            </tr>
                            <tr class="border-bottom border-light text-secondary" v-show="sendInfo.mainIslandFree">
                                <td class="text-start">國內一般宅配(本島)(免運費)</td>
                                <td class="text-end">NT 0</td>
                            </tr>
                            <tr class="border-bottom border-light text-secondary" v-show="sendInfo.outerIsland">
                                <td class="text-start">郵局(外島)-退換貨自付</td>
                                <td class="text-end">NT 180</td>
                            </tr>
                            <tr class="border-bottom border-light text-secondary" v-show="billInfo.cashHandlingFee > 0">
                                <td class="text-start">貨到付款</td>
                                <td class="text-end">NT 30</td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td>
                                    <a href="#dataConfirm">
                                        <i class="fa-solid fa-caret-down" style="color:rgb(162,172,185);"></i>
                                    </a>
                                    優惠折扣
                                </td>
                            </tr>
                            <tr class="border-bottom border-light text-secondary">
                                <td class="text-start">全館滿3000享89折:</td>
                                <td class="text-end">NT -{{billInfo.discountPrice}}</td>
                            </tr>
                            <tr class="text-danger fs-3">
                                <td class="text-start">結帳金額 </td>
                                <td class="text-end">NT {{billInfo.finalPrice}}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div class="col-1"></div>
        </div>


    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                shopCartContent: {},
                shopCartContentBuffer: {},
                sendInfo: {
                    sendMethod: '',
                    sendMethodCheck: false,
                    mainIsland: false,
                    mainIslandFree: false,
                    mainIslandFreeCheck: false,
                    outerIsland: false,
                    purchaserAndRecipientSame: false,
                    payMethod: '',
                    payMethodCheck: false,
                    payByCreditCard: false,
                    payByCash: false,
                    ruleAgree: false,
                    ruleAgreeCheck: false,
                    purchaser: {
                        name: '',
                        phoneNumber: '',
                        email: '',
                        // 鄉鎮縣市是透過query選擇器直接讀值，而非直接在vue綁定，原因是使用twzipcode
                        // 而選擇縣市的input是使用js插入，因此無法直接綁定屬性
                        county: '',
                        district: '',
                        address: '',

                        nameCheck: false,
                        phoneNumberCheck: false,
                        emailCheck: false,
                        countyCheck: false,
                        districtCheck: false,
                        addressCheck: false,
                    },
                    recipient: {
                        name: '',
                        phoneNumber: '',
                        email: '',
                        county: '',
                        district: '',
                        address: '',

                        nameCheck: false,
                        phoneNumberCheck: false,
                        emailCheck: false,
                        countyCheck: false,
                        districtCheck: false,
                        addressCheck: false,
                    }
                },
                billInfo: {
                    productPrice: 0,
                    fare: 0,
                    cashHandlingFee: 0,
                    discountPrice: 0,
                    finalPrice: 0,
                },

            }
        },
        watch: {
            // 訪問物件形式的資料必須要用""包起來，否則VS Code會出現錯誤
            'sendInfo.buyAndReciveSame': function () {
                //console.log('購買與收件人相同');
            },
            'sendInfo.sendMethod': function () {

                if (this.sendInfo.sendMethod == 'mainIsland') {
                    this.sendInfo.mainIsland = true;
                    this.sendInfo.mainIslandFree = false;
                    this.sendInfo.outerIsland = false;
                    this.billInfo.fare = 90;
                    // //console.log(`本島寄送${this.sendInfo.mainIsland}`);
                };

                if (this.sendInfo.sendMethod == 'outerIsland') {
                    this.sendInfo.mainIsland = false;
                    this.sendInfo.mainIslandFree = false;
                    this.sendInfo.outerIsland = true;
                    this.billInfo.fare = 180;
                    // //console.log(`外島寄送${this.sendInfo.outerIsland}`);
                };

                // 本島寄送免運
                if (this.sendInfo.sendMethod == 'mainIslandFree') {
                    this.sendInfo.mainIsland = false;
                    this.sendInfo.mainIslandFree = true;
                    this.sendInfo.outerIsland = false;
                    this.billInfo.fare = 0;
                    //console.log(`本島免運${this.sendInfo.mainIslandFree}`);
                };
            },
            'sendInfo.purchaserAndRecipientSame': function () {
                if (this.sendInfo.purchaserAndRecipientSame) {
                    this.purchaserAndRecipientDataSame();
                }
            },
            'sendInfo.payMethod': function () {
                if (this.sendInfo.payMethod == 'creditCard') {
                    this.payByCreditCard = true;
                    this.payByCash = false;
                    this.billInfo.cashHandlingFee = 0;
                    // //console.log(`信用卡付款${this.payByCreditCard} `);
                };

                if (this.sendInfo.payMethod == 'cash') {
                    this.payByCreditCard = false;
                    this.payByCash = true;
                    this.billInfo.cashHandlingFee = 30;
                    // //console.log(`現金付款${this.payByCash}`);
                }
            },
            // 運費變更時更新金額
            'billInfo.fare': function () {
                //console.log('運費變更');
                this.finalPriceCal();
            },
            // 手續費變更時更新金額
            'billInfo.cashHandlingFee': function () {
                //console.log('手續費變更');
                this.finalPriceCal();
            },
            'sendInfo.purchaser.county': function () {
                //console.log(this.sendInfo.purchaser.county);
            },
        },
        methods: {
            shopCartInitialize: function () {
                this.shopCartContent = JSON.parse(Cookies.get("shopCartMemory"));
                this.shopCartContentBuffer = this.shopCartContent;
                this.shopCartContentBuffer.map(function (item) {
                    item[4] = item[3] * item[2];
                })
            },
            totalPriceCal: function () {
                // 商品總金額計算
                let productPrice = 0;
                let discountPrice = 0;
                this.shopCartContentBuffer.map(function (item) {
                    productPrice = productPrice + item[4];
                })
                this.billInfo.productPrice = productPrice;

                // 折扣計算
                if (productPrice >= 1111) {
                    // 免運門檻到達
                    this.sendInfo.mainIslandFreeCheck = true;
                };

                if (productPrice >= 3000) {
                    // 滿額89折門檻
                    discountPrice = productPrice * 0.11;
                    this.billInfo.discountPrice = Math.round(discountPrice);
                }
            },
            // 最後結帳金額計算，剛進入頁面時計算一次，之後有改變運費或手續費也會計算
            finalPriceCal: function () {
                this.billInfo.finalPrice = this.billInfo.productPrice + this.billInfo.fare + this.billInfo.cashHandlingFee - this.billInfo.discountPrice;
            },
            createOrder: function () {
                // 資料檢查旗標初始化
                this.sendInfo.sendMethodCheck = false;
                this.sendInfo.purchaser.nameCheck = false;
                this.sendInfo.purchaser.phoneNumberCheck = false;
                this.sendInfo.purchaser.emailCheck = false;
                this.sendInfo.purchaser.countyCheck = false;
                this.sendInfo.purchaser.districtCheck = false;
                this.sendInfo.purchaser.addressCheck = false;

                this.sendInfo.recipient.nameCheck = false;
                this.sendInfo.recipient.phoneNumberCheck = false;
                this.sendInfo.recipient.countyCheck = false;
                this.sendInfo.recipient.districtCheck = false;
                this.sendInfo.recipient.addressCheck = false;

                this.sendInfo.payMethodCheck = false;
                this.sendInfo.ruleAgreeCheck = false;


                // 取貨方式選擇檢查
                if (this.sendInfo.sendMethod == '') {
                    this.sendInfo.sendMethodCheck = true;
                    this.scrollToPosititon('sendMethod');
                    return;
                }

                // 商品購買人資料檢查，會全部都檢查過一遍再跳轉回輸入資料的地方
                let purchaserCheck = false;
                if (this.sendInfo.purchaser.name == '') {
                    //console.log('請輸入購買人姓名');
                    this.sendInfo.purchaser.nameCheck = true;
                    purchaserCheck = true;
                }
                if (this.sendInfo.purchaser.phoneNumber == '') {
                    //console.log('請輸入購買人的聯絡電話');
                    this.sendInfo.purchaser.phoneNumberCheck = true;
                    purchaserCheck = true;
                }
                if (this.sendInfo.purchaser.email == '') {
                    //console.log('請輸入購買人的電子信箱');
                    this.sendInfo.purchaser.emailCheck = true;
                    purchaserCheck = true;
                }

                this.sendInfo.purchaser.county = document.querySelector("#twzipcodePurchaser [name='county']").value;
                if (this.sendInfo.purchaser.county == '') {
                    //console.log('請選擇購買人的居住縣市');
                    this.sendInfo.purchaser.countyCheck = true;
                    purchaserCheck = true;
                }

                this.sendInfo.purchaser.district = document.querySelector("#twzipcodePurchaser [name='district']").value;
                if (this.sendInfo.purchaser.district == '') {
                    //console.log('請選擇購買人的居住鄉鎮');
                    this.sendInfo.purchaser.districtCheck = true;
                    purchaserCheck = true;
                }

                if (this.sendInfo.purchaser.address == '') {
                    //console.log('請選擇購買人的詳細地址');
                    this.sendInfo.purchaser.addressCheck = true;
                    purchaserCheck = true;
                }
                if (purchaserCheck) {
                    this.scrollToPosititon('purchaserName');
                    return;
                }

                // 商品收件人資料檢查
                let recipientCheck = false;
                if (this.sendInfo.recipient.name == '') {
                    //console.log('請輸入收件人姓名');
                    //console.log(this.sendInfo.recipient.name);
                    this.sendInfo.recipient.nameCheck = true;
                    recipientCheck = true;
                }
                if (this.sendInfo.recipient.phoneNumber == '') {
                    //console.log('請輸入收件人的聯絡電話');
                    this.sendInfo.recipient.phoneNumberCheck = true;
                    recipientCheck = true;
                }

                this.sendInfo.recipient.county = document.querySelector("#twzipcodeRecipient [name='county']").value;
                if (this.sendInfo.recipient.county == '') {
                    //console.log('請選擇收件人的居住縣市');
                    this.sendInfo.recipient.countyCheck = true;
                    recipientCheck = true;
                }

                this.sendInfo.recipient.district = document.querySelector("#twzipcodeRecipient [name='district']").value;
                if (this.sendInfo.recipient.district == '') {
                    //console.log('請選擇收件人的居住鄉鎮');
                    this.sendInfo.recipient.districtCheck = true;
                    recipientCheck = true;
                }

                if (this.sendInfo.recipient.address == '') {
                    //console.log('請選擇收件人的詳細地址');
                    this.sendInfo.recipient.addressCheck = true;
                    recipientCheck = true;
                }
                if (recipientCheck) {
                    this.scrollToPosititon('recipientName');
                    return;
                }

                // 付款方式檢查
                if (this.sendInfo.payMethod == '') {
                    //console.log('請選擇付款方式');
                    this.sendInfo.payMethodCheck = true;
                    this.scrollToPosititon('payMethod');
                    return;
                }

                // 同意條款檢查
                if (this.sendInfo.ruleAgree == false) {
                    //console.log('請勾選同意條款');
                    this.sendInfo.ruleAgreeCheck = true;
                    this.scrollToPosititon('ruleAgree');
                    return;
                }
                //console.log(`資料完整`);
                alert('訂單送出');
                router.push('/');
            },
            scrollToPosititon(target) {
                window.scrollTo(0, ($(`#${target}`).offset().top - 70));
            },
            purchaserAndRecipientDataSame: function () {
                this.sendInfo.recipient.name = this.sendInfo.purchaser.name;
                this.sendInfo.recipient.phoneNumber = this.sendInfo.purchaser.phoneNumber;
                this.sendInfo.recipient.address = this.sendInfo.purchaser.address;

                this.sendInfo.purchaser.county = document.querySelector("#twzipcodePurchaser [name='county']").value;;
                this.sendInfo.purchaser.district = document.querySelector("#twzipcodePurchaser [name='district']").value;;
                $('#twzipcodeRecipient').twzipcode('set', {
                    'county': this.sendInfo.purchaser.county,
                    'district': this.sendInfo.purchaser.district,
                });
            }
        },
        beforeCreate() {
        },
        created() {
            this.shopCartInitialize();
            this.totalPriceCal();
            this.finalPriceCal();
        },
        mounted() {
            // 縣市選單
            $('#twzipcodePurchaser').twzipcode();
            $('#twzipcodePurchaser > select').addClass('w-50');
            // $('#twzipcodePurchaser [name="county"]').attr('v-model', 'sendInfo.purchaser.county');
            // $('#twzipcodePurchaser [name="county"]').attr('onchange', '//console.log(value)');

            $('#twzipcodeRecipient').twzipcode();
            $('#twzipcodeRecipient > select').addClass('w-50');
        },
    }
</script>


<style scoped>
    /* 進度條 */
    .container {
        width: 100%;
    }

    .progressBar {
        counter-reset: step;
    }

    .progressBar li {
        list-style-type: none;
        float: left;
        width: 33.33%;
        position: relative;
        text-align: center;
    }

    .progressBar li:before {
        content: counter(step);
        counter-increment: step;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #ddd;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        border-radius: 50%;
        background-color: #fff;
    }

    .progressBar li:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #ddd;
        top: 15px;
        left: -50%;
        z-index: -1;
    }

    .progressBar li:first-child:after {
        content: none;
    }

    .progressBar li.active {
        color: #0d6efd;
    }

    .progressBar li.active:before {
        border-color: #0d6efd;
    }

    .progressBar li.active+li:after {
        background-color: #0d6efd;
    }

    /* 收貨方式選擇 */
    .form-check:hover {
        background-color: ghostwhite;
    }

    /* 修改font awesome icon顏色 */
    a.fa-solid {
        color: #f0d7;
    }

    /* 商品數量顯示 */
    .cartQuantity {
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: -12.5px;
        top: -10px;
    }

    /* 
    #twzipcodePurchaser [name='county'] {
        background-color: red;
    }

    #twzipcodePurchaser [name='district'] {
        background-color: green;
    } */
</style>