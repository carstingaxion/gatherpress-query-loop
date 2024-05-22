/**
 * WordPress dependencies
 */
import { registerBlockVariation, unregisterBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import './controls';
import CQLIcon from '../components/icons';
import CQLControls from '../slots/cql-controls';
import CQLControlsInheritedQuery from '../slots/cql-controls-inherited-query';
const CQL = 'contextual-query-loop';

const CqlAttributes = {
	name: CQL,
	title: __( 'Contextual Query Loop', 'contextual-query-loop' ),
	description: __( 'Query loop block-variation to create custom queries based on the post- or template-context.', 'contextual-query-loop' ),
	icon: CQLIcon,
	// isActive: [ 'namespace' ],
	isActive: ( blockAttributes, variationAttributes ) => {
		if ( blockAttributes.namespace && CQL === blockAttributes.namespace ) {

			if ( blockAttributes.query.querycontext && blockAttributes.query.querycontext.author ) {
				console.log('we should disable the default-author controll at this point, while "contextual-author" is selected.');
				// unregisterBlockVariation( 'core/query', CQL );

				// registerBlockVariation( 'core/query', {
				// 	...CqlAttributes,
				// 	allowedControls: [],
				// } );

			}

			return true;
		}
		return false;
	},
	attributes: {
		namespace: CQL,
		querycontext: [],
	},
	scope: [ 'inserter', 'transform' ],
    allowedControls: [ 'inherit', 'postType', 'order', 'sticky', 'taxQuery', 'author', 'search' ],
}

registerBlockVariation( 'core/query', {
	...CqlAttributes
} );

export { CQL, CQLControls, CQLControlsInheritedQuery };
