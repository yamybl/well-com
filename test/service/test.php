<?php
if ( isset( $_GET[ 'p' ] ) )
{
	echo json_encode( 'hello world!' . ' ' . $_GET[ 'p' ] );
}
else
{
	echo json_encode( 'hello world!' );
}
