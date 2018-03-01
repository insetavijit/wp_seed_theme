<?php


add_action( 'after_setup_theme', 'ins_theme_setup' );
function ins_theme_setup(){
  load_textdomain( 'inset' , get_template_directory() . '/language' );
  ##################|  [ commom supports ]  |###################### 
    add_theme_support( 'title-tag' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'post-thumbnail' );

    add_theme_support( 'post-formats', array(
      'aside',
      'image',
      'video',
      'quote',
      'link',
      'gallery',
      'audio',
    ));
    
    add_theme_support( 'html5', array(
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    ));
  ##################|  [ custom logo and Customisations ]  |######################
    add_theme_support( 'custom-logo' , array(
        'width'=>100,
        'height'=>100
    ));
  ##################|  [ thumbNails size ]  |###################### 

    set_post_thumbnail_size( 700, 500 , true  );

    add_image_size( 'small-wide', 500, 300, true );

  ##################|  [ navBar Support ]  |###################### 
    # we are useing 2 nav bars as default
    register_nav_menus( array(
      'primary' => __( 'Primary Menu',      'inset' ),
      'social'  => __( 'Social Links Menu', 'inset' )
    ) );
 }

/*|
||adding Widget Supports :
|*/

 add_action( 'widgets_init' , 'ins_theme_sideBars');
 function ins_theme_sideBars(){
  register_sidebar( array(
    'name'          => __( 'Header Navigation Bar', 'inset' ),
    'id'            => 'header-bar',
    'description'   => __( 'Add widgets here to appear in your sidebar.', 'inset' ),
    'before_widget' => '',
    'after_widget'  => '',
    'before_title'  => '',
    'after_title'   => '',
  ));
  register_sidebar( array(
    'name'          => __( 'footer Side bar', 'inset' ),
    'id'            => 'footer-bar',
    'description'   => __( 'Appears at the bottom of the content on posts and pages.', 'inset' ),
    'before_widget' => '',
    'after_widget'  => '',
    'before_title'  => '',
    'after_title'   => '',
  ));
 }