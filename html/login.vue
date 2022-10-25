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
                    aria-describedby="inputGroup-sizing-lg">
            </div>
            <div class="mt-2">
                <span>密碼</span>
            </div>

            <div class="input-group input-group-lg mt-2 border border-success">

                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg">
            </div>

            <div class="mt-2 text-secondary">
                <span>忘記密碼 ?</span>
            </div>

            <button class="btn btn-dark btn-lg w-100 mt-3 fw-bold">登入</button>
            <hr>
            <router-link :to="{ path: 'signup' }">
                <button class="btn btn-dark btn-lg w-100 mt-3 mb-3 fw-bold">註冊新會員</button>
            </router-link>

        </div>
        <div class="col-xl-4 col-1"></div>
    </div>
</template>

<script>
module.export = {
    data() {
        return {

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