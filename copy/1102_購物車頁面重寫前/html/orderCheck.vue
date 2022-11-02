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
                                v-model.lazy="shopCartContent[index][2]" v-bind:id="index"
                                @input="quantityInfoCatch($event)">
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
                quantityChange: 0,
            }
        },
        watch: {
            shopCartContent: function () {
                let target = this.quantityInfoCatch();
                if (!isNaN(target.id)) {
                    let id = target.id;
                    if (this.shopCartContent[id][2] <= 0) {
                        // 如果輸入小於等於0的商品數量，則直接刪除該筆
                        console.log(`選到的ID是: ${id}`)

                        this.shopCartContent.splice(id, 1);
                    } else if (this.shopCartContent[id][2] > 100) {
                        this.shopCartContent[id][2] = 100;
                    }

                    // 這是本頁面計算折扣差額用↓
                    this.shopCartContent[id][4] = this.shopCartContent[id][2] * this.shopCartContent[id][3];
                    let totalPrice = 0;
                    let discountPrice = 0
                    let difPrice = 0;
                    for (let i = 0; i < this.shopCartContent.length; i++) {
                        console.log(`目前購物車的長度 : ${this.shopCartContent.length}`);
                        console.log(this.shopCartContent);
                        console.log(`i是 : ${i}`);
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
                    // 這是本頁面計算折扣差額用↑


                    // 將購物車紀錄複寫回Cookie
                    Cookies.set("shopCartMemory", JSON.stringify(this.shopCartContent));
                    // 修改商品數量後送出訊號給外層進一步觸發更新機制
                    this.quantityChange += 1;
                    this.$emit('order-check-update-shop-cart', this.quantityChange);

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
                console.log(`進入頁面初始化購物車內容是 : ${this.shopCartContent}`)
            },

            // 使用@input屬性，當商品數量變更時，取其id也就是代表在data內shopCartContent的第幾筆資料被選擇到
            quantityInfoCatch: function () {
                // 將選擇到的欄位回傳
                console.log(`購物車商品數量改變`);
                let info = {
                    id: Number(event.currentTarget.id),
                }
                return info;
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
            this.totalPriceCal();
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