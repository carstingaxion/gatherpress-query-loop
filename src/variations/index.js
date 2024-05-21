/**
 * WordPress dependencies
 */
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import './controls';
import CQLIcon from '../components/icons';
import CQLControls from '../slots/cql-controls';
import CQLControlsInheritedQuery from '../slots/cql-controls-inherited-query';
const CQL = 'contextual-query-loop';

registerBlockVariation( 'core/query', {
	name: CQL,
	title: __( 'Contextual Query Loop', 'contextual-query-loop' ),
	description: __( 'Create advanced queries', 'contextual-query-loop' ),
	icon: CQLIcon,
	isActive: [ 'namespace' ],
	attributes: {
		namespace: CQL,
	},
	scope: [ 'inserter', 'transform' ],
} );

export { CQL, CQLControls, CQLControlsInheritedQuery };
