<?php 

/*| date : 2018-03-01 12:19:12
||  List Down all Scripts you need to run
||  we got 2 Sections Here :
||  1. admin Enqueue
||  2. fontEnd enqueue
|*/

add_action( 'wp_enqueue_scripts', 'ins_fontEnd_js_and_css'  );
function ins_fontEnd_js_and_css(){
    ##################|  [ StyleSheet - fontEnd ]  |###################### 

        wp_register_style( 'fontStyle', get_template_directory_uri() . '/inc/css/fontStyle/fontStyle.css', array(), 'all' );

    ##################|  [ Scripts - fontEnd ]  |###################### 
        wp_register_script( 'fontScripts', get_template_directory_uri() . '/inc/js/fontScripts/fontScript.js', array('jquery'), true );

    ##################|  [ enqueing all ]  |###################### 
    
        $stylEnqueu = [
            'fontStyle'
        ];
        $scriptEnque = [
            'fontScripts'
        ];

        foreach ($stylEnqueu as $style ) { wp_enqueue_style( $style ); }
        foreach ($scriptEnque as $script ) { wp_enqueue_script( $script ); }

}

add_action( 'admin_enqueue_scripts', 'ins_admin_js_and_css'  );
function ins_admin_js_and_css(){
    ##################|  [ StyleSheet - fontEnd ]  |###################### 

        wp_register_style( 'adminStyle', get_template_directory_uri() . '/inc/css/adminStyle/adminStyle.css', array(), 'all' );

    ##################|  [ Scripts - fontEnd ]  |###################### 
        wp_register_script( 'adminScripts', get_template_directory_uri() . '/inc/js/adminScripts/adminScripts.js', array('jquery'), true );

    ##################|  [ enqueing all ]  |###################### 
    
        $stylEnqueu_adm = [
            'adminStyle'
        ];
        $scriptEnque_adm = [
            'adminScripts'
        ];

        foreach ($stylEnqueu_adm as $style ) { wp_enqueue_style( $style ); }
        foreach ($scriptEnque_adm as $script ) { wp_enqueue_script( $script ); }

}



