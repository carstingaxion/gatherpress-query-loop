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
	description: __( 'Query loop block-variation to create custom queries based on the post- or template-context.', 'contextual-query-loop' ),
	icon: CQLIcon,
	isActive: [ 'namespace' ],
	attributes: {
		namespace: CQL,
		querycontext: [],
	},
	scope: [ 'inserter', 'transform' ],
} );

export { CQL, CQLControls, CQLControlsInheritedQuery };
