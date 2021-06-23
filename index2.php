<html>
    <head>
        <title>Meu Primeiro site em PHP ! Woohoo !</title> 

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        
        <style> 
            .linha {
                font-weight: bold;
                color: green;
                padding: auto;
                line-height: 80px

            }
        </style>
    </head>
    <body>
    <?php
		for ($i = 0 ; $i < 20 ; $i++ ) {
			print ( "<span class=\"linha\">Linha número " . $i ."</span> <br />");
		}
	?>
    </body>
    
    <script>
        $ (document).ready(function() {
            alert ("Wooohoo");
        });
    </script>


</html>