


$(function(){


	// Insider News
	$(".insider-news .wl-R li").hover(function(){
		$(this).find(".des").stop().slideToggle();
	})

    // HCQS Service
    $(".ind-service .wl-R .video").hover(function (){
        $(".ind-service .wl-R video").attr("autoplay","");
    },function (){
        $(".ind-service .wl-R video").attr("autoplay","autoplay");
    });

    // 产品2
    $('.shop-by ul li .more').click(function(){
	    var v = $(this).data("more");
	    var sta = $(this).attr('statu');
	    if(sta == 'open'){
	    	$(".shop-by ul li .cont").removeClass("on");
          $(".shop-by ul li a").attr('statu', 'close');
          $(".shop-by ul li a").removeClass("on");
	        $(this).attr('statu', 'close');
	        $(this).removeClass("on");
	    }
	    if(sta == 'close'){
	    	$(".shop-by ul li .cont").removeClass("on");
	        $("#list"+v).find(".cont").addClass("on");
          $(".shop-by ul li a").attr('statu', 'close');
           $(".shop-by ul li a").removeClass("on");
	        $(this).attr('statu', 'open');
	        $(this).addClass("on");
	    }
		})

    $(".app-select .select-box .datas .name").click(function(){
      var v = $(this).data("sele");

      if( $(".app-select .select-box .datas").hasClass("on") ){
        $(".app-select .select-box .datas").removeClass("on");
      }
      else{
        $(".app-select .select-box .datas").removeClass("on");
        $("#sele"+v).addClass("on");
      }
    })

	// 服务1
  $(".well-item").hover(function(){
    $(this).find(".correct").children().removeClass();
    $(this).find(".opposite").children().removeClass();
    $(this).find(".correct").children().addClass("test");
    $(this).find(".opposite").children().addClass('test2');
  },function(){
    $(this).find(".correct").children().removeClass();
    $(this).find(".opposite").children().removeClass();
    $(this).find(".correct").children().addClass("test2");
    $(this).find(".opposite").children().addClass('test');
  });


  // 产品4
  $(".detail-show-box .lists li").click(function(){
  	$(".detail-show-box .lists li").removeClass("on");
  	$(this).addClass("on");

  	$(".detail-show-cont").removeClass("on");
  	$(".detail-show-box").find(".detail-show-cont").eq( $(this).index() ).addClass("on");
  })

  /*返回顶部*/
  $("#goTopBtn").click(function() {
    $('html, body').animate({scrollTop: 0},500);
  })

  $("#goTopBtn1").click(function(){
    $('body,html').animate({scrollTop:0},500);
  });



  // APP
  $(".wl-menu .home").click(function(){
    $(".wl-header .wl-nav").slideToggle();
  })

  // 公司介绍
  $(".profile-nav .boxs .name").click(function(){
    if( $(".profile-nav .boxs .name").hasClass("on") ){
      $(this).removeClass("on");
    }else{
      $(this).addClass("on");
    }
    $(".profile-nav .list").stop().slideToggle();
  })
  $(".profile-nav").find("a").click(function(){
    var v = $(this).data("name");
    $(".profile-nav .boxs .name span").html(v);
    $(".profile-nav .list").slideUp();
    $(".profile-nav .boxs .name").removeClass("on");
  })

  $('.ajax-submit').on('click', function() {
      var than  = $(this);
      var form  = $(this).parents('form');
      than.attr('disabled', true);
      /*var name = $('input[name=name]').val();
      if (name == '') {
          alert('Please enter Name');
          return false;
      };

      var email = $('input[name=email]').val();
      if (email == '') {
          alert('Please enter Email');
          return false;
      };

      var message = $('textarea[name=message]').val();
      if (message == '') {
          alert('Please enter Message');
          return false;
      };*/


      // if (true) {};
      var param = form.serialize();

      $.ajax({
          url: form.attr('action'),
          type: form.attr('method'),
          dataType: 'json',
          data: param,
          success: function(result) {
              // alert('Success');
              // location.reload();
              if (result.code === 1 && result.url != '') {
                  // send_email(param);
                  setTimeout(function() {
                      location.href = result.url;
                  }, 1000);
              } else {
                  than.attr('disabled', false);
              }
              alert(result.msg);
          }
      });
      return false;
  });

  $("#pop-close").click(function(){
    $(".wl-pop-ups").hide();
    sessionStorage.setItem("wl-pop-ups", "1");
  });

  if (sessionStorage.getItem("wl-pop-ups") != "1") {
    $(".wl-pop-ups").show();
  };

  function send_email(param)
  {
    $.ajax({
        url: '/index/index/send_email',
        type: 'post',
        dataType: 'json',
        data: param,
        success: function(result) {
          setTimeout(function() {
              location.reload();
          }, 1000);
        }
    });
  }

})


