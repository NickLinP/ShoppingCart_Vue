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
            <div class="col-xl-1"></div>
            <div class="col-xl-4 col-12">
                <p class="h3 fw-bolder">取貨方式</p>

                <div class="form-check border-top py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                    <label class="form-check-label" for="flexRadioDefault1">
                        國內一般宅配(本島)
                    </label>
                </div>
                <div class="form-check border-top py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                        郵局(外島)-退換貨自付
                    </label>
                </div>
                <hr>
                <!-- 商品購買人資料 -->
                <p class="h3 fw-bolder">商品購買人</p>
                <!-- 姓名 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請填寫真實姓名，以免無法取貨">
                </div>
                <!-- 電話 -->
                <div>
                    <input type="tel" class="fs-5 w-100 my-2" placeholder="手機號碼">
                </div>
                <!-- 電子信箱 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="電子信箱">
                </div>

                <!-- 鄉鎮選擇 -->
                <div id="" class="twzipcode fs-5 w-100 my-2">
                    <div data-role="zipcode" data-value="信義區" style="display: none;"></div>
                    <div></div>
                </div>
                <!-- 地址輸入 -->
                <div>
                    <input type="text" class="fs-5 w-100 my-2" placeholder="請輸入詳細地址">
                </div>
                <hr>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="dataSame">
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
                <div id="" class="twzipcode fs-5 w-100 my-2">
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
                    <input class="form-check-input" type="radio" name="payMethio" id="creditCard" checked>
                    <label class="form-check-label" for="creditCard">
                        信用卡
                    </label>
                </div>
                <div class="form-check border-top py-3">
                    <input class="form-check-input" type="radio" name="payMethio" id="cash">
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
                    <input class="form-check-input" type="checkbox" value="" id="ruleAgree">
                    <label class="form-check-label" for="ruleAgree">
                        我已閱讀並同意 政策條款
                    </label>
                </div>
                <button class="btn btn-success fs-3 w-100 my-3">下一步 | 進行結帳</button>
            </div>

            <div class="col-xl-1"></div>

            <!-- 訂單內的商品顯示 -->
            <div class="col-xl-1"></div>
            <div class="col-xl-4 col-12">
                <div style="position: sticky; top: 50px;">

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="./image/homepage/-2_1.jpg" alt="" class="border" style="height: 100px;">
                                </td>
                                <td class="align-text-top">
                                    喜樂寵宴 極寵宴 生食冷凍乾燥飼料-骨骼腦部發育 (幼貓成長配方-鮮嫩雞肉+鴨肉 )500g
                                </td>
                                <td style="width: 100px;"></td>
                                <td class="text-end">NT1000</td>
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
                                <td class="text-end">NT 9999</td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td>
                                    <a href="#dataConfirm">
                                        <i class="fa-solid fa-caret-down" style="color:rgb(162,172,185);"></i>
                                    </a>
                                    運費/手續費
                                </td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td class="text-start">國內一般宅配(本島)</td>
                                <td class="text-end">NT 9999</td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td>
                                    <a href="#dataConfirm">
                                        <i class="fa-solid fa-caret-down" style="color:rgb(162,172,185);"></i>
                                    </a>
                                    優惠折扣
                                </td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td class="text-start">折抵運費(全館活動):</td>
                                <td class="text-end">NT -9999</td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td class="text-start">滿額折扣:</td>
                                <td class="text-end">NT -9999</td>
                            </tr>
                            <tr class="text-danger fs-3">
                                <td class="text-start">結帳金額 </td>
                                <td class="text-end">NT 9999</td>
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
            return {}
        },
        mounted() {
            // 縣市選單
            $('.twzipcode').twzipcode();
            $('.twzipcode > select').addClass('w-50')
            // $('.zipCode > select').addClass('form-select');
            // $('.country > select').attr('id', 'country');
            // $('.country > select').attr('style', 'font-size:24px; border: 2px solid rgb(179, 178, 178);');
            // $('.township > select').attr('id', 'township');
            // $('.township > select').attr('style', 'font-size:24px; border: 2px solid rgb(179, 178, 178);');
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
</style>