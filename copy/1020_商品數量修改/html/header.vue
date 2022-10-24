<template>
  <div>
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
            <li v-on:mouseenter="shopCartShow()" v-on:mouseleave="shopCartHidden()">
              <a href="">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>( 0 件商品 NT 0 )</span>
              </a>
              <div
                id="shopCart"
                style="
                  width: 300px;
                  height: 100px;
                  background-color: white;
                  position: fixed;
                "
                class="border"
                v-show="shopCartCheck"
              >
                <!-- 透過將p的height設跟外層div相同，達到文字垂直置中的效果 -->
                <p style="text-align: center; line-height: 100px">購物車目前沒有商品</p>
              </div>
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
      src="./image/homepage/bgDark.png"
      style="position: fixed; z-index: 1001; opacity: 0.5"
    />

    <!-- 起始圖片 -->
    <div class="row" style="background-color: rgb(227, 104, 135)">
      <div class="col-xl-2"></div>
      <div class="col-lg-12 col-xl-8">
        <img
          class="middle"
          width="100%"
          src="./image/homepage/ff567e05c936d11121d23e2b19792cf3_compressed_1.jpg"
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
                  src="./image/homepage/ed992fc80829327663a94cc4d0527e0e.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem1"
                  src="./image/homepage/fdc83f8b1b004f144c59c6149a8d1004.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem2"
                  src="./image/homepage/ac0bf72c79d12f266d73bf40587aa046_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem3"
                  src="./image/homepage/45c3ab5b100ad9386cba3ffb490446c4_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem4"
                  src="./image/homepage/c2195def7236fbc66536b53e1d2ea46f_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem5"
                  src="./image/homepage/10f9646b8e85f4c2b54da6f7fa229b32.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem6"
                  src="./image/homepage/948fea9e439450e836268702b086c856_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem7"
                  src="./image/homepage/c356751aea477c350e860deea349bbfb_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem8"
                  src="./image/homepage/1e58b94806e47bd6ea25095a723cf0f2_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem9"
                  src="./image/homepage/258787a3fdc2a54b7984a1fd7b5c2608_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem10"
                  src="./image/homepage/4e7471df31c94d56a331f784fdf40d2c.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem11"
                  src="./image/homepage/df72de10fc9bdd4b5e1347c683894194.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem12"
                  src="./image/homepage/8c8e71f1bbe170e9daec2b195d63bb13_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem13"
                  src="./image/homepage/4244cdf71e9ef0bf5d2c32558f6cc171.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem14"
                  src="./image/homepage/9f58fcc96ea63e8e900f4ae8df00b782.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem15"
                  src="./image/homepage/2b91c458982360a43c0e77fd779e9e1a_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="listItem">
              <a href="">
                <img
                  id="listItem16"
                  src="./image/homepage/3de1a3648ce9c41aa383858666ba394b.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      shopCart: [],
      shopCartCheck: false,
    };
  },
  methods: {
    shopCartShow(){
      this.shopCartCheck = true;
    },
    shopCartHidden(){
      this.shopCartCheck = false;
    },
  },
  created() {
    console.log(`homepage created`);
    // 必須先透過暫存區將hotItem解構出來，在下面axios才有辦法將值傳遞回去
    let objTemp = this.hotItem;

    // 訪問data內的變數使用this是正確的
    // console.log(this.hotItem[0].id);
    const url = "./json/hotItem.json";
    axios
      .get(`${url}`)
      .then(function (res) {
        console.log(url);
        for (let i = 0; i <= 7; i++) {
          // 這個地方無法使用this訪問到data內的變數，因為是在一個function內， this會訪問到其他物件
          // console.log(this.hotItem[0].id);

          objTemp[i].id = res.data[i].productNum;
          objTemp[i].name = res.data[i].name;
          objTemp[i].src = res.data[i].imageMain;
          objTemp[i].price = res.data[i].price;
        }
      })
      .catch(function (error) {
        console.log(url);
        console.log(error);
      });
  },
  mounted() {
    // let script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "./homepage.js";
    // document.body.appendChild(script);
    // <!-- axios 取得熱門商品資料及渲染 -->
    // 開頭的;是為了避免程式碼在打包封裝時候產生的誤判，詳細搜尋IIFE

    // <!-- 手機版本 漢堡選單 -->
    const $menu = $("#navbarToggleExternalContent");

    function navList() {
      var status = false;
      console.log("navList宣告");
      return function navListControl() {
        console.log("navListControl執行");
        if (status == false) {
          $menu.addClass("menu-show");
          $(bgFilter).removeClass("hidden");
          status = true;
          return;
        } else {
          $menu.removeClass("menu-show");
          $(bgFilter).addClass("hidden");
          status = false;
          return;
        }
      };
    }

    const navListControl = navList();
    $menu.on("show.bs.collapse", function () {
      navListControl();
    });

    $menu.on("hide.bs.collapse", function () {
      navListControl();
    });

    $(bgFilter).on("click", function () {
      navListControl();
    });

    // <!-- 分類選單 圖片切換 -->

    var listArrBefore = {
      listItem0: "./image/homepage/f82ab495a650e603998d76f05aa07d16.jpg",
      listItem1: "./image/homepage/9cb5eaafe0a6a9e165b68c51a516f6e1.jpg",
      listItem2: "./image/homepage/8012627067f464914e1bc08c32f0f289_1.jpg",
      listItem3: "./image/homepage/065eebf92eb9c33d87295d57c67d4e73_1.jpg",
      listItem4: "./image/homepage/090320bbb4082c39df28d28bc28134e6_1.jpg",
      listItem5: "./image/homepage/366445f742bbd39218a1b85d1e83f916.jpg",
      listItem6: "./image/homepage/7b2430e1ee7869bf90d26bba491667a1_1.jpg",
      listItem7: "./image/homepage/ca39ff63c023f9f9ad90df49e8c083c4_1.jpg",
      listItem8: "./image/homepage/6540c51b223d105a7c4bc286253f57ed.jpg",
      listItem9: "./image/homepage/a227e4c4f89c3babca6536eed7c1ebb7_1.jpg",
      listItem10: "./image/homepage/3e8625ea40ee9fa76db92c38add9e8b8.jpg",
      listItem11: "./image/homepage/b986eeca7c8d65fe4afdaca87db77298.jpg",
      listItem12: "./image/homepage/ffdf68ffd7ebd55bd07bc2bbfe8f2193_1.jpg",
      listItem13: "./image/homepage/743961c8bb4d03d9f15abce9d9afcf72.jpg",
      listItem14: "./image/homepage/3032d4b32d0e2e8a998e7728262b111d.jpg",
      listItem15: "./image/homepage/c6fec3128ac8a47de476ff6ff2f89ca0_1.jpg",
      listItem16: "./image/homepage/f75a707e166f08f668a0d1d2bb1b5997.jpg",
    };
    var listArrAfter = {
      listItem0: "./image/homepage/ed992fc80829327663a94cc4d0527e0e.jpg",
      listItem1: "./image/homepage/fdc83f8b1b004f144c59c6149a8d1004.jpg",
      listItem2: "./image/homepage/ac0bf72c79d12f266d73bf40587aa046_1.jpg",
      listItem3: "./image/homepage/45c3ab5b100ad9386cba3ffb490446c4_1.jpg",
      listItem4: "./image/homepage/c2195def7236fbc66536b53e1d2ea46f_1.jpg",
      listItem5: "./image/homepage/10f9646b8e85f4c2b54da6f7fa229b32.jpg",
      listItem6: "./image/homepage/948fea9e439450e836268702b086c856_1.jpg",
      listItem7: "./image/homepage/c356751aea477c350e860deea349bbfb_1.jpg",
      listItem8: "./image/homepage/1e58b94806e47bd6ea25095a723cf0f2_1.jpg",
      listItem9: "./image/homepage/258787a3fdc2a54b7984a1fd7b5c2608_1.jpg",
      listItem10: "./image/homepage/4e7471df31c94d56a331f784fdf40d2c.jpg",
      listItem11: "./image/homepage/df72de10fc9bdd4b5e1347c683894194.jpg",
      listItem12: "./image/homepage/8c8e71f1bbe170e9daec2b195d63bb13_1.jpg",
      listItem13: "./image/homepage/4244cdf71e9ef0bf5d2c32558f6cc171.jpg",
      listItem14: "./image/homepage/9f58fcc96ea63e8e900f4ae8df00b782.jpg",
      listItem15: "./image/homepage/2b91c458982360a43c0e77fd779e9e1a_1.jpg",
      listItem16: "./image/homepage/3de1a3648ce9c41aa383858666ba394b.jpg",
    };

    $(".listItem").on("mouseover", function () {
      var itemId = $(this).children("a").children("img").attr("id");
      var status = $(this)
        .children("a")
        .children("img")
        .attr("src", listArrBefore[itemId]);
    });

    $(".listItem").on("mouseleave", function () {
      var itemId = $(this).children("a").children("img").attr("id");
      var status = $(this)
        .children("a")
        .children("img")
        .attr("src", listArrAfter[itemId]);
    });
  },
};
</script>

<style scope>
/* <!-- 導覽列 -- >  */
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

/* <!-- 手機版本 漢堡選單 -- >  */
#navbarToggleExternalContent {
  transform: translateX(-100%);
  transition: transform 0.35s ease;
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
</style>
