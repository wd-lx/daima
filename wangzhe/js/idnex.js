(function(){
    // 头部
    $(".header .nav1>li").mouseenter(function () { 
        $(this).addClass("listy");
    });
    $(".header .nav1>li").mouseleave(function () { 
        $(this).removeClass("listy");
    });
    $(".header").mouseenter(function(){

    });
    $(".header").mouseenter(function(){
        $(".main .mask").stop().slideDown(300);
        $(".header .nav2").stop().slideDown(300);
    });
    $(".header").mouseleave(function(){
        $(".main .mask").stop().slideUp(300);
        $(".header .nav2").stop().slideUp(300);
    });
    // 公告处
    $(".gg_t_u li").mouseenter(function(){
        $(this).addClass("gg_t_u_sty").siblings().removeClass("gg_t_u_sty");
        $(".gg_d_u li").eq($(this).index()).css("display","block").siblings().css("display","none");
    });
    // 轮播图
    $(function(){
        $lbt = $(".main_top .lb_d ul li");
        var l = 0;
        $lbt.mouseenter(function(){
            $(this).addClass("li_sty").siblings().removeClass("li_sty");
            l = -($(this).index())*604;
            $(".main_top .lb_u ul").stop().animate({marginLeft:l+'px'},300);
        });
        autoLb();
        function autoLb(){
            setInterval(function(){
                if(l<=-2416){l = 604;};
                l -= 604;
                var i = -l/604;
                $(".main_top .lb_u ul").stop().animate({marginLeft:l+'px'},300);
                $($lbt[i]).addClass("li_sty").siblings().removeClass("li_sty");
            },5000);
        };
    });
    // 内容中心
    // 控制内容中心一级以及二级导航栏的展示
    $(".content .m_left .l_nav ul li").mouseenter(function(){
        $(this).addClass("li_sty").siblings().removeClass("li_sty");
        $(".content .m_left .l_nav2 ul").eq($(this).index()).css("display","block").siblings().css("display","none");
    });
    $(".content .m_left .l_nav2 ul li").mouseenter(function(){
        $(this).addClass("li_sty").siblings().removeClass("li_sty");
        // 控制图片内容的展示
        $(".content .m_left .l_cen ul").eq($(this).index()).css("display","block").siblings().css("display","none");
    });
    // 英雄/皮肤
    $(".m_right .r_nav ul li").mouseenter(function(){
        $(this).addClass("li_sty").siblings().removeClass("li_sty");
        $(".r_len .r_len2").eq($(this).index()).css("display","block").siblings().css("display","none");
    });
    // 赛事中心
    $(".saishi .ss_nav ul li").mouseenter(function(){
        $(this).addClass("li_sty").siblings().removeClass("li_sty");
        $(".saishi .ss_cen_u").eq($(this).index()).css("display","block").siblings(".saishi .ss_cen_u").css("display","none");
        $(".saishi .ss_cen_d").eq($(this).index()).css("display","block").siblings(".saishi .ss_cen_d").css("display","none");
    });
})()