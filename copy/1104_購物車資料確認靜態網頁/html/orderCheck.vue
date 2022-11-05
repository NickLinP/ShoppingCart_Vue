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
                            <a href="#/orderCheck" class="d-block text-center" v-bind:id="index"
                                v-on:click="deleteProduct($event)">
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
                                v-model.lazy.number="shopCartContent[index][2]" v-bind:id="index"
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
                <li>滿 NT1,111 免運費 <span class="text-danger" v-show="fareFreeCheck">(再 {{fareFree}} 元，享更多折扣!)</span></li>
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
                <button type="button" class="btn btn-primary" style="float: right;" v-on:click="dataConfirm()">下一步 |
                    計算運費</button>
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
                fareFree: 0,
                fareFreeCheck: false,
                difPrice: 0,
                totalPrice: 0,
                quantityChange: 0,
            }
        },
        watch: {
            shopCartContent: function () {
                console.log(`購物車內容計算啟動`);
                let target = this.quantityInfoCatch();
                // console.log(`id是${target.id}`)
                // console.log(`${this.shopCartContent[target.id]}`)

                // 因為在這個程式內會修改this.shopCartContent ，導致這邊的所有程式會第二次觸發
                // 但同時已經移除掉某一筆資料，會造成第二次觸發時發生錯誤，因此在第二次訪問時直接判斷
                // 直接退出程式
                if (this.shopCartContent[target.id] == undefined) {
                    return;
                }
                if (!isNaN(target.id)) {
                    // console.log(`id取得`);
                    let id = target.id;
                    let deleteFlag = false;
                    if (this.shopCartContent[id][2] <= 0) {
                        // console.log(`商品數量小於等於0`);
                        // 如果輸入小於等於0的商品數量，則直接刪除該筆
                        deleteFlag = true;
                    }

                    else if (this.shopCartContent[id][2] > 100) {
                        // console.log(`商品數量大於100`);
                        this.shopCartContent[id][2] = 100;
                    }


                    // console.log(`差額計算啟動`);
                    // 這是本頁面計算折扣差額用↓
                    this.shopCartContent[id][4] = this.shopCartContent[id][2] * this.shopCartContent[id][3];
                    let totalPrice = 0;
                    let discountPrice = 0
                    let difPrice = 0;
                    for (let i = 0; i < this.shopCartContent.length; i++) {
                        console.log('金額總計啟動');
                        totalPrice = totalPrice + this.shopCartContent[i][4];
                    }

                    // 免運費門檻計算
                    if (totalPrice >= 1111) {
                        console.log(`高於免運門檻`);
                        this.fareFreeCheck = false;
                        this.fareFree = 0;
                    }

                    if (totalPrice < 1111) {
                        console.log(`低於免運門檻`);
                        this.fareFreeCheck = true;
                        this.fareFree = 1111 - totalPrice;
                        console.log(this.fareFree);
                    }

                    // 89折門檻計算
                    if (totalPrice >= 3000) {
                        console.log(`總金額大於3000`);
                        this.priceCheck = true;
                        discountPrice = totalPrice * 0.11;
                        this.discountPrice = Math.round(discountPrice);
                        this.totalPrice = Math.round(totalPrice * 0.89);
                    } else if (totalPrice < 3000) {
                        console.log(`總金額小於3000`);
                        this.priceCheck = false;
                        this.discountPrice = 0;
                        difPrice = 3000 - totalPrice;
                        this.difPrice = difPrice;
                        this.totalPrice = totalPrice;

                    }
                    // 這是本頁面計算折扣差額用↑    


                    if (deleteFlag) {
                        // console.log(`刪除啟動`);
                        this.shopCartContent.splice(id, 1);
                    }
                    console.log(`購物車寫回cookies`);
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
                    shopCartContent[index][4] = (item[2] * item[3]);
                    // console.log(item[2] * item[3]);
                    totalPrice = totalPrice + (item[2] * item[3]);

                })

                // 免運費門檻計算
                if (totalPrice >= 1111) {
                    console.log(`高於免運門檻`);
                    this.fareFreeCheck = false;
                    this.fareFree = 0;
                }

                if (totalPrice < 1111) {
                    console.log(`低於免運門檻`);
                    this.fareFreeCheck = true;
                    this.fareFree = 1111 - totalPrice;
                    console.log(this.fareFree);
                }

                // 89折計算
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
                // console.log(`購物車商品數量改變`);
                let info = {
                    id: Number(event.currentTarget.id),
                }
                return info;
            },
            deleteProduct: function (event) {
                let id = event.currentTarget.id;

                // 先將選到的商品數量改為0
                this.shopCartContent[id][2] = 0;
                // 透過修改this.shopCartContent觸發watch，進而判斷數量然後刪除該筆資料
                this.shopCartContent[id].push('delete');

                // 不使用splice對陣列直接處理原因是watch內判斷會無法順利觸發商品刪除
                // 這是自己一開始在規劃資料流的部分的問題
                // this.shopCartContent.splice(id, 1);
            },
            dataConfirm: function () {
                if (Cookies.get("shopCartMemory").length <= 2) {
                    alert('目前購物車沒有任何商品');
                }else{
                    console.log('可以前往下一頁');
                    router.push('/dataConfirm');
                }
            }
        },
        beforeCreate() {
            // 檢查登入狀態
            var loginStatus = sessionStorage.getItem("login");

            if (loginStatus == null || loginStatus == 'false') {
                router.push('/login');
            }
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