/**
 * WordPress dependencies
 */
import { SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * ContextControls component
 *
 * @param {*} param0
 * @return {Element} AuthorContextControls
 */
export const AuthorContextControls = ( { attributes, setAttributes, context } ) => {
	const { query } = attributes;
	const { query: { 
		postType,
		querycontext
	} = {} } = attributes;

	const onContextualChange = ( ) => {
		let newQueryContext = {
			...attributes.query.querycontext,
		}
		if ( attributes.query.querycontext && ! attributes.query.querycontext.author) {
			newQueryContext.author = 1;
		} else {
			delete newQueryContext.author;
		}
		setAttributes( {
			query: {
				...attributes.query,
				querycontext: { ...newQueryContext }
			},
		} );
	}
	
	// console.log(querycontext);
	// if ( ! querycontext ) {
	// 	return <div>{ __( 'Loading…undefined', 'contextual-query-loop' ) }</div>;
	// }
	return (
		<>
			<h2> { __( 'Contextual Author', 'contextual-query-loop' ) }</h2>
			<ToggleControl
				label={ __( 'Contextual Author', 'contextual-query-loop' ) }
				help="This is some help text."
				checked={ ( querycontext && querycontext.author ) }
				onChange={ onContextualChange }
			/>
		</>
	);
};
