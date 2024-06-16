<?php
/**
 * Handles enqueueing of assets for the plugin.
 *
 * @package GatherPressQueryLoop
 */

namespace GatherPressQueryLoop;

/**
 * Enqueue our variations.
*/
\add_action(
	'enqueue_block_editor_assets',
	function () {
		// Variations.
		$variations_assets_file = GATHERPRESS_BUILD_DIR_PATH . 'variations.asset.php';

		if ( file_exists( $variations_assets_file ) ) {
			$assets = include $variations_assets_file;
			\wp_enqueue_script(
				'gatherpress-query-loop',
				GATHERPRESS_BUILD_DIR_URL . 'variations.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
			// Allow for translation.
			wp_set_script_translations( 'gatherpress-query-loop', 'gatherpress' );
		}
	}
);

/**
 * Re-Enable the GatherPress blocks to be used/inserted everywhere,
 *
 * which was disabled in https://github.com/GatherPress/gatherpress/pull/225
 * and discussed in https://github.com/GatherPress/gatherpress/issues/207.
 */
\add_action(
	'admin_enqueue_scripts',
	function () {
		\wp_dequeue_script( 'gatherpress-admin' );
	},
	11
);
