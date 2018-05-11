<!doctype html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-8"> 
	<meta charset="utf-8">
		<title>DatAzul</title>
	<link href="css/stylesheet-v1.css" rel="stylesheet" type="text/css">
	<link href="css/responsive-v1.css" rel="stylesheet" type="text/css">
	<script src="js/jquery.min.js"></script>
	<script src="js/javascript-v1.js"></script>
</head>

<body>
	<div id="wrapper">
		<div class="contact_header">
			<p>
				<a href="index.html">
					<img src="img/datazul_logo.png" alt="unofficial-logo" />
				</a>
			</p>
		</div><!-- contact_header -->
		<div class="contact_process">
			<?php

			$email_to =   'cristobal.montesino@icloud.com'; 

			$name     =   $_POST['name'];  
			$email    =   $_POST['email'];  
			$tel	  =   $_POST['phone']; 
			$from     =   $_POST['from']; 
			$comment  =   $_POST['comment'];

			$headers  = "From: $email\r\n";  
			$headers .= "Reply-To: $email\r\n";
							  
			$sent = mail($name, $email, $tel, $from, $comment, $headers); 
							
			if(mail($email_to, $name, $email, $tel, $from, $comment, $headers))
			{  
				echo 
				"<p>
					<span>
						Permission Granted! Your message has been sent!
					</span>
					<span>
						What else could I say?
					</span>
				</p>";  
			}
				else
			{  
				echo 
				"<p>
					<span>
						Eh...something doesn't seem right!
					</span>
					<span>
						I can fix this problem!
					</span>
				</p>";  
			}

			?>
		</div><!-- contact_process -->
		<div class="copyright">
			<p>
				datazul strives for 100&#37; satisfaction
			</p>
		</div><!-- copyright -->
	</div><!-- wrapper -->
</body>
</html>