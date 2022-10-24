<template>
  <div>
    <!-- footer -->
    <!-- 宣導圖片 -->
    <div class="row" style="background-color: rgb(215, 100, 131); margin-top: 10px">
      <div class="col-xl-2"></div>
      <div class="col-lg-12 col-xl-8">
        <img
          src="./image/homepage/54643d73abf7b4dc489a60bda52ecbba.jpg"
          alt=""
          style="width: 100%"
        />
      </div>
      <div class="col-xl-2"></div>
    </div>

    <!-- 資訊功能 -->
    <div class="d-none d-lg-block" style="margin-top: 10px">
      <div class="row footerInfo">
        <div class="col-xl-2"></div>
        <div class="col-xl-1 col-lg-2">
          <h4>會員中心</h4>
          <li>購物運費說明</li>
          <li>會員中心</li>
          <li>會員等級優惠說明</li>
          <li>紅利點數說明</li>
          <li>訂購紀錄</li>
        </div>
        <div class="col-xl-1 col-lg-2">
          <h4>客戶服務</h4>
          <li>退貨申請</li>
          <li>電子發票說明</li>
          <li>超商未取說明</li>
          <li>線上客服</li>
          <li>知識小學堂</li>
        </div>
        <div class="col-xl-1 col-lg-2">
          <h4>快速連結</h4>
          <li>貓主食罐</li>
          <li>貓砂</li>
          <li>貓窩</li>
          <li>寵物飲水機</li>
          <li>貓飼料</li>
        </div>
        <div class="col-xl-1 col-lg-2">
          <h4>關於我們</h4>
          <li>店家說明</li>
          <li>政策條款</li>
          <li>隱私權聲明</li>
          <li>加入供應商</li>
        </div>
        <div class="col-xl-2 col-lg-2"></div>
        <div class="col-xl-2 col-lg-2 shopInfo">
          <h4>嚴選寵物用品</h4>
          <p>客服專線：0800-292-886</p>
          <p>手機請撥：(04)2330-6566</p>
          <p>週一至週五 AM 10:00-12:00 PM 13:30-18:00)</p>
          <p>E-mail: service@quickbuy.com.tw</p>
        </div>
        <div class="col-xl-2"></div>
      </div>
    </div>

    <!-- 手機板 資訊功能 -->
    <div class="d-lg-none" id="mobileInfo">
      <div
        class="btn btn-secondary w-100"
        data-bs-toggle="collapse"
        data-bs-target="#member"
      >
        <h6>會員中心</h6>
      </div>
      <div class="collapse multi-collapse" id="member">
        <li>購物運費說明</li>
        <li>會員中心</li>
        <li>會員等級優惠說明</li>
        <li>紅利點數說明</li>
        <li>訂購紀錄</li>
      </div>

      <div
        class="btn btn-secondary w-100"
        data-bs-toggle="collapse"
        data-bs-target="#service"
      >
        <h6>客戶服務</h6>
      </div>
      <div class="collapse multi-collapse" id="service">
        <li>退貨申請</li>
        <li>電子發票說明</li>
        <li>超商未取說明</li>
        <li>線上客服</li>
        <li>知識小學堂</li>
      </div>

      <div
        class="btn btn-secondary w-100"
        data-bs-toggle="collapse"
        data-bs-target="#link"
      >
        <h6>快速連結</h6>
      </div>
      <div class="collapse multi-collapse" id="link">
        <li>貓主食罐</li>
        <li>貓砂</li>
        <li>貓窩</li>
        <li>寵物飲水機</li>
        <li>貓飼料</li>
      </div>

      <div
        class="btn btn-secondary w-100"
        data-bs-toggle="collapse"
        data-bs-target="#aboutUs"
      >
        <h6>關於我們</h6>
      </div>
      <div class="collapse multi-collapse" id="aboutUs">
        <li>店家說明</li>
        <li>政策條款</li>
        <li>隱私權聲明</li>
        <li>加入供應商</li>
      </div>

      <div class="m-3">
        <h5>嚴選寵物用品</h5>
        <p>客服專線：0800-292-886</p>
        <p>手機請撥：(04)2330-6566</p>
        <p>週一至週五 AM 10:00-12:00 PM 13:30-18:00</p>
        <p>E-mail: service@quickbuy.com.tw</p>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
};
</script>

<style scope>
/* <!-- footer --> */
.footerInfo li {
  color: gray;
  list-style: none;
  font-size: 8px;
}

.footerInfo p {
  font-size: 8px;
}

.shopInfo {
  text-align: right;
}

/* <!-- 手機板 資訊功能 --> */
.btn-secondary {
  background-color: rgb(233, 236, 239);
}

.btn-secondary h6 {
  color: black;
}

#mobileInfo li {
  list-style: none;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  padding: 10px;
}
</style>
