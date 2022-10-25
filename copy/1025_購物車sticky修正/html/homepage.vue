<template>
    <div class="">
      <!-- banner拖曳切換 slick -->
      <div class="row">
        <div class="col-xl-2"></div>
        <div class="col-lg-12 col-xl-8">
          <section class="single-item">
            <div>
              <img src="./image/homepage/kashima.jpg" />
            </div>
            <div>
              <img src="./image/homepage/689ab2cc6e05c466ece2f3ff29d8ea42.jpg" />
            </div>
            <div>
              <img src="./image/homepage/77c3e3f01e89cb473a104ae0a87b068c.jpg" />
            </div>
            <div>
              <img src="./image/homepage/95badf6a1ee8f1560f042cee637685d0.jpg" />
            </div>
            <div>
              <img src="./image/homepage/d28ea12af302a26a85c7a8170fe99040.jpg" />
            </div>
            <div>
              <img src="./image/homepage/1268c4296fb79fea448316b932cadfd1.jpg" />
            </div>
            <div>
              <img src="./image/homepage/674c6c827a9af1ecd7e3b86f866571fd.jpg" />
            </div>
            <div>
              <img src="./image/homepage/3ded5f0c807d6e78f903d60ae3a33949.jpg" />
            </div>
            <div>
              <img src="./image/homepage/f86ebbc5f9bf8892adfd275d6d892020_compressed_1.jpg" />
            </div>
          </section>
        </div>
        <div class="col-lg-12"></div>
      </div>

      <!-- slick 小圖拖曳 輪播 -->
      <div class="row">
        <div class="col-xl-2"></div>
        <div class="col-lg-12 col-xl-8">
          <section class="slideImg">
            <div>
              <img src="./image/homepage/b78cdfb667aaa564e70a28326d8ab67c.jpg" />
            </div>
            <div>
              <img src="./image/homepage/ebc601b36dd29b99c3861d1ecab8d346.jpg" />
            </div>
            <div>
              <img src="./image/homepage/2e1bf1373df59e467c961ec8f321ae0e.jpg" />
            </div>
            <div>
              <img src="./image/homepage/01cd935a2485cdb4d4c3dd017262b55b.jpg" />
            </div>
          </section>
        </div>
        <div class="col-xl-12"></div>
      </div>

      <!-- 熱賣商品 -->
      <div class="row">
        <div class="col-xl-2"></div>
        <div class="col-lg-12 col-xl-8">
          <h5 class="d-md-none">熱賣商品</h5>
          <h3 class="d-none d-md-block">熱賣商品</h3>
          <div class="hotItem d-flex align-content-start flex-wrap justify-content-between" id="hotItem">
            <div>
              <!-- <a href="./product.html" v-bind:id="hotItem[0].id">
                <img v-bind:src="hotItem[0].src" />
              </a> -->
              <router-link :to="{ path: 'product', query: { productNum: hotItem[0].id } }">
                <img v-bind:src="hotItem[0].src" />
              </router-link>
              <p>{{ hotItem[0].name }}</p>
              <p>NT{{ hotItem[0].price }}</p>
            </div>

            <div>
              <router-link :to="{ path: 'product', query: { productNum: hotItem[1].id } }">
                <img v-bind:src="hotItem[1].src" />
              </router-link>
              <p>{{ hotItem[1].name }}</p>
              <p>NT{{ hotItem[1].price }}</p>
            </div>

            <div>
              <router-link :to="{ path: 'product', query: { productNum: hotItem[2].id } }">
                <img v-bind:src="hotItem[2].src" />
              </router-link>
              <p>{{ hotItem[2].name }}</p>
              <p>NT{{ hotItem[2].price }}</p>
            </div>

            <div>
              <router-link :to="{ path: 'product', query: { productNum: hotItem[3].id } }">
                <img v-bind:src="hotItem[3].src" />
              </router-link>
              <p>{{ hotItem[3].name }}</p>
              <p>NT{{ hotItem[3].price }}</p>
            </div>

            <div>
              <router-link :to="{ path: 'product', query: { productNum: hotItem[4].id } }">
                <img v-bind:src="hotItem[4].src" />
              </router-link>
              <p>{{ hotItem[4].name }}</p>
              <p>NT{{ hotItem[4].price }}</p>
            </div>

            <div>
              <router-link :to="{ path: 'product', query: { productNum: hotItem[5].id } }">
                <img v-bind:src="hotItem[5].src" />
              </router-link>
              <p>{{ hotItem[5].name }}</p>
              <p>NT{{ hotItem[5].price }}</p>
            </div>

            <div>
              <router-link :to="{ path: 'product', query: { productNum: hotItem[6].id } }">
                <img v-bind:src="hotItem[6].src" />
              </router-link>
              <p>{{ hotItem[6].name }}</p>
              <p>NT{{ hotItem[6].price }}</p>
            </div>

            <div>
              <router-link :to="{ path: 'product', query: { productNum: hotItem[7].id } }">
                <img v-bind:src="hotItem[7].src" />
              </router-link>
              <p>{{ hotItem[7].name }}</p>
              <p>NT{{ hotItem[7].price }}</p>
            </div>
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
      hotItem: [
        {
          id: "11",
          name: "",
          src: "",
          price: "",
        },
        {
          id: "",
          name: "",
          src: "",
          price: "",
        },
        {
          id: "",
          name: "",
          src: "",
          price: "",
        },
        {
          id: "",
          name: "",
          src: "",
          price: "",
        },
        {
          id: "",
          name: "",
          src: "",
          price: "",
        },

        {
          id: "",
          name: "",
          src: "",
          price: "",
        },
        {
          id: "",
          name: "",
          src: "",
          price: "",
        },
        {
          id: "",
          name: "",
          src: "",
          price: "",
        },
      ],
      count: 0,
    };
  },
  methods: {
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
    // <!-- slick 小圖拖曳 輪播 -->

    $('.slideImg').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false
    });

    $('.single-item').slick({
      dots: true,
      arrows: false
    });
  },
};
</script>

<style scope>
/* <!-- 整體環境 --> */

.row {
  margin: 0;
  padding: 0;
}

/* 物件置中 */
.middle {
  margin: 0 auto;
}


/* <!--slick小圖拖曳輪播--> */
* {
  box-sizing: border-box;
}

.slick-slide {
  margin-top: 10px;
  padding: 0 5px 0 5px;
}

.slick-slide img {
  width: 100%;
}

/* <!-- 熱賣商品 --> */
@media (min-width: 767px) {
  .hotItem div {
    width: 300px;
    height: 250px;
    margin: 0 0 100px 0;
    /* border: 1px solid green; */
    /* background-color: lightblue; */
  }

  .hotItem p {
    text-align: center;
    width: 70%;
    font-size: 16px;
    /* border: 1px solid red; */
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .hotItem div {
    width: 150px;
    height: 125px;
    margin: 0 0 90px 0;
    /* border: 1px solid green; */
    /* background-color: lightblue; */
  }

  .hotItem p {
    text-align: center;
    width: 70%;
    font-size: 8px;
    /* border: 1px solid red; */
    margin: 0 auto;
  }
}

.hotItem img {
  /* border: 1px solid gray; */
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  height: 100%;
}

.hotItem p:nth-child(3) {
  color: red;
}
</style>
