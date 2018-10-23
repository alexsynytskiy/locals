<?php
/**
 * Sample layout
 */

use Helpers\Assets;
use Helpers\Url;
use Helpers\Hooks;

//initialise hooks
$hooks = Hooks::get();
?>
<!DOCTYPE html>
<html lang="<?php echo LANGUAGE_CODE; ?>">
<head>
	<!-- Site meta -->
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=yes">
	<meta name="keywords" content="ралко, будніков, укриття, галерея, червоне, чорне" />
	<meta name="description" content="Галерея Червонечорне - Укриття Влада Ралко Володимир Будніков" />
	<link rel="shortcut icon" href="/app/templates/default/images/favicon.png" type="image/png" />
	<link rel="apple-touch-icon-precomposed" href="/app/templates/default/images/ios_page_icon.png"/>
	<?php
	//hook for plugging in meta tags
	$hooks->run('meta');
	?>
	<title><?= $data['title'] ?></title>

	<!-- CSS -->
	<?php
	Assets::css(array(
		Url::templatePath() . 'css/style.css',
		Url::templatePath() . 'css/jquery.bxslider.css',
	));

	//hook for plugging in css
	$hooks->run('css');
?>

</head>

<body>

<?php
	//hook for running code after body tag
	$hooks->run('afterBody');
?>
<div class="container">