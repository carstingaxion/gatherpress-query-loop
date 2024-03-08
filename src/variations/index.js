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

registerBlockVariation( 'core/query', {
	name: GPQL,
	title: __( 'GatherPress Query Loop', 'gatherpress-query-loop' ),
	description: __( 'Create gatherpress queries', 'gatherpress-query-loop' ),
	icon: GPQLIcon,
	isActive: [ 'namespace' ],
	attributes: {
		namespace: GPQL,
	},
	scope: [ 'inserter', 'transform' ],
} );

export { GPQL, GPQLControls, GPQLControlsInheritedQuery };
