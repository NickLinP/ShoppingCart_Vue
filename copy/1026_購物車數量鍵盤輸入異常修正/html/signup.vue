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
                    aria-describedby="inputGroup-sizing-lg">
            </div>

            <div class="mt-2">
                <span>
                    <span class="text-danger">*</span> 電子信箱
                </span>
            </div>
            <div class="input-group input-group-lg mt-2 border border-success">
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg">
            </div>
            <div class="mt-2">
                <span>
                    <span class="text-danger">*</span> 密碼
                </span>
            </div>

            <div class="input-group input-group-lg mt-2 border border-success">

                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg">
            </div>
            <div class="mt-2">
                <span>
                    <span class="text-danger">*</span> 確認密碼
                </span>
            </div>
            <div class="input-group input-group-lg mt-2 border border-success">
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg">
            </div>

            <hr>

            <p>
                <label for="">
                    <input type="checkbox" name="" id="">
                    <span>我已經閱讀並同意條款</span>
                    <a href="" class="text-dark fw-bold">政策條款</a>
                    <a href="" class="text-dark fw-bold">隱私權聲明</a>
                </label>
            </p>
            <button class="btn btn-dark btn-lg w-100 mt-3 mb-3 fw-bold">確定加入會員</button>
        </div>

    </div>
    <div class="col-xl-4 col-1"></div>

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