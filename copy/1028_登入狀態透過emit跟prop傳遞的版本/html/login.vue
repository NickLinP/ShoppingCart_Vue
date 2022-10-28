<template>
    <div class="row">
        <div class="col-xl-4 col-1"></div>
        <div class="col-xl-4 col-10">

            <!-- 分類標籤 -->
            <div class="text-center listLabel">
                <p>
                    <a href="">首頁</a>
                    <span>></span>
                    <a href="">會員</a>
                    <span>></span>
                    <a href="">登入</a>
                </p>
            </div>
            <h2 class="text-center fw-bold">會員登入</h2>
            <hr>
            <div class="mt-2">
                <span>電子信箱</span>
            </div>
            <div class="input-group input-group-lg mt-2 border border-success">
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" v-model="input.account">
            </div>
            <p class="text-danger" v-show="input.accountCheck">請輸入帳號</p>
            <p class="text-danger" v-show="input.accountSame">帳號錯誤</p>

            <div class="mt-2">
                <span>密碼</span>
            </div>

            <div class="input-group input-group-lg mt-2 border border-success">

                <input type="password" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" v-model="input.password">
            </div>
            <p class="text-danger" v-show="input.passwordCheck">請輸入密碼</p>
            <p class="text-danger" v-show="input.passwordSame">密碼輸入錯誤</p>

            <div class="mt-2 text-secondary">
                <span>忘記密碼 ?</span>
            </div>

            <button class="btn btn-dark btn-lg w-100 mt-3 fw-bold" v-on:click="login()">登入</button>
            <hr>
            <router-link :to="{ path: 'signup' }">
                <button class="btn btn-dark btn-lg w-100 mt-3 mb-3 fw-bold">註冊新會員</button>
            </router-link>

        </div>
        <div class="col-xl-4 col-1"></div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            input: {
                account: '',
                accountCheck: false,
                accountSame: false,
                password: '',
                passwordCheck: false,
                passwordSame: false
            },
            loginStatus: {
                check: false,
                name: '',
            },
            // 先直接取字串格式，程式內在透過JSON方法處理，在這邊直接處理會有問題
            memberData: sessionStorage.getItem('member')
        }
    },
    methods: {
        login: function () {

            // 資料輸入狀態初始化
            this.input.accountCheck = false;
            this.input.accountSame = false;
            this.input.passwordCheck = false;
            this.input.passwordSame = false;

            // 帳號密碼空白檢查
            if (this.input.account == '') {
                console.log('請輸入帳號');
                this.input.accountCheck = true;
                return;
            }

            if (this.input.password == '') {
                console.log('請輸入密碼');
                this.input.passwordCheck = true;
                return;
            }

            // 帳號密碼輸入是否正確檢查
            var memberData = JSON.parse(this.memberData);
            var memberId = 0;

            for (let i = 0; i < memberData.length; i++) {
                console.log(`迴圈編號 : ${i}`);
                if (this.input.account == memberData[i].account) {
                    console.log('帳戶輸入正確');
                    console.log(`會員編號是 : ${memberId}`);
                    memberId = i;
                    break;
                } else if (i == memberData.length - 1) {
                    console.log('帳戶輸入錯誤');
                    this.input.accountSame = true;
                    return;
                }
            }

            if (this.input.password == memberData[memberId].password) {
                console.log('帳號密碼輸入正確');
                // 將會員資料傳出使用
                this.loginStatus.check = true;
                this.loginStatus.name = memberData[memberId].name;
                console.log(this.loginStatus.check);
                console.log(this.loginStatus.name);
                this.$emit('login-status', this.loginStatus);
            } else {
                console.log('密碼輸入錯誤');
                this.input.passwordSame = true;
                return;
            }
        }
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