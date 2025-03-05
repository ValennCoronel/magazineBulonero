<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '223595_mbuonero20' );
/** MySQL database username */
define( 'DB_USER', '223595-magazineb' );
/** MySQL database password */
define( 'DB_PASSWORD', 'Timb@5232' );
/** MySQL hostname */
define( 'DB_HOST', 'localhost' );
/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ky{JzLI[m` HJG.1ar3{cgD7R%e&gUPZzNosmwmSWZd!+8pA.1FZik[tjM1Iv&s@' );
define( 'SECURE_AUTH_KEY',  ';>8_+roGK57;*pPe!1a##)Jjhn?%k3V~}LAyap|/`~HREv*Snma[@l=m)sYsNlLE' );
define( 'LOGGED_IN_KEY',    '_!Q<#_Vdq/f,+EQ{fmfsoX*Mkh,l+5oZWyodVeci:&P b!)u3mhJ4Q@fS*cpVwSP' );
define( 'NONCE_KEY',        'W1F&gCS|W.plioJa)(B{(bnSIlUl8*:cPqLL?KSC]3u1Nu3V%%]e2~p-PO~FEz$7' );
define( 'AUTH_SALT',        ' dX0YFwYz!^KbES%ITO4+e6ZG5PdsT1Ko%K6^sxNQyD|_Hx|p,LVRIA~e&AW?;C^' );
define( 'SECURE_AUTH_SALT', 'Jk;QT^,s-|zQ2*m-i,-e5MbJEsC-!hh&I! 8l&oAy.C|X9Fvkc;s9mtYBnQZ&M;e' );
define( 'LOGGED_IN_SALT',   '0M/8E>((^$W)ufT<rt2njR>z<G~KWu3Su_iGP$]+Z,pCh,XM)%oco5$=bbLVxdWX' );
define( 'NONCE_SALT',       'l,]IXmryLN/YR}CiuxV7,:k?nLiYeymM`V|pKa5_1zt;4cE31E!8Nv[XIU(@@K37' );
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}
/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
define ('WP_MEMORY_LIMIT', '256M');
