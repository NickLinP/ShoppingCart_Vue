<template>
    <div class="row">
        <div class="col-xl-2"></div>
        <div class="col-xl-8 col-12">
            <!-- 進度條顯示 -->
            <div class="d-none d-lg-block w-100">
                <ul class="progressBar">
                    <li class="active">確認商品</li>
                    <li>填寫資料</li>
                    <li>前往結帳</li>
                </ul>
            </div>
            <div class="d-none d-lg-block">
                <br><br><br><br><br><br><br>
            </div>


            <h1 class="text-center">購物車內容</h1>
            <!-- 商品確認表格 -->
            <table class="border w-100">
                <tbody>
                    <tr class="text-center bg-light" style="height: 100px;">
                        <td>刪除</td>
                        <td>圖片</td>
                        <td>名稱</td>
                        <td>數量</td>
                        <td>單價</td>
                        <td>總計</td>
                    </tr>
                    <!-- <tr class="text-center">
                        <td>
                            <a href="" class="d-block text-center">
                                <i class="fa-solid fa-xmark text-secondary"></i>
                            </a>
                        </td>
                        <td>
                            <img src="../image/homepage/-2_1.jpg" style=" width: 100px;">
                        </td>
                        <td>Eat's 易特廚肉泥-主廚鮪魚佐鰹魚泥(鮪魚+鰹魚)15gx4條</td>
                        <td>666</td>
                        <td>1</td>
                        <td>NT666</td>
                    </tr>
                    <tr class="text-center">
                        <td>
                            <a href="" class="d-block text-center">
                                <i class="fa-solid fa-xmark text-secondary"></i>
                            </a>
                        </td>
                        <td>
                            <img src="../image/homepage/-40g_2.jpg" style=" width: 100px;">
                        </td>
                        <td>CHARM 野性魅力飼料-羊肉鮭魚貓配方 5.4kg</td>
                        <td>777</td>
                        <td>2</td>
                        <td>NT1554</td>
                    </tr> -->

                    <tr class="text-center" v-for="(item,index) in shopCartContent">
                        <td>
                            <a href="" class="d-block text-center">
                                <i class="fa-solid fa-xmark text-secondary"></i></a>
                        </td>
                        <!-- 商品圖片 -->
                        <td>
                            <img v-bind:src="shopCartContent[index][0]" style=" width: 100px;">
                        </td>
                        <!-- 商品名稱 -->
                        <td>
                            {{shopCartContent[index][1]}}
                        </td>
                        <!-- 商品數量 -->
                        <td>
                            <input type="number" min="1" max="100" class="text-center"
                                v-model.lazy="shopCartContent[index][2]" v-bind:id="index" v-on:click="quantityCatch($event)"
                                @input="quantityChange($event)">
                        </td>
                        <!-- 商品單價 -->
                        <td>
                            {{shopCartContent[index][3]}}
                        </td>
                        <!-- 商品總計金額 -->
                        <td>
                            NT {{shopCartContent[index][4]}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <br>
            <ul class="border p-5">
                <li>滿 NT1,111 免運費</li>
                <li>滿 NT3,000 / 89折 <span class="text-danger" v-show="!priceCheck">(再 {{difPrice}} 元，享更多折扣!)</span></li>
            </ul>
            <div>
                <input type="text" placeholder="輸入優惠券代碼 (英數字)" style="height: 50px;">
                <button class="btn btn-success" style="height: 50px;">使用優惠券</button>
            </div>
            <div class="text-end">
                <p>商品總計 : NT {{totalPrice}}</p>
                <p>折扣金額 : NT {{discountPrice}}</p>
            </div>
            <div>
                <button type="button" class="btn btn-primary" style="float: right;">下一步 | 計算運費</button>
            </div>

        </div>
        <div class="col-xl-2"></div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                shopCartContent: {},
                priceCheck: false,
                discountPrice: 0,
                difPrice: 0,
                totalPrice: 0,
            }
        },
        watch: {
            shopCartContent: function () {
                console.log(`購物車商品數量改變`);
                let target = this.quantityChange();
                if (!isNaN(target.id)) {
                    console.log(`購物車數量變更`);
                    let id = target.id;
                    let value = target.value;
                    this.shopCartContent[id][4] = value * this.shopCartContent[id][3];
                    let totalPrice = 0;
                    let discountPrice = 0
                    let difPrice = 0;
                    for (let i = 0; i < this.shopCartContent.length; i++) {
                        totalPrice = totalPrice + this.shopCartContent[i][4];
                    }

                    if (totalPrice >= 3000) {
                        this.priceCheck = true;
                        discountPrice = totalPrice * 0.11;
                        this.discountPrice = Math.round(discountPrice);
                        this.totalPrice = Math.round(totalPrice * 0.89);
                    } else {
                        this.priceCheck = false;
                        discountPrice = 0;
                        difPrice = 3000 - totalPrice;
                        this.difPrice = difPrice;
                        this.totalPrice = totalPrice;
                    }
                }
            }
        },
        methods: {
            // 首次進入頁面，將cookies內的購物車紀錄帶入並計算各項總金額
            totalPriceCal: function () {
                let totalPrice = 0;
                let discountPrice = 0;
                let difPrice = 0;

                let shopCartContent = JSON.parse(Cookies.get("shopCartMemory"));
                let shopCartBuffer = shopCartContent.map(function (item, index, array) {
                    // 該商品總金額計算並推入
                    shopCartContent[index].push(item[2] * item[3]);
                    console.log(item[2] * item[3]);
                    totalPrice = totalPrice + (item[2] * item[3]);

                })
                if (totalPrice >= 3000) {
                    this.priceCheck = true;
                    discountPrice = totalPrice * 0.11;
                    this.discountPrice = Math.round(discountPrice);
                    this.totalPrice = Math.round(totalPrice * 0.89);
                } else {
                    this.priceCheck = false;
                    difPrice = 3000 - totalPrice;
                    this.difPrice = difPrice;
                    this.totalPrice = totalPrice;
                }
                this.shopCartContent = shopCartContent;
            },

            // 以下是原先想用取得input value的方式進行價格更新，後續用別的方式取代，直接在
            // v-for產生購物車內容時跟data內的數值進行綁定，因此就可以直接監控購物車內容是否改變
            quantityCatch: function () {

            },
            quantityChange: function () {
                console.log(event);
                console.log(`選到的ID是 : ${event.currentTarget.id}`);
                console.log(`輸入的數量格式`);
                console.log(typeof(event.currentTarget.value));
                if (Number(event.currentTarget.value) <= 0) {
                    console.log('輸入的數值小於或等於0');
                    event.currentTarget.value = 1;
                    this.shopCartContent[event.currentTarget.id][2] = 1;
                    console.log(`修改後的商品數量個是 : ${typeof(event.currentTarget.value)}`)

                } else if (Number(event.currentTarget.value) > 100) {
                    event.currentTarget.value = 100;
                    this.shopCartContent[event.currentTarget.id][2] = 100;
                    console.log('輸入的數值大於100');

                    console.log(`修改後的商品數量個是 : ${typeof(event.currentTarget.value)}`)

                } else {
                    // 將變化後的商品數量回傳
                    let info = {
                        id: Number(event.currentTarget.id),
                        value: Number(event.currentTarget.value)
                    }
                    return info;
                }

            },
        },
        beforeCreate() {
            // 檢查登入狀態
            // var loginStatus = sessionStorage.getItem("login");

            // if(loginStatus == null || loginStatus == 'false'){
            //     router.push('/login');
            // }
        },
        created() {
            // this.shopCartContent = JSON.parse(Cookies.get("shopCartMemory"));
            // console.log('購物車內容讀出');
            // console.log(this.shopCartContent);
            // console.log(typeof (this.shopCartContent));
            console.log(`foreach測試開始`);
            this.totalPriceCal();
            console.log(`foreach測試結束`);
            console.log(`購物車的內容 : ${this.shopCartContent}`);

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

    /* 去除input預設的上下鍵 */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>