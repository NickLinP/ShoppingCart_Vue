<template>
    <div>
        <div id="apple"></div>
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
            <div class="col-xl-1"></div>
            <div class="col-xl-4 col-12">
                <p class="h3 fw-bolder">取貨方式</p>

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
                <hr>
                <!-- 商品購買人資料 -->
                <p class="h3 fw-bolder">商品購買人</p>
                <!-- 姓名 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請填寫真實姓名，以免無法取貨"
                        v-model="sendInfo.purchaser.name">
                </div>
                <!-- 電話 -->
                <div>
                    <input type="tel" class="fs-5 w-100 my-2" placeholder="手機號碼"
                        v-model="sendInfo.purchaser.phoneNumber">
                </div>
                <!-- 電子信箱 -->
                <div>
                    <input type="email" class="fs-5 w-100 my-2" placeholder="電子信箱" v-model="sendInfo.purchaser.email">
                </div>

                <!-- 鄉鎮選擇 -->
                <div id="twzipcodePurchaser" class="fs-5 w-100 my-2">
                    <div data-role="zipcode" data-value="信義區" style="display: none;"></div>
                </div>
                <!-- 地址輸入 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請輸入詳細地址"
                        v-model="sendInfo.purchaser.address">
                </div>
                <hr>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="dataSame"
                        v-model="sendInfo.buyAndReciveSame">
                    <label class="form-check-label" for="dataSame">
                        收件人資料與購買人資料相同
                    </label>
                </div>
                <hr>
                <!-- 商品收件人資料 -->
                <p class="h3 fw-bolder">商品收件人</p>
                <!-- 姓名 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請填寫真實姓名，以免無法取貨">
                </div>
                <!-- 電話 -->
                <div>
                    <input type="tel" class="fs-5 w-100 my-2" placeholder="手機號碼">
                </div>

                <!-- 鄉鎮選擇 -->
                <div id="twzipcodeRecipient" class="fs-5 w-100 my-2">
                    <div data-role="zipcode" data-value="信義區" style="display: none;"></div>
                    <div></div>
                </div>
                <!-- 地址輸入 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請輸入詳細地址">
                </div>
                <hr>

                <!-- 付款方式 -->
                <p class="h3 fw-bolder">付款方式</p>

                <div class="form-check border-top py-3">
                    <input class="form-check-input" type="radio" name="payMethio" id="creditCard" value="creditCard"
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
                <hr>
                <p class="h4 fw-bolder">有沒有什麼想買本店卻沒有的呢 ?</p>
                <div>
                    <textarea name="" id="" cols="30" rows="5" class="w-100"></textarea>
                </div>
                <p class="h4 fw-bolder pt-3">留言給店長</p>
                <div>
                    <textarea name="" id="" cols="30" rows="5" class="w-100"></textarea>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="ruleAgree" v-model="sendInfo.ruleAgree">
                    <label class="form-check-label" for="ruleAgree">
                        我已閱讀並同意 政策條款
                    </label>
                </div>
                <button class="btn btn-success fs-3 w-100 my-3" v-on:click="createOrder()">下一步 | 進行結帳</button>
            </div>

            <div class="col-xl-1"></div>

            <!-- 訂單內的商品顯示 -->
            <div class="col-xl-1"></div>
            <div class="col-xl-4 col-12">
                <div style="position: sticky; top: 60px;">

                    <table>
                        <tbody>
                            <!-- <tr>
                                <td>
                                    <div class="shopCartIcon me-3 position-relative">
                                        <img src="./image/homepage/-2_1.jpg" alt="" class="border"
                                            style="height: 100px;">
                                        <span class="cartQuantity text-light bg-primary">1</span>
                                    </div>
                                </td>
                                <td class="align-text-top">
                                    喜樂寵宴 極寵宴 生食冷凍乾燥飼料-骨骼腦部發育 (幼貓成長配方-鮮嫩雞肉+鴨肉 )500g
                                </td>
                                <td style="width: 100px;"></td>
                                <td class="text-end">NT1000</td>
                            </tr> -->

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
            <div class="col-xl-1"></div>
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
                    mainIsland: false,
                    mainIslandFree: false,
                    mainIslandFreeCheck: false,
                    outerIsland: false,
                    buyAndReciveSame: false,
                    payMethod: '',
                    payByCreditCard: false,
                    payByCash: false,
                    ruleAgree: false,
                    purchaser: {
                        name: '',
                        phoneNumber: '',
                        email: '',
                        county: '',
                        township: '',
                        address: '',
                    },
                    recipient: {
                        name: '',
                        phoneNumber: '',
                        email: '',
                        county: '',
                        township: '',
                        address: '',
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
                console.log('購買與收件人相同');
            },
            'sendInfo.sendMethod': function () {

                if (this.sendInfo.sendMethod == 'mainIsland') {
                    this.sendInfo.mainIsland = true;
                    this.sendInfo.mainIslandFree = false;
                    this.sendInfo.outerIsland = false;
                    this.billInfo.fare = 90;
                    // console.log(`本島寄送${this.sendInfo.mainIsland}`);
                };

                if (this.sendInfo.sendMethod == 'outerIsland') {
                    this.sendInfo.mainIsland = false;
                    this.sendInfo.mainIslandFree = false;
                    this.sendInfo.outerIsland = true;
                    this.billInfo.fare = 180;
                    // console.log(`外島寄送${this.sendInfo.outerIsland}`);
                };

                // 本島寄送免運
                if (this.sendInfo.sendMethod == 'mainIslandFree') {
                    this.sendInfo.mainIsland = false;
                    this.sendInfo.mainIslandFree = true;
                    this.sendInfo.outerIsland = false;
                    this.billInfo.fare = 0;
                    console.log(`本島免運${this.sendInfo.mainIslandFree}`);
                };
            },
            'sendInfo.payMethod': function () {
                if (this.sendInfo.payMethod == 'creditCard') {
                    this.payByCreditCard = true;
                    this.payByCash = false;
                    this.billInfo.cashHandlingFee = 0;
                    // console.log(`信用卡付款${this.payByCreditCard} `);
                };

                if (this.sendInfo.payMethod == 'cash') {
                    this.payByCreditCard = false;
                    this.payByCash = true;
                    this.billInfo.cashHandlingFee = 30;
                    // console.log(`現金付款${this.payByCash}`);
                }
            },
            // 運費變更時更新金額
            'billInfo.fare': function () {
                console.log('運費變更');
                this.finalPriceCal();
            },
            // 手續費變更時更新金額
            'billInfo.cashHandlingFee': function () {
                console.log('手續費變更');
                this.finalPriceCal();
            },
            'sendInfo.purchaser.county': function () {
                console.log(this.sendInfo.purchaser.county);
            }
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
                // 取貨方式選擇檢查
                if (this.sendInfo.sendMethod == '') {
                    console.log('請選擇取貨方式');
                    window.location.hash('mainIsland');
                }

                // 商品購買人資料檢查

                // 商品收件人資料檢查

                // 付款方式檢查
                if (this.sendInfo.payMethod == '') {
                    console.log('請選擇付款方式');
                }

                // 同意條款檢查
                if (this.sendInfo.ruleAgree == false) {
                    console.log('請勾選同意條款');
                }
            },
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
            $('#twzipcodePurchaser [name="county"]').attr('onchange', 'console.log(value)');



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

    #twzipcodePurchaser [name='county'] {
        background-color: red;
    }

    #twzipcodePurchaser [name='district'] {
        background-color: green;
    }
</style>