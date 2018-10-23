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


</div>

<!-- JS -->
<?php

Assets::js(array(
	'//code.jquery.com/jquery-1.11.3.min.js',
	Url::templatePath() . 'js/main.js',
	Url::templatePath() . 'js/jquery.bxslider.js',
));

//hook for plugging in javascript
$hooks->run('js');

//hook for plugging in code into the footer
$hooks->run('footer');
?>

</body>
</html>
