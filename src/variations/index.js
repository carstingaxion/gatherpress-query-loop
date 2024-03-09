/**
 * WordPress dependencies
 */
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import './controls';
import GPQLIcon from '../components/icons';
import GPQLControls from '../slots/gpql-controls';
import GPQLControlsInheritedQuery from '../slots/gpql-controls-inherited-query';
const GPQL = 'gatherpress-query-loop';

/**
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/#extending-the-query
 * @see https://wpfieldwork.com/modify-query-loop-block-to-filter-by-custom-field/
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 * @see https://jeffreycarandang.com/restrict-wordpress-gutenberg-block-settings-based-on-post-type-user-roles-or-block-context/
 * 
 */
registerBlockVariation( 'core/query', {
	name: GPQL,
	title: __( 'GatherPress Query Loop', 'gatherpress-query-loop' ),
	description: __( 'Create gatherpress queries', 'gatherpress-query-loop' ),
	// icon: GPQLIcon,
	icon: 'nametag',
	isActive: [ 'namespace' ],
	attributes: {
		namespace: GPQL,    
		query: {
			postType: 'gp_event',
			gp_events_query: 'upcoming'
		  },
	},
	allowedControls: [ 'inherit', 'taxQuery' ],
	scope: [ 'inserter', 'transform' ],
} );

export { GPQL, GPQLControls, GPQLControlsInheritedQuery };
