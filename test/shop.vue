<template>
  <!-- 特別注意d-none d-xl-block這個用法要另外開一個div將row及其內容打包，否則會異常 -->
  <!-- 由於nav設定成sticky，也需要在父階容器的div，否則失效 -->
  <div class="d-none d-xl-block navSticky">
    <!-- 導覽列 -->
    <div class="row" style="background-color: rgb(227, 104, 135)">
      <div class="col-xl-2"></div>
      <div class="col-lg-12 col-xl-8 navbar">
        <ul>
          <li>
            <a href="">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>搜商品</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>( 0 件商品 NT 0 )</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-user"></i>
              <span>會員登入</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-xl-2"></div>
    </div>
  </div>

  <!-- 手機版本 漢堡選單 -->
  <div class="d-xl-none navSticky" style="background-color: gray">
    <nav class="navbar navbar-dark" style="background-color: rgb(227, 104, 135)">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <div class="collapse position-fixed" id="navbarToggleExternalContent">
      <div class="bg-dark">
        <ul>
          <li>
            <a href="">
              <i class="fa-solid fa-user" style="color: white"></i>
              <span>會員登入</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-magnifying-glass" style="color: white"></i>
              <span>訂單查詢</span>
            </a>
          </li>
        </ul>
        <hr class="text-light" />
        <ul>
          <li><a href="">商品首頁</a></li>
          <li><a href="">活動快訊</a></li>
          <li><a href="">肉泥專區</a></li>
          <li><a href="">貓罐頭/餐包</a></li>
          <li><a href="">貓飼料/乾糧</a></li>
          <li><a href="">貓零食/肉泥</a></li>
          <li><a href="">貓砂盆/貓砂</a></li>
          <li><a href="">狗飼料/乾糧</a></li>
          <li><a href="">狗罐頭/餐盒</a></li>
          <li><a href="">狗零食/餅乾</a></li>
          <li><a href="">營養保健品</a></li>
          <li><a href="">寵物睡窩/睡墊</a></li>
          <li><a href="">寵物玩具</a></li>
          <li><a href="">寵物居家用品</a></li>
          <li><a href="">寵物外出用品</a></li>
          <li><a href="">美容/驅蟲/除臭</a></li>
          <li><a href="">貓奴生活雜貨</a></li>
          <li><a href="">小動物專區</a></li>
        </ul>
      </div>
    </div>
  </div>

  <img
    id="bgFilter"
    class="hidden"
    src="../image/homepage/bgDark.png"
    style="position: fixed; z-index: 1001; opacity: 0.5"
  />

  <!-- 起始圖片 -->
  <div class="row" style="background-color: rgb(227, 104, 135)">
    <div class="col-xl-2"></div>
    <div class="col-lg-12 col-xl-8">
      <img
        class="middle"
        width="100%"
        src="../image/homepage/ff567e05c936d11121d23e2b19792cf3_compressed_1.jpg"
      />
    </div>
    <div class="col-xl-2"></div>
  </div>

  <!-- 分類選單 -->
  <div class="d-none d-xl-block">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="d-flex align-content-start flex-wrap">
          <div class="listItem">
            <a href="">
              <img
                id="listItem0"
                src="../image/homepage/ed992fc80829327663a94cc4d0527e0e.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem1"
                src="../image/homepage/fdc83f8b1b004f144c59c6149a8d1004.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem2"
                src="../image/homepage/ac0bf72c79d12f266d73bf40587aa046_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem3"
                src="../image/homepage/45c3ab5b100ad9386cba3ffb490446c4_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem4"
                src="../image/homepage/c2195def7236fbc66536b53e1d2ea46f_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem5"
                src="../image/homepage/10f9646b8e85f4c2b54da6f7fa229b32.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem6"
                src="../image/homepage/948fea9e439450e836268702b086c856_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem7"
                src="../image/homepage/c356751aea477c350e860deea349bbfb_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem8"
                src="../image/homepage/1e58b94806e47bd6ea25095a723cf0f2_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem9"
                src="../image/homepage/258787a3fdc2a54b7984a1fd7b5c2608_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem10"
                src="../image/homepage/4e7471df31c94d56a331f784fdf40d2c.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem11"
                src="../image/homepage/df72de10fc9bdd4b5e1347c683894194.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem12"
                src="../image/homepage/8c8e71f1bbe170e9daec2b195d63bb13_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem13"
                src="../image/homepage/4244cdf71e9ef0bf5d2c32558f6cc171.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem14"
                src="../image/homepage/9f58fcc96ea63e8e900f4ae8df00b782.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem15"
                src="../image/homepage/2b91c458982360a43c0e77fd779e9e1a_1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="listItem">
            <a href="">
              <img
                id="listItem16"
                src="../image/homepage/3de1a3648ce9c41aa383858666ba394b.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>

  <!-- 購物車進度圖示 -->
  <div class="row">
    <div class="col-xl-2"></div>
    <div class="col-xl-8 col-12">
      <ul style="float: left">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="col-xl-2"></div>
  </div>

  <!-- footer -->
  <!-- 宣導圖片 -->
  <div class="row" style="background-color: rgb(215, 100, 131); margin-top: 10px">
    <div class="col-xl-2"></div>
    <div class="col-lg-12 col-xl-8">
      <img
        src="../image/homepage/54643d73abf7b4dc489a60bda52ecbba.jpg"
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

    <div class="btn btn-secondary w-100" data-bs-toggle="collapse" data-bs-target="#link">
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
      <p>週一至週五 AM 10:00-12:00 PM 13:30-18:00)</p>
      <p>E-mail: service@quickbuy.com.tw</p>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      hello: "world",
    };
  },
};
</script>

<style scoped>
/* <!-- 整體環境 --> */

        /* body {
            background-color: aqua;   
        } */

        .row {
            margin: 0;
            padding: 0;
        }

        /* 物件置中 */
        .middle {
            margin: 0 auto;
        }


    /* <!-- 導覽列 --> */
 
        .navSticky {
            position: sticky;
            top: 0;
            z-index: 999;
            /* width: 100%; */
        }

        .navbar ul {
            display: flex;
            /* border: 1px solid gray; */
            align-items: center;
            margin: 0;
        }

        .navbar li {
            list-style: none;

        }

        .navbar ul:nth-child(2) li {
            /* float: left; */
            margin: 0 10px;
            /* border: 1px solid red; */
        }

        .navbar li a {
            text-decoration: none;
            color: white;
        }

        .navbar li a:hover {
            color: black;
        }
  

    /* <!-- 手機版本 漢堡選單 --> */

        #navbarToggleExternalContent {
            transform: translateX(-100%);
            transition: transform .35s ease;
            display: block;
            height: 100%;
            min-height: 100%;
            top: 56px;
            width: 50%;
            z-index: 9999;
        }

        #navbarToggleExternalContent.menu-show {
            transform: translateX(0%);
        }

        #navbarToggleExternalContent li {
            list-style: none;
        }

        #navbarToggleExternalContent a {
            color: white;
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
            border-bottom: 1px solid gray;
            /* border-top: 1px solid white;
            border-bottom: 1px solid white; */
        }

        .show {
            display: block;
        }

        .hidden {
            display: none;
        }

        .fa-solid {
            color: white;
        }


    /* <!-- 分類選單 --> */

        .d-flex div {
            width: 140px;
            height: 50px;
            margin: 5px;
            /* background-color: lightblue; */
        }


    /* <!-- 分類標籤 --> */

        .listLabel a {
            text-decoration: none;
            color: gray;
        }


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
