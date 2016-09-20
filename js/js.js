$(function(){
	var sect=new iScroll("section");
	//点击按钮的样式
	$("#section").on("click","input",function(){
		$(this).siblings("span").addClass("fa fa-circle").css("color","#1BA9BA").parents("label").siblings().find("span").removeClass("fa-circle").css("color","#000");
		//设置提交按钮的初始状态
		$("#btn").css({
			"background":"#1BA9BA"
		})
		//设置提交按钮点击时的状态
		$("#btn").on("click",function(){
			$("#tip").css({
				"top":"0",
				"-webkit-transition":"top 1s"
			})
		})
	})
	//点击×按钮的时候
	$("#close").on("click",function(){
		$("#tip").css({
			"top":"100%",
			"-webkit-transition":"top 1s"
		})
	})
})