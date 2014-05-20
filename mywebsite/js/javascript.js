$(document).ready(function () {
$(".view").each(function(){$(this).click (function (e) {
e.stopPropagation()
    $("#modal").css({"display":"block","position":"fixed"})
    $("#popup").css({"display":"block","position":"fixed"})

	//alert(e.attr("src"));
	$("#popup").html("<img class='newimage'src="+$(this).attr("src")+">")
	$(".newimage").css({"width":"600","height":"525","margin":"30 auto","position":"absolute","top":"50%","left":"50%","z-index":"1","margin-top":"-265","margin-left":"-340","padding-left":"100","padding-top":"25","position":"fixed"})
$(".newimage").on('click',function(e){e.stopPropagation()})
	$("#close").css({"width":"25","height":"25","margin-left":"450","margin-top":"0","z-index":"3"})
})//addbtn fun
})
$("body").on('click',function () {
    $("#modal").css("display", "none")
    $("#popup").css("display", "none")

})//closepopup
})