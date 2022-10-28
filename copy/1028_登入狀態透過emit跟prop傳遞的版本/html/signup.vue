<template>
    <div class="row">
        <div class="col-xl-4 col-1"></div>
        <div class="col-xl-4 col-10">

            <!-- 分類標籤 -->
            <div class="text-center listLabel">
                <p>
                    <a href="">首頁</a>
                    <span>></span>
                    <router-link :to="{ path: 'login'}">
                        <span>會員登入</span>
                      </router-link>
                    <span>></span>
                    <a href="">註冊</a>
                </p>
            </div>

            <h2 class="text-center fw-bold">會員註冊</h2>

            <div class="mt-2">
                <span>
                    <span class="text-danger">*</span> 姓名
                </span>
            </div>
            <div class="input-group input-group-lg mt-2 border border-success">
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" v-model="input.name">
            </div>
            <p class="text-danger" v-show="dataCheck.name">請輸入姓名</p>

            <div class="mt-2">
                <span>
                    <span class="text-danger">*</span> 電子信箱
                </span>
            </div>
            <div class="input-group input-group-lg mt-2 border border-success">
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" v-model="input.account">
            </div>
            <p class="text-danger" v-show="dataCheck.account">輸入電子信箱</p>
            <p class="text-danger" v-show="dataCheck.accountSame">電子信箱重複註冊</p>

            <div class="mt-2">
                <span>
                    <span class="text-danger">*</span> 密碼
                </span>
            </div>

            <div class="input-group input-group-lg mt-2 border border-success">

                <input type="password" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" v-model="input.password">
            </div>
            <p class="text-danger" v-show="dataCheck.password">請輸入密碼</p>

            <div class="mt-2">
                <span>
                    <span class="text-danger">*</span> 確認密碼
                </span>
            </div>
            <div class="input-group input-group-lg mt-2 border border-success">
                <input type="password" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" v-model="input.passwordCheck">
            </div>
            <p class="text-danger" v-show="dataCheck.passwordCheck">再次輸入密碼</p>
            <p class="text-danger" v-show="dataCheck.passwordSame">確認密碼輸入錯誤</p>

            <hr>

            <div>
                <label for="">
                    <input type="checkbox" name="" id="" v-model="input.agreeRule">
                    <span>我已經閱讀並同意條款</span>
                    <a href="" class="text-dark fw-bold">政策條款</a>
                    <a href="" class="text-dark fw-bold">隱私權聲明</a>
                </label>
            </div>
            <p class="text-danger" v-show="dataCheck.agreeRule">尚未勾選同意條款</p>
            <button class="btn btn-dark btn-lg w-100 mt-3 mb-3 fw-bold" v-on:click="signup()">確定加入會員</button>
        </div>
        <div class="col-xl-4 col-1"></div>
    </div>


</template>

<script>
    module.exports = {
        data() {
            return {
                input:
                {
                    name: '',
                    account: '',
                    password: '',
                    passwordCheck: '',
                    agreeRule: 0,
                },
                dataCheck: {
                    name: false,
                    account: false,
                    accountSame: false,
                    password: false,
                    passwordSame: false,
                    passwordCheck: false,
                    agreeRule: false
                }
            }
        },
        methods: {
            signup: function () {

                let inputDataCheck = this.signupDataCheck();

                // 帳號重複確認不應該在這裡執行，否則再帳號出現重複時同時會執行其他資料空白檢查
                // ，這樣會同時顯示其他訊息，改移動到signupDataCheck()內檢查
                // let accountSameCheck = this.accountSameCheck();
                // console.log(`帳號是否重複 : ${accountSameCheck}`);
                // if (accountSameCheck) {
                //     console.log(`帳號重複`);
                //     this.dataCheck.accountSame = true;
                //     return false;
                // }

                if (inputDataCheck) {
                    var data = {
                        id: JSON.parse(sessionStorage.getItem('member')).length,
                        name: this.input.name,
                        account: this.input.account,
                        password: this.input.password
                    }

                    var memberData = JSON.parse(sessionStorage.getItem('member'));
                    memberData.push(data);

                    sessionStorage.setItem('member', JSON.stringify(memberData));
                    console.log(`session內更新後的會員資料是`);
                    console.log(sessionStorage.getItem('member'));
                    alert('註冊完成');
                    // 用來跳轉回登入頁面
                    router.push("/login");
                }
            },
            signupDataCheck: function () {
                // 錯誤訊息狀態初始化
                this.dataCheck.name = false;
                this.dataCheck.account = false;
                this.dataCheck.accountSame = false;
                this.dataCheck.password = false;
                this.dataCheck.passwordCheck = false;
                this.dataCheck.passwordSame = false;
                this.dataCheck.agreeRule = false;

                if (this.input.agreeRule == false) {
                    console.log(`尚未同意條款`);
                    this.dataCheck.agreeRule = true;
                    return false;
                }

                if (this.input.name == '') {
                    console.log(`請輸入姓名`);
                    this.dataCheck.name = true;
                    return false;
                }

                if (this.input.account == '') {
                    console.log(`請輸入帳號`);
                    this.dataCheck.account = true;
                    return false;
                }

                let accountSameCheck = this.accountSameCheck();
                console.log(`帳號是否重複 : ${accountSameCheck}`);
                if (accountSameCheck) {
                    console.log(`帳號重複`);
                    this.dataCheck.accountSame = true;
                    return false;
                }

                if (this.input.password == '') {
                    console.log(`請輸入密碼`);
                    this.dataCheck.password = true;
                    return false;
                }
                if (this.input.passwordCheck == '') {
                    console.log(`請再次輸入密碼`);
                    this.dataCheck.passwordCheck = true;
                    return false;
                }
                if (this.input.password != this.input.passwordCheck) {
                    console.log(`兩次輸入的密碼不相同`);
                    this.dataCheck.passwordSame = true;
                    return false;
                }
                console.log(`資料全部都有輸入`);
                return true;
            },
            accountSameCheck: function () {

                console.log(`帳號檢查函式執行 : 觸發密碼${this.dataCheck.password}`);
                let memberBuffer = JSON.parse(sessionStorage.getItem('member'));
                var check = false;
                console.log(memberBuffer);
                for (let i = 0; i < memberBuffer.length; i++) {
                    if (this.input.account == memberBuffer[i].account) {
                        console.log('該信箱已經被註冊');
                        check = true;
                        break;
                    }
                }
                return check;
            },
        },
        created() {
            // sessionStorage.setItem('member', JSON.stringify(this.member)); 
            // console.log(`1現在的會員資料有 : ${JSON.stringify(sessionStorage.getItem('member'))}`)

            // ----物件的操作以及讀取方式測試，已歸檔到筆記 1026 
            // var apple = this.member;
            // // push有效，但只會看到[object object]
            // console.log(apple.length);
            // apple.push({'aaa':'123'});
            // apple[0].id = 123;
            // console.log(`預設的會員資料 : ${apple}`);
            // console.log(typeof (apple));

            // // 透過JSON.stringify將該物件序列化後，才可以看到真正的格式
            // console.log(`JSON.stringify後的 : ${JSON.stringify(apple)}`);
            // console.log(typeof (JSON.stringify(apple)));

            // // JSON.pares會再將資料轉換成物件，因此會看到[object object]
            // console.log(`JSON.pares後的${JSON.parse(JSON.stringify(apple))}`);
            // console.log(typeof(JSON.parse(JSON.stringify(apple))));
        },
    }
</script>

<style scoped>
    /* <!-- 分類標籤 --> */
    .listLabel a {
        text-decoration: none;
        color: gray;
    }
</style>