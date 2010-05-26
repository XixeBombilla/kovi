$(document).ready(function(){
			
                                $("#principal1").fadeIn(1500);
                                $("#principal2").fadeIn(3500);
                                $("#principal3").fadeIn(5500);
                                $("#principal4").fadeIn(6000);
                                $("#principal5").fadeIn(6500);
                                $("#principal6").fadeIn(7000);
                                $("#principal7").fadeIn(7500);
                                $("#principal8").fadeIn(8000);
                                $("#principal9").fadeIn(8500);
                                $("#textoInfoInicio").css({display:"block"});
                                
                                $("#video,.fotosClase").prettyPhoto({theme:'facebook'});
                                
                                 $(".inicioM").click(function(){
                                              
                                               $("#galeria2,#infoNegroC,#infoNegroM,#galeria3,#galeria4,#infoNegroA").css({display:"none"});
                                              $("#textoInfoCarac,#textoInfoContacto,#textoInfoVideo,#textoInfoGaleria,#textoInfoUbi,#textoInfoCasas").css({display:"none"});
                                                               $("#principal1").fadeIn(1500);
                                                                $("#principal2").fadeIn(3500);
                                                                $("#principal3").fadeIn(5500);
                                                                $("#principal4").fadeIn(6000);
                                                                $("#principal5").fadeIn(6500);
                                                                $("#principal6").fadeIn(7000);
                                                                $("#principal7").fadeIn(7500);
                                                                $("#principal8").fadeIn(8000);
                                                                $("#principal9").fadeIn(8500);
                                              $("#textoInfoInicio").css({display:"block"});
                                               $("#galeria").css({display:"block"});
                                });
                                
                                $("#caracteristicasM").click(function(){
                                              
                                              $(this).css({color:"#FFCC33"});                
                                              $("#textoInfoInicio,#textoInfoContacto,#textoInfoVideo,#textoInfoGaleria,#textoInfoUbi,#textoInfoCasas").css({display:"none"});
                                              $("#caracteristicas1").fadeIn(1000);
                                              $("#caracteristicas2").fadeIn(3000);
                                              $("#textoInfoCarac").css({display:"block"});
                                              $("#galeria2,#infoNegroC,#infoNegroM,#galeria3,#galeria4,#infoNegroA").css({display:"none"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                                 $("#casasM").click(function(){
                                              
                                              $(this).css({color:"#FFCC33"});                
                                              $("#textoInfoInicio,#textoInfoContacto,#textoInfoVideo,#textoInfoGaleria,#textoInfoUbi,#textoInfoCarac").css({display:"none"});
                                              $("#casas1").fadeIn(1000);
                                              $("#casas2").fadeIn(3000);
                                              $("#casas3").fadeIn(3000);
                                              $("#textoInfoCasas").css({display:"block"});
                                               $("#galeria2,#infoNegroC,#infoNegroM,#galeria3,#galeria4,#infoNegroA").css({display:"none"});
                                              $("#galeria").css({display:"block"});
                                              $("#mezquite").css({color:"#FFF"});
                                              $("#cienega").css({color:"#FFF"});
                                              $("#agave").css({color:"#FFF"});
                                              
                                });
                                  $("#ubicaM").click(function(){
                                              
                                              $(this).css({color:"#FFCC33"});                
                                              $("#textoInfoInicio,#textoInfoContacto,#textoInfoVideo,#textoInfoGaleria,#textoInfoCarac,#textoInfoCasas").css({display:"none"});
                                              $("#ubica1").fadeIn(1000);
                                              $("#ubica2").fadeIn(3000);
                                              $("#ubica3").fadeIn(3000);
                                              $("#textoInfoUbi").css({display:"block"});
                                               $("#galeria2,#infoNegroC,#infoNegroM,#galeria3,#galeria4,#infoNegroA").css({display:"none"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                                   $("#galeriaM").click(function(){
                                              
                                              $(this).css({color:"#FFCC33"});                
                                              $("#textoInfoInicio,#textoInfoContacto,#textoInfoVideo,#textoInfoCarac,#textoInfoUbi,#textoInfoCasas").css({display:"none"});
                                              $("#gale1").fadeIn(1000);
                                              $("#gale2").fadeIn(3000);
                                              $("#fotos").fadeIn(3000);
                                              $("#textoInfoGaleria").css({display:"block"});
                                               $("#galeria2,#infoNegroC,#infoNegroM,#galeria3,#galeria4,#infoNegroA").css({display:"none"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                                    $("#videoM").click(function(){
                                              
                                              $(this).css({color:"#FFCC33"});                
                                              $("#textoInfoInicio,#textoInfoContacto,#textoInfoCarac,#textoInfoGaleria,#textoInfoUbi,#textoInfoCasas").css({display:"none"});
                                              $("#vi1").fadeIn(1000);
                                              $("#vi2").fadeIn(3000);
                                              $("#vi3").fadeIn(3000);
                                              $("#textoInfoVideo").css({display:"block"});
                                               $("#galeria2,#infoNegroC,#infoNegroM,#galeria3,#galeria4,#infoNegroA").css({display:"none"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                                     $("#contactoM").click(function(){
                                              
                                              $(this).css({color:"#FFCC33"});                
                                              $("#textoInfoInicio,#textoInfoCarac,#textoInfoVideo,#textoInfoGaleria,#textoInfoUbi,#textoInfoCasas").css({display:"none"});
                                              $("#co1").fadeIn(1000);
                                              $("#co2").fadeIn(3000);
                                              $("#co3").fadeIn(3000);
                                              $("#co4").fadeIn(3000);
                                              $("#textoInfoContacto").css({display:"block"});
                                               $("#galeria2,#infoNegroC,#infoNegroM,#galeria3,#galeria4,#infoNegroA").css({display:"none"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                              
                                
                                $("#galeria").jqFancyTransitions();
                           
                                $("#cienega").click(function() {
                                                                 $("#galeria2").jqFancyTransitions({effect:"wave"});
                                                                $("#infoNegroM,#galeria3,#galeria4,#infoNegroA").css({display:"none"});
                                                                $(this).css({color:"#FFCC33"});
                                                                $("#infoNegroC").fadeIn(1000);
                                                                $("#galeria2").fadeIn(1000);
                                                                $("#mezquite").css({color:"#FFF"});
                                                                $("#agave").css({color:"#FFF"});
                                                                $("#galeria2").css({display:"block"});
                                                                $("#infoNegroC").css({display:"block"});
                             
                                });
                                  $("#mezquite").click(function() {
                                                                $("#galeria3").jqFancyTransitions({effect:"wave"});
                                                                $("#infoNegroC,#galeria2,#galeria4,#infoNegroA").css({display:"none"});
                                                                $(this).css({color:"#FFCC33"});
                                                                $("#infoNegroM").fadeIn(1000);
                                                                $("#galeria3").fadeIn(1000);
                                                                $("#cienega").css({color:"#FFF"});
                                                                $("#agave").css({color:"#FFF"});
                                                                $("#galeria3").css({display:"block"});
                                                                $("#infoNegroM").css({display:"block"});
                               
                                });
                                    $("#agave").click(function() {
                                                                
                                                                $("#infoNegroC,#galeria2,#infoNegroM,#galeria3").css({display:"none"});
                                                                $(this).css({color:"#FFCC33"});
                                                                $("#infoNegroA").fadeIn(1000);
                                                                $("#galeria4").fadeIn(1000);
                                                                $("#mezquite").css({color:"#FFF"});
                                                                $("#cienega").css({color:"#FFF"});
                                                                 $("#galeria4").css({display:"block"});
                                                                $("#infoNegroA").css({display:"block"});
                                                                
                                });
                                
                               
            
});

$(document).ready(function(){
				$("#barra li").prepend("<span></span>");
				
				$("#barra li").each(function(){
					var linkText = $(this).find("a").html();
					$(this).find("span").show().html(linkText);
				});
				
				$("#barra li").hover(function(){
					$(this).find("span").stop().animate({
						marginTop: "-40"}, 250);
				}, function(){
					$(this).find("span").stop().animate({
						marginTop:"0"
					},250);
				});
			});