
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>.::Kovien ::.</title>
    <link href="css/estilos.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="favico.png">
    <link rel="stylesheet" href="css/jScrollPane.css" type="text/css" media="screen" charset="utf-8" />
    <!--<script type="text/javascript"
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js">
</script>--> 
    <script type='text/javascript' src='js/jquery-1.4.2.min.js'></script>
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/jqFancyTransitions.js"></script>
	<script src="js/jquery.fadeSliderToggle.js" type="text/javascript"></script>
	
     <script type="text/javascript" src="js/jScrollPane.js"></script>
     <script type="text/javascript" src="js/jquery.mousewheel.js"></script>
     

     
     
</head>
<body >

    <div id="contenedorGeneral">
       <div style="text-align:center; margin: auto;">
        <?php

                                                                                                        $nombre = $_POST['nombre'];
                                                                                                        $mail = $_POST['mail'];
                                                                                                        $empresa = $_POST['empresa'];
                                                                                                        $tel = $_POST['tel'];
                                                                                                        
                                                                                                        $header = 'From: ' . $mail . " \r\n";
                                                                                                        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
                                                                                                        $header .= "Mime-Version: 1.0 \r\n";
                                                                                                        $header .= "Content-Type: text/plain";
                                                                                                        
                                                                                                        $mensaje = "Este mensaje fue enviado por " . $nombre .", del telefono ".$tel. ", de la empresa " . $empresa . " \r\n";
                                                                                                        $mensaje .= "Su e-mail es: " . $mail . " \r\n";
                                                                                                        $mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
                                                                                                        $mensaje .= "Enviado el " . date('d/m/Y', time());
                                                                                                        
                                                                                                        $para = 'susanaescalantek@hotmail.com';
                                                                                                        $asunto = 'Contacto Kovi';
                                                                                                        
                                                                                                        mail($para, $asunto, utf8_decode($mensaje), $header);
                                                                                                        
                                                                                                        echo "Mensaje enviado Correctamente";
                                                                                                        
                                                                                                        ?>
	</div>
    </div>

</body>
</html>

   