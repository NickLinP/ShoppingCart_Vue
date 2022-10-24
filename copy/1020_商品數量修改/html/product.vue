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
        <img
          id="mainImg"
          v-bind:src="info.imageMain"
          class="w-100 img-thumbnail d-block"
        />
        <div class="my-3">
          <img
            id="itemThumbnail0"
            v-bind:src="info.imageMain"
            class="imgChange w-25 img-thumbnail"
          />
          <img
            id="itemThumbnail1"
            v-bind:src="info.imageSecondary"
            class="imgChange w-25 img-thumbnail"
          />
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
          <input
            type="number"
            v-model="info.quantity"
            name=""
            id="productQuantity"
            class="text-center form-control inline-block"
          />
          <button v-on:click="addQuantity()" id="quantityAdd" class="btn border">
            +
          </button>
        </div>

        <div>
          <br />
          <button class="bg-danger text-light border-0 p-2">直接購買</button>
          <button class="bg-primary text-light border-0 p-2">加入購物車</button>
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
      info: {
        name: "123",
        description: [],
        price: "999",
        quantity: 1,
        imageMain: "",
        imageSecondary: "",
        productNum: this.$route.query.productNum,
      },
      shopCartBuffer: [],
    };
  },
  methods: {
    addShopCart() {},
    addQuantity() {
      if (this.info.quantity < 100) {
        this.info.quantity = Number(this.info.quantity) + 1;
        // 以下這行會出錯，如果用鍵盤輸入了一個數字，會被判別為字串型別
        // 例如輸入50在按加號，會在畫面顯示501而非51
        // this.info.quantity += 1;
        console.log(typeof this.info.quantity);
      }
    },
    reduceQuantity() {
      if (this.info.quantity > 1) {
        this.info.quantity = Number(this.info.quantity) - 1;
        // this.info.quantity -= 1;
        console.log(typeof this.info.quantity);
      }
    },
  },
  created() {
    console.log("created");

    var objTemp = this.info;
    console.log(objTemp);
    // console.log(this.productNum)
    // 訪問data內的變數使用this是正確的
    // console.log(this.hotItem[0].id);
    const url = "./json/hotItem.json";
    axios
      .get(`${url}`)
      .then(function (res) {
        console.log(`axios成功:${url}`);
        objTemp.name = res.data[objTemp.productNum].name;
        objTemp.description = res.data[objTemp.productNum].description;
        objTemp.imageMain = res.data[objTemp.productNum].imageMain;
        objTemp.imageSecondary = res.data[objTemp.productNum].imageSecondary;
        objTemp.price = res.data[objTemp.productNum].price;
      })
      .catch(function (error) {
        console.log(`axios失敗:${url}`);
        console.log(error);
      });
  },
  mounted() {
    // <!-- 商品圖片切換 -->

    $(document).ready(function () {
      console.log("圖片切換");
      $(".imgChange").on("mouseover", function () {
        // console.log(this);
        var img = $("#mainImg").attr("src", $(this).attr("src"));
        // console.log(img);
      });
    });

    // <!-- 商品數量控制 -->

    // $(document).ready(function () {
    //   var productQuantity = $("#productQuantity");
    //   console.log(productQuantity.attr("value"));

    //   $("#quantityAdd").on("click", function () {
    //     if (Number(productQuantity.attr("value")) < 999) {
    //       var value = Number(productQuantity.attr("value")) + 1;
    //       productQuantity.attr("value", value);
    //       console.log("add");
    //     }
    //   });

    //   $("#quantitySub").on("click", function () {
    //     if (Number(productQuantity.attr("value")) > 0) {
    //       var value = Number(productQuantity.attr("value")) - 1;
    //       productQuantity.attr("value", value);
    //       console.log("sub");
    //     }
    //   });
    // });
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
</style>
