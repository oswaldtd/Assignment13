<!DOCTYPE html>
<html>

    <head>
      <meta charset="utf-8" />
      <title>Backbone.js App</title>

      <link rel="stylesheet" href="css/main.css" media="screen" charset="utf-8">
    </head>

    <body>

		<div id="main" method="post" action="submit.php">
			<h1>My Services</h1>

			<p id="services">
				You chose: <?php echo htmlspecialchars(implode(array_keys($_POST), ', '));?> <br />
				<a href="index.html">Go back</a>
			</p>

		</div>

		<!-- Only used for the demos. Please ignore and remove. -->
		<script src="bower_components/jquery/dist/jquery.min.js"></script>
    </body>
</html>
