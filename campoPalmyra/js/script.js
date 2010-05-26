$(document).ready(function(){
			
            
             $("#video,.fotosClase").prettyPhoto({theme:'facebook'});
             
             $("#i1").fadeIn(1000);
             $("#i2").fadeIn(2500);
             $("#i3").fadeIn(3500);
             $("#i4").fadeIn(4000);
             $("#i5").fadeIn(4500);
             $("#i6").fadeIn(5000);
             $("#i7").fadeIn(5500);
             $("#i8").fadeIn(6000);
             $("#i9").fadeIn(6500);
             $("#i10").fadeIn(7000);
             $("#inicioInfo").css({display:"block"});
             
                                $("#casa1").hover(function(){$(this).css({color:"#FFCC33"});},function(){$(this).css({color:"#FFF"});});
                                $("#casa2").hover(function(){$(this).css({color:"#FFCC33"});},function(){$(this).css({color:"#FFF"});});
                                $("#casa3").hover(function(){$(this).css({color:"#FFCC33"});},function(){$(this).css({color:"#FFF"});});
                                $("#casa4").hover(function(){$(this).css({color:"#FFCC33"});},function(){$(this).css({color:"#FFF"});});
                                $("#casa5").hover(function(){$(this).css({color:"#FFCC33"});},function(){$(this).css({color:"#FFF"});});
                                $("#casa6").hover(function(){$(this).css({color:"#FFCC33"});},function(){$(this).css({color:"#FFF"});});
             
                                $("#caracteristicasM").click(function(){
                                              
                                               $("#galeria7,#galeria2,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});
                                              $("#inicioInfo").css({display:"none"});
                                              $("#titulo").css({opacity:"0"});
                                              $("#titulo").html("Caracter&iacute;sticas");
                                              $("#titulo").fadeTo("slow",1);
                                              $("#infoCarac").fadeIn(2000);
                                              $(this).css({color:"#FFCC33"});                
                                              $("#infoInicio,#infoContacto,#infoVideo,#infoGaleria,#infoUbi,#infoCasas").css({display:"none"});
                                              $("#infoCarac").css({display:"block"});
                                              $("#galeria").css({display:"block"});
                                             
                                              
                                              
                                });
                                 $("#casasM").click(function(){
                                
                                       $("#galeria7,#galeria2,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});              
				       $("#casaPenasco,#casaManantial,#casaManantial2,#casaLaja,#casaRisco,#casaCanada").css({display:"none"});
                                              $("#inicioInfo").css({display:"none"});
                                              $("#titulo").css({opacity:"0"});
                                              $("#titulo").html("Casas");
                                              $("#titulo").fadeTo("slow",1);
                                              $("#infoCasas").fadeIn(2000);
                                              $(this).css({color:"#FFCC33"});                
                                              $("#infoInicio,#infoContacto,#infoVideo,#infoGaleria,#infoUbi,#infoCarac").css({display:"none"});
                                              $("#infoCasas").css({display:"block"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                                  $("#ubicaM").click(function(){
                                              
                                              $("#galeria7,#galeria2,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});
                                              $("#inicioInfo").css({display:"none"});
                                              $("#titulo").css({opacity:"0"});
                                              $("#titulo").html("Ubicaci&oacute;n");
                                              $("#titulo").fadeTo("slow",1);
                                              $("#infoUbi").fadeIn(2000);
                                              $(this).css({color:"#FFCC33"});                
                                              $("#infoInicio,#infoContacto,#infoVideo,#infoGaleria,#infoCarac,#infoCasas").css({display:"none"});
                                              $("#infoUbi").css({display:"block"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                                   $("#galeriaM").click(function(){
                                              
                                              $("#galeria7,#galeria2,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});
                                              $("#inicioInfo").css({display:"none"});
                                              $("#titulo").css({opacity:"0"});
                                              $(this).css({color:"#FFCC33"});
                                              $("#titulo").html("Galer&iacute;a");
                                              $("#titulo").fadeTo("slow",1);
                                              $("#infoGaleria").fadeIn(2000);
                                              $("#infoInicio,#infoContacto,#infoVideo,#infoCarac,#infoUbi,#infoCasas").css({display:"none"});
                                              $("#infoGaleria").css({display:"block"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                                    $("#videoM").click(function(){
                                              
                                              $("#galeria7,#galeria2,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});
                                              $("#inicioInfo").css({display:"none"});
                                              $("#titulo").css({opacity:"0"});
                                              $("#titulo").html("Video");
                                              $("#titulo").fadeTo("slow",1);
                                              $("#infoVideo").fadeIn(2000);
                                              $(this).css({color:"#FFCC33"});                
                                              $("#infoInicio,#infoContacto,#infoCarac,#infoGaleria,#infoUbi,#infoCasas").css({display:"none"});
                                              $("#infoVideo").css({display:"block"});
                                              $("#galeria").css({display:"block"});
                                              
                                });
                                     $("#contactoM").click(function(){
                                              
                                              $("#galeria7,#galeria2,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});
                                              $("#inicioInfo").css({display:"none"});
                                              $("#titulo").css({opacity:"0"});
                                                $("#titulo").html("Contacto");
                                              $("#titulo").fadeTo("slow",1);
                                              $("#infoContacto").fadeIn(2000);
                                              $(this).css({color:"#FFCC33"});                
                                              $("#infoInicio,#infoCarac,#infoVideo,#infoGaleria,#infoUbi,#infoCasas").css({display:"none"});
                                              $("#infoContacto").css({display:"block"});
                                              $("#galeria").css({display:"block"});
                                            
                                });
                                        $("#logo").click(function(){
                                              
                                              $("#galeria7,#galeria2,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});
                                              $("#inicioInfo").css({display:"none"});
                                              $("#titulo").css({opacity:"0"});
                                                $("#titulo").html("");
                                              $("#inicioInfo").fadeIn(2000);              
                                              $("#infoInicio,#infoCarac,#infoVideo,#infoGaleria,#infoUbi,#infoCasas,#infoContacto").css({display:"none"});
                                              $("#inicioInfo").css({display:"block"});
                                              $("#galeria").css({display:"block"});
                                            
                                });

								
													$("#casa1").click(function(){
                                                                                                                 
                                                                                                                 $("#galeria7").jqFancyTransitions({effect:"wave"});
														 $("#casaPenasco,#casaManantial,#casaManantial2,#casaLaja,#casaRisco,#galeria2,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});
														$("#casaCanada").fadeIn(1000);
                                                                                                                $("#galeria7").fadeIn(1000);
														 $("#casaCanada").css({display:"block"});
                                                                                                                 $("#galeria7").css({display:"block"});
													 });

													$("#casa2").click(function(){
                                                                                                                $("#galeria2").jqFancyTransitions({effect:"wave"});     
														$("#casaPenasco,#casaManantial2,#casaCanada,#casaLaja,#casaRisco,#galeria7,#galeria3,#galeria4,#galeria5,#galeria6").css({display:"none"});
														$("#casaManantial").fadeIn(1000);
                                                                                                                $("#galeria2").fadeIn(1000);
														 $("#casaManantial").css({display:"block"});
                                                                                                                  $("#galeria2").css({display:"block"});
													 });

													$("#casa3").click(function(){
                                                                                                                     $("#galeria3").jqFancyTransitions({effect:"wave"});
														$("#casaPenasco,#casaManantial,#casaCanada,#casaLaja,#casaRisco,#galeria7,#galeria2,#galeria4,#galeria5,#galeria6").css({display:"none"});
														$("#casaManantial2").fadeIn(1000);
                                                                                                                $("#galeria3").fadeIn(1000);
														 $("#casaManantial2").css({display:"block"});
                                                                                                                 $("#galeria3").css({display:"block"});
													 });

													$("#casa4").click(function(){
                                                                                                                     $("#galeria4").jqFancyTransitions({effect:"wave"});
														$("#casaCanada,#casaManantial,#casaLaja,#casaRisco,#casaManantial2,#galeria7,#galeria2,#galeria3,#galeria5,#galeria6").css({display:"none"});
														$("#casaPenasco").fadeIn(1000);
                                                                                                                $("#galeria4").fadeIn(1000);
														 $("#casaPenasco").css({display:"block"});
                                                                                                                 $("#galeria4").css({display:"block"});
													 });

													$("#casa5").click(function(){
                                                                                                                      $("#galeria5").jqFancyTransitions({effect:"wave"});
														$("#casaManantial2,#casaPenasco,#casaCanada,#casaManantial,#casaRisco,#galeria7,#galeria2,#galeria3,#galeria4,#galeria6").css({display:"none"});
														$("#casaLaja").fadeIn(1000);
                                                                                                                $("#galeria5").fadeIn(1000);
														 $("#casaLaja").css({display:"block"});
                                                                                                                 $("#galeria5").css({display:"block"});
													 });

													$("#casa6").click(function(){
                                                                                                                     $("#galeria6").jqFancyTransitions({effect:"wave"});
														$("#casaPenasco,#casaLaja,#casaManantial2,#casaCanada,#casaManantial,#galeria7,#galeria2,#galeria3,#galeria4,#galeria5").css({display:"none"});
														$("#casaRisco").fadeIn(1000);
                                                                                                                $("#galeria6").fadeIn(1000);
														 $("#casaRisco").css({display:"block"});
                                                                                                                  $("#galeria6").css({display:"block"});
													 });	
             $("#galeria").jqFancyTransitions();
             
             
             
             
            
             
                              
            
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