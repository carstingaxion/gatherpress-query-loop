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
 * 
 */
registerBlockVariation( 'core/query', {
	name: GPQL,
	title: __( 'GatherPress Query Loop', 'gatherpress-query-loop' ),
	description: __( 'Create gatherpress queries', 'gatherpress-query-loop' ),
	icon: GPQLIcon,
	isActive: [ 'namespace' ],
	attributes: {
		namespace: GPQL,    
		query: {
			postType: 'gp_event',
		  },
	},
	allowedControls: [ 'inherit', 'taxQuery' ],
	scope: [ 'inserter', 'transform' ],
} );

export { GPQL, GPQLControls, GPQLControlsInheritedQuery };
