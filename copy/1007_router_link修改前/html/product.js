// <!-- 手機版本 漢堡選單 -->

    const $menu = $('#navbarToggleExternalContent');

    function navList() {
        var status = false;
        console.log('navList宣告');
        return function navListControl() {
            console.log('navListControl執行')
            if (status == false) {
                $menu.addClass('menu-show');
                $(bgFilter).removeClass('hidden');
                status = true;
                return;
            } else {
                $menu.removeClass('menu-show');
                $(bgFilter).addClass('hidden');
                status = false;
                return;
            }
        }
    }

    const navListControl = navList();
    $menu.on('show.bs.collapse', function () {
        navListControl();
    });

    $menu.on('hide.bs.collapse', function () {
        navListControl();
    });

    $(bgFilter).on('click', function () {
        navListControl();
    })



// <!-- 分類選單 圖片切換 -->

    var listArrBefore = {
        listItem0: '../image/homepage/f82ab495a650e603998d76f05aa07d16.jpg',
        listItem1: "../image/homepage/9cb5eaafe0a6a9e165b68c51a516f6e1.jpg",
        listItem2: '../image/homepage/8012627067f464914e1bc08c32f0f289_1.jpg',
        listItem3: '../image/homepage/065eebf92eb9c33d87295d57c67d4e73_1.jpg',
        listItem4: '../image/homepage/090320bbb4082c39df28d28bc28134e6_1.jpg',
        listItem5: '../image/homepage/366445f742bbd39218a1b85d1e83f916.jpg',
        listItem6: '../image/homepage/7b2430e1ee7869bf90d26bba491667a1_1.jpg',
        listItem7: '../image/homepage/ca39ff63c023f9f9ad90df49e8c083c4_1.jpg',
        listItem8: '../image/homepage/6540c51b223d105a7c4bc286253f57ed.jpg',
        listItem9: '../image/homepage/a227e4c4f89c3babca6536eed7c1ebb7_1.jpg',
        listItem10: '../image/homepage/3e8625ea40ee9fa76db92c38add9e8b8.jpg',
        listItem11: '../image/homepage/b986eeca7c8d65fe4afdaca87db77298.jpg',
        listItem12: '../image/homepage/ffdf68ffd7ebd55bd07bc2bbfe8f2193_1.jpg',
        listItem13: '../image/homepage/743961c8bb4d03d9f15abce9d9afcf72.jpg',
        listItem14: '../image/homepage/3032d4b32d0e2e8a998e7728262b111d.jpg',
        listItem15: '../image/homepage/c6fec3128ac8a47de476ff6ff2f89ca0_1.jpg',
        listItem16: '../image/homepage/f75a707e166f08f668a0d1d2bb1b5997.jpg'
    };
    var listArrAfter = {
        listItem0: '../image/homepage/ed992fc80829327663a94cc4d0527e0e.jpg',
        listItem1: '../image/homepage/fdc83f8b1b004f144c59c6149a8d1004.jpg',
        listItem2: "../image/homepage/ac0bf72c79d12f266d73bf40587aa046_1.jpg",
        listItem3: "../image/homepage/45c3ab5b100ad9386cba3ffb490446c4_1.jpg",
        listItem4: "../image/homepage/c2195def7236fbc66536b53e1d2ea46f_1.jpg",
        listItem5: "../image/homepage/10f9646b8e85f4c2b54da6f7fa229b32.jpg",
        listItem6: "../image/homepage/948fea9e439450e836268702b086c856_1.jpg",
        listItem7: "../image/homepage/c356751aea477c350e860deea349bbfb_1.jpg",
        listItem8: "../image/homepage/1e58b94806e47bd6ea25095a723cf0f2_1.jpg",
        listItem9: "../image/homepage/258787a3fdc2a54b7984a1fd7b5c2608_1.jpg",
        listItem10: "../image/homepage/4e7471df31c94d56a331f784fdf40d2c.jpg",
        listItem11: "../image/homepage/df72de10fc9bdd4b5e1347c683894194.jpg",
        listItem12: "../image/homepage/8c8e71f1bbe170e9daec2b195d63bb13_1.jpg",
        listItem13: "../image/homepage/4244cdf71e9ef0bf5d2c32558f6cc171.jpg",
        listItem14: "../image/homepage/9f58fcc96ea63e8e900f4ae8df00b782.jpg",
        listItem15: "../image/homepage/2b91c458982360a43c0e77fd779e9e1a_1.jpg",
        listItem16: "../image/homepage/3de1a3648ce9c41aa383858666ba394b.jpg"
    }


    $('.listItem').on('mouseover', function () {
        var itemId = $(this).children('a').children('img').attr('id');
        var status = $(this).children('a').children('img').attr('src', listArrBefore[itemId]);
    })

    $('.listItem').on('mouseleave', function () {
        var itemId = $(this).children('a').children('img').attr('id');
        var status = $(this).children('a').children('img').attr('src', listArrAfter[itemId]);
    })



// <!-- 商品圖片切換 -->

    $(document).ready(function () {
        $('.imgChange').on('mouseover', function () {
            // console.log(this);
            var img = $('#mainImg').attr('src', $(this).attr('src'));
            // console.log(img);
        })
    })


// <!-- 商品數量控制 -->

    $(document).ready(function () {
        var productQuantity = $('#productQuantity');
        console.log(productQuantity.attr('value'));


        $('#quantityAdd').on('click', function () {
            if (Number(productQuantity.attr('value')) < 999) {
                var value = Number(productQuantity.attr('value')) + 1;
                productQuantity.attr('value', value);
                console.log('add');
            }
        })

        $('#quantitySub').on('click', function () {
            if (Number(productQuantity.attr('value')) > 0) {
                var value = Number(productQuantity.attr('value')) - 1;
                productQuantity.attr('value', value);
                console.log('sub');
            }
        })

    })
