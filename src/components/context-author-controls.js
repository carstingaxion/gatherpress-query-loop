/**
 * WordPress dependencies
 */
import { SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
// import { useMemo } from '@wordpress/element';
import { store as coreStore } from '@wordpress/core-data';

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
		if ( attributes.query.querycontext && attributes.query.querycontext.author ) {
			delete attributes.query.querycontext.author;

			setAttributes( {
				query: {
					...attributes.query,
					querycontext: { ...attributes.query.querycontext }
				}
			} );
			return;
		}
		setAttributes( {
			query: {
				...attributes.query,
				querycontext: {
					...attributes.query.querycontext,
					author: 1,
				}
			}
		} );
	}
	const postTypeSupportsAuthor = useSelect( ( select ) =>
		postType
			? !! select( coreStore ).getPostType( postType )?.supports.author
			: false
	);

	// The queried post type has no support for the author.
	// Bail out early.
	if ( ! postTypeSupportsAuthor ) {
		return;
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
