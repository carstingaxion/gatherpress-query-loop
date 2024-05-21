<?php
/**
 * Handles enqueueing of assets for the plugin.
 *
 * @package ContextualQueryLoop
 */

namespace ContextualQueryLoop;

/**
 * Enqueue our variations.
*/
\add_action(
	'enqueue_block_editor_assets',
	function () {
		// Variations.
		$variations_assets_file = CQL_BUILD_DIR_PATH . 'variations.asset.php';

		if ( file_exists( $variations_assets_file ) ) {
			$assets = include $variations_assets_file;
			\wp_enqueue_script(
				'contextual-query-loop',
				CQL_BUILD_DIR_URL . 'variations.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
			// Allow for translation.
			wp_set_script_translations( 'contextual-query-loop', 'contextual-query-loop' );
		}
	}
);
