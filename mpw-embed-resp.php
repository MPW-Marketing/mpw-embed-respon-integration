<?php
/**
 * Plugin Name: MPW Embed Resposivly Integration
 * Description: wrap Code from embedresponsivly.com around all youtube iframes unless iframe has a class applied to it
 * Version: 0.1
 * License: GPL2
 */

function mpw_responsive_embed_scripts_method() {
    wp_enqueue_script( 'embed-wrap', plugins_url( '/js/embed-wrap.js' , __FILE__ ), array( 'jQuery' ), '0.1', true );
    wp_enqueue_style( 'embed-style',  plugins_url( '/js/embed-wrap.js' , __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'mpw_responsive_embed_scripts_method' );
