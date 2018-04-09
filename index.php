<!DOCTYPE html>
<html>
<head>
	<title>Hello!</title>
	<style type="text/css">
		svg {
			fill: red;
			width: 25px;
			height: 25px;
		}
	</style>
</head>
<body>
	<?php require('icons/dist/sprite.svg') ?>
	<svg><use xlink:href="#circle"></use></svg>
	<svg><use xlink:href="#square"></use></svg>
	<svg><use xlink:href="#menu"></use></svg>
	<svg><use xlink:href="#close"></use></svg>
</body>
</html>