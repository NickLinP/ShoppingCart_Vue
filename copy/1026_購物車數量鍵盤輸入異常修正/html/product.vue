<template>
  <div>
    <!-- 分類標籤 -->
    <div class="text-center listLabel">
      <p>
        <a href="">首頁</a>
        <span>></span>
        <a href="">寵物玩具</a>
      </p>
    </div>

    <div class="row my-5">
      <div class="col-xl-2"></div>
      <!-- 商品圖片 -->
      <div class="col-xl-4 col-12">
        <img id="mainImg" v-bind:src="info.imageMain" class="w-100 img-thumbnail d-block" />
        <div class="my-3">
          <img id="itemThumbnail0" v-bind:src="info.imageMain" class="imgChange w-25 img-thumbnail" />
          <img id="itemThumbnail1" v-bind:src="info.imageSecondary" class="imgChange w-25 img-thumbnail" />
        </div>
      </div>

      <div class="col-xl-4 col-12">
        <div>
          <p class="h1">{{ info.name }}</p>
        </div>

        <div class="mx-3">
          <p>
            <span style="color: #8e44ad">{{ info.description[0] }}</span>
            <br />
            <span style="color: #6633ff">{{ info.description[1] }}</span>
            <br />
            <span style="color: #ff33ff">{{ info.description[2] }}</span>
            <br />
            <span style="color: #e67e22">{{ info.description[3] }}</span>
            <br />
            <span style="color: #2980b9">{{ info.description[4] }}</span>
          </p>
        </div>

        <hr />

        <div class="mx-5">
          <p>付款方式：信用卡、貨到付款、超商取貨付款</p>
          <p>運送方式：</p>
          <ul>
            <li>信用卡-宅配/貨運 - 單件最高運費90元</li>
            <li>貨到付款-宅配/貨運 - 單件最高運費120元</li>
            <li>超商取貨付款 - 單件運費80元</li>
            <li>台灣外島 - 單件運費180元</li>
          </ul>
          <span>如何更便宜?→查看運費說明</span>
        </div>

        <div>
          <p class="h2 my-3 text-danger">NT {{ info.price }}</p>
        </div>

        <hr />

        <!-- 商品數量增加減少 -->
        <div class="quantityControl input-group bootstrap-touchspin w-50">
          <button v-on:click="reduceQuantity()" id="quantitySub" class="btn border">
            -
          </button>
          <input type="number" v-model="info.quantity" name="" id="productQuantity"
            class="text-center form-control inline-block" />
          <button v-on:click="addQuantity()" id="quantityAdd" class="btn border">
            +
          </button>
        </div>

        <div>
          <br />
          <button class="bg-danger text-light border-0 p-2">直接購買</button>
          <button v-on:click="addShopCart()" class="bg-primary text-light border-0 p-2">
            加入購物車
          </button>
        </div>
      </div>
      <div class="col-xl-2"></div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        // info的內容在畫面載入時會由axios取的的商品資料進行複寫
        info: {
          name: "123",
          description: [],
          price: "999",
          quantity: 1,
          imageMain: "",
          imageSecondary: "",
          productNum: this.$route.query.productNum,
        },
        pressAddShopCartCount: 0,

      };
    },
    methods: {
      addShopCart() {
        // 將產品圖片、名稱、數量、價格推到陣列內，等待顯示用
        var shopCartBuffer;
        if (Cookies.get("shopCartMemory") === undefined) {

          // 如果購物車是空的就先寫入空陣列，後續才用push帶入資料，這樣在Cookie內保存內容資料才不會出錯
          shopCartBuffer = []
          shopCartBuffer.push([
            this.info.imageMain,
            this.info.name,
            this.info.quantity,
            this.info.price,
          ]);
        } else {
          console.log(`購物車目前內容是${Cookies.get("shopCartMemory")}`);
          shopCartBuffer = JSON.parse(Cookies.get("shopCartMemory"));

          // 是否購物車已有重複商品確認，如果有重複商品，則修改數量
          var productCheck = false;
          for (let i = 0; i < shopCartBuffer.length; i++) {
            if (shopCartBuffer[i][1] == this.info.name) {
              console.log('有重複商品');
              shopCartBuffer[i][2] = shopCartBuffer[i][2] + Number(this.info.quantity);
                // console.log(`購物車內的數量格式${typeof(shopCartBuffer[i][2])}`);
                // console.log(`vue內的數量格式${typeof(this.info.quantity)}`)
              productCheck = true;
              break;
            }
          }
          console.log('跳出重複商品判斷');
          // console.log(`搜尋商品重複${shopCartBuffer[0].indexOf(this.info.name)}`);

          // 無重複商品，將該筆資料新增到購物車內
          if (productCheck == false) {
            console.log('無重複商品');
            console.log(this.info.name);
            shopCartBuffer.push([
              this.info.imageMain,
              this.info.name,
              Number(this.info.quantity),
              this.info.price,
            ]);
          }
        }

        // 按下加入購物車後送出訊號給外層進一步觸發更新機制
        // console.log('商品頁面內按下加入購物車');
        this.pressAddShopCartCount += 1;
        this.$emit('update-shop-cart', this.pressAddShopCartCount);


        // 將加入購物車的商品推到Cookies內進行保存，並且header也可以讀取到
        Cookies.set("shopCartMemory", JSON.stringify(shopCartBuffer));
        // console.log(`現在購物車內容是 : ${Cookies.get("shopCartMemory")}`);
      },

      // 商品數量修改　↓
      addQuantity() {
        if (this.info.quantity < 100) {
          this.info.quantity = Number(this.info.quantity) + 1;
          // 以下這行會出錯，如果用鍵盤輸入了一個數字，會被判別為字串型別
          // 例如輸入50在按加號，會在畫面顯示501而非51
          // this.info.quantity += 1;

          // // console.log(`目前數量是${this.info.quantity}`);
          // // console.log(`該商品金額是${this.info.price}`);
        }
      },
      reduceQuantity() {
        if (this.info.quantity > 1) {
          this.info.quantity = Number(this.info.quantity) - 1;
          // this.info.quantity -= 1;

          // // console.log(`目前數量是${this.info.quantity}`);
          // // console.log(`該商品金額是${this.info.price}`);
        }
        // 商品數量修改　↑
      },

    },
    // beforeCreate() {
    //   // 將Cookie的購物車紀錄帶入data內等待使用
    //   if (Cookies.get("shopCartMemory") !== undefined) {
    //     this.shopCartBuffer = JSON.parse(Cookies.get("shopCartMemory"));
    //     // console.log(`cookie購物車記錄是 : ${this.shopCartBuffer}`);
    //   }else{
    //     // console.log(`cookie購物車紀錄為空`);  
    //   }

    // },

    created() {
      // console.log("created");

      var objTemp = this.info;
      // console.log(objTemp);
      // // console.log(this.productNum)
      // 訪問data內的變數使用this是正確的
      // // console.log(this.hotItem[0].id);
      const url = "./json/hotItem.json";
      axios
        .get(`${url}`)
        .then(function (res) {
          // console.log(`axios成功:${url}`);
          objTemp.name = res.data[objTemp.productNum].name;
          objTemp.description = res.data[objTemp.productNum].description;
          objTemp.imageMain = res.data[objTemp.productNum].imageMain;
          objTemp.imageSecondary = res.data[objTemp.productNum].imageSecondary;
          objTemp.price = res.data[objTemp.productNum].price;
        })
        .catch(function (error) {
          // console.log(`axios失敗:${url}`);
          // console.log(error);
        });
    },
    mounted() {
      // <!-- 商品圖片切換 -->

      $(document).ready(function () {
        // console.log("圖片切換");
        $(".imgChange").on("mouseover", function () {
          // // console.log(this);
          var img = $("#mainImg").attr("src", $(this).attr("src"));
          // // console.log(img);
        });
      });
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

  /* <!-- 分類標籤 --> */

  .listLabel a {
    text-decoration: none;
    color: gray;
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