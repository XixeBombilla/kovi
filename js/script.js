$(document).ready(function(){
                                 
                               
                                 
                                 $("#inicio").click(function(){
                                               
                                              $("#galeria1").css({display:"none"});                  
                                              $("#menuConoce,#menuDesa,#menuQ,#menuComo,#menuContacto").css({display:"none"});
                                              $("#quienesM,#desarrolloM,#comoM,#contactoM,#conocenosM").css({color:"#fff"});
                                              $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                              $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                });
                                 			
                                 $("#quienesM").click(function(){
                                                
                                              $("#galeria1").css({display:"none"});                  
                                              $("#menuConoce,#menuDesa,#menuComo,#menuContacto").css({display:"none"});     
                                              $("#menuQ").fadeIn(1000);
                                              $("#menuQ").css({display:"block"});
                                              $(this).css({color:"#333333"});
                                               $("#desarrolloM,#conocenosM,#comoM,#contactoM").css({color:"#fff"});
                                               $("#cuadroQuienes").css({display:"none"});
                                               $("#menuM,#menuL,#menuV").css({color:"#fff"});
                                              $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                              $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                                            
                                                                
                                });
                                 
                                    $("#conocenosM").click(function(){
                                                                
                                              $("#galeria1").css({display:"none"});
                                               $("#menuQ,#menuDesa,#menuComo,#menuContacto").css({display:"none"});
                                              $("#menuConoce").fadeIn(1000);
                                              $("#menuConoce").css({display:"block"});
                                              $(this).css({color:"#333333"});
                                              $("#quienesM,#desarrolloM,#comoM,#contactoM").css({color:"#fff"});
                                              $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                              $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                                            
                                                                
                                });
                                    
                                     $("#desarrolloM").click(function(){
                                                                
                                              $("#galeria1").css({display:"none"});
                                               $("#menuQ,#menuConoce,#menuComo,#menuContacto").css({display:"none"});
                                              $("#menuDesa").fadeIn(1000);
                                              $("#menuDesa").css({display:"block"});
                                              $(this).css({color:"#333333"});
                                              $("#quienesM,#conocenosM,#comoM,#contactoM").css({color:"#fff"});
                                              $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                              $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                              
                                                            
                                                                
                                });   
                                 
                                       $("#comoM").click(function(){
                                                                
                                              $("#galeria1").css({display:"none"});
                                               $("#menuQ,#menuConoce,#menuDesa,#menuContacto").css({display:"none"});
                                              $("#menuComo").fadeIn(1000);
                                              $("#menuComo").css({display:"block"});
                                              $(this).css({color:"#333333"});
                                              $("#quienesM,#conocenosM,#desarrolloM,#contactoM").css({color:"#fff"});
                                              $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                              $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                              
                                                            
                                                                
                                });
                                       
                                        $("#contactoM").click(function(){
                                                                
                                              $("#galeria1").css({display:"none"});
                                               $("#menuQ,#menuConoce,#menuDesa,#menuComo").css({display:"none"});
                                              $("#menuContacto").fadeIn(1000);
                                              $("#menuContacto").css({display:"block"});
                                              $(this).css({color:"#333333"});
                                              $("#quienesM,#conocenosM,#desarrolloM,#comoM").css({color:"#fff"});
                                              $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                              $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                                            
                                                                
                                });         
                                 
                                 
                                 $("#menuM").click(function(){
                                                                
                                              $("#cuadroQuienes").css({display:"none"});
                                               $("#parrafoQuienes").html("Comercializar conceptos habitacionales<br/> con altos est&aacute;ndares de calidad y<br/> profesionalismo, que ofrezcen a las<br/> familias comodidad, seguridad y alta plusvalia");
                                               $("#cuadroQuienes").fadeIn(1000);
                                               $("#cuadroQuienes").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                               $("#menuV,#menuL").css({color:"#fff"});
                                              
                                                            
                                                                
                                });
                                     $("#menuV").click(function(){
                                                                
                                                $("#cuadroQuienes").css({display:"none"});
                                               $("#parrafoQuienes").html("Consolidar a la empresa como la mejor comercializadora de conceptos habitacionales innovadores");
                                               $("#cuadroQuienes").fadeIn(1000);
                                               $("#cuadroQuienes").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                               $("#menuM,#menuL").css({color:"#fff"});
                                              
                                                            
                                                                
                                });
                                     
                                    $("#menuL").click(function(){
                                                                
                                                $("#cuadroQuienes").css({display:"none"});
                                               $("#parrafoQuienes").html("Servir al cliente es nuestra raz&oacute;n de ser");
                                               $("#cuadroQuienes").fadeIn(1000);
                                               $("#cuadroQuienes").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                               $("#menuM,#menuV").css({color:"#fff"});
                                              
                                                            
                                                                
                                });
                                    
                                    $("#conoce1").click(function(){
                                               
                                               
                                               $("#galeria1").html('<img src="imgFondos/02.jpg"/>');
                                                $("#conocep2,#conocep3,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                               $("#conocep1").slideDown("fast");
                                               $("#conocep1").fadeIn(1000);  
                                               $("#conocep1").css({display:"block"});
                                               $("#galeria1").fadeIn(1000);  
                                               $("#galeria1").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                               $("#conoce2,#conoce3,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                                 $('#parrafoConoce1').jScrollPane({
                                                                  scrollbarWidth: 10,
                                                                  scrollbarMargin: 10,
                                                                  showArrows: false
                                               });
                                 
                                                            
                                                                
                                });
                                       $("#conoce2").click(function(){
                                               
                                               $("#galeria1").html('<img src="imgFondos/04.jpg"/>');
                                                $("#conocep1,#conocep3,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                               $("#conocep2").slideDown("fast");
                                               $("#conocep2").fadeIn(1000);  
                                               $("#conocep2").css({display:"block"});
                                                $("#galeria1").fadeIn(1000);  
                                               $("#galeria1").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                                $("#conoce1,#conoce3,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                                 $('#parrafoConoce2').jScrollPane({
                                                                  scrollbarWidth: 10,
                                                                  scrollbarMargin: 10,
                                                                  showArrows: false
                                               });
                                 
                                                            
                                                                
                                });
                                      $("#conoce3").click(function(){
                                               
                                               $("#galeria1").html('<img src="imgFondos/08.jpg"/>');
                                                $("#conocep1,#conocep2,#conocep4,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                               $("#conocep3").slideDown("fast");
                                               $("#conocep3").fadeIn(1000);  
                                               $("#conocep3").css({display:"block"});
                                                $("#galeria1").fadeIn(1000);  
                                               $("#galeria1").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                                $("#conoce1,#conoce2,#conoce4,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                                 $('#parrafoConoce3').jScrollPane({
                                                                  scrollbarWidth: 10,
                                                                  scrollbarMargin: 10,
                                                                  showArrows: false
                                               });
                                 
                                                            
                                                                
                                });
                                         $("#conoce4").click(function(){
                                               
                                               $("#galeria1").html('<img src="imgFondos/09.jpg"/>');
                                                $("#conocep1,#conocep2,#conocep3,#conocep5,#conocep6,#conocep7").css({display:"none"});
                                               $("#conocep4").slideDown("fast");
                                               $("#conocep4").fadeIn(1000);  
                                               $("#conocep4").css({display:"block"});
                                                $("#galeria1").fadeIn(1000);  
                                               $("#galeria1").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                                $("#conoce1,#conoce2,#conoce3,#conoce5,#conoce6,#conoce7").css({color:"#FFF"});
                                                 $('#parrafoConoce4').jScrollPane({
                                                                  scrollbarWidth: 10,
                                                                  scrollbarMargin: 10,
                                                                  showArrows: false
                                               });
                                 
                                                            
                                                                
                                });        
                                 
                                          $("#conoce5").click(function(){
                                               
                                               $("#galeria1").html('<img src="imgFondos/06.jpg"/>');
                                                $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep6,#conocep7").css({display:"none"});
                                               $("#conocep5").slideDown("fast");
                                               $("#conocep5").fadeIn(1000);  
                                               $("#conocep5").css({display:"block"});
                                                $("#galeria1").fadeIn(1000);  
                                               $("#galeria1").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                                $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce6,#conoce7").css({color:"#FFF"});
                                                 $('#parrafoConoce5').jScrollPane({
                                                                  scrollbarWidth: 10,
                                                                  scrollbarMargin: 10,
                                                                  showArrows: false
                                               });
                                 
                                                            
                                                                
                                });
                                 $("#conoce6").click(function(){
                                               
                                               $("#galeria1").html('<img src="imgFondos/11.jpg"/>');
                                                $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep5,#conocep7").css({display:"none"});
                                               $("#conocep6").slideDown("fast");
                                               $("#conocep6").fadeIn(1000);  
                                               $("#conocep6").css({display:"block"});
                                                $("#galeria1").fadeIn(1000);  
                                               $("#galeria1").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                                $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce5,#conoce7").css({color:"#FFF"});
                                                 $('#parrafoConoce6').jScrollPane({
                                                                  scrollbarWidth: 10,
                                                                  scrollbarMargin: 10,
                                                                  showArrows: false
                                               });
                                 
                                                            
                                                                
                                });
                                   $("#conoce7").click(function(){
                                               
                                               $("#galeria1").html('<img src="imgFondos/07.jpg"/>');
                                                $("#conocep1,#conocep2,#conocep3,#conocep4,#conocep5,#conocep6").css({display:"none"});
                                               $("#conocep7").slideDown("fast");
                                               $("#conocep7").fadeIn(1000);  
                                               $("#conocep7").css({display:"block"});
                                                $("#galeria1").fadeIn(1000);  
                                               $("#galeria1").css({display:"block"});
                                               $(this).css({color:"#999999"});
                                                $("#conoce1,#conoce2,#conoce3,#conoce4,#conoce5,#conoce6").css({color:"#FFF"});
                                                 $('#parrafoConoce7').jScrollPane({
                                                                  scrollbarWidth: 10,
                                                                  scrollbarMargin: 10,
                                                                  showArrows: false
                                               });
                                 
                                                            
                                                                
                                });   
                                 
            
});

$(function(){
                                
                                
                                $("#galeria").jqFancyTransitions();
                               
                                

                                
});



                                