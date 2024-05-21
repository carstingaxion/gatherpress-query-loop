/**
 * WordPress dependencies
 */
import { SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * ContextControls component
 *
 * @param {*} param0
 * @return {Element} PostCountControls
 */
export const AuthorContextControls = ( { attributes, setAttributes, context } ) => {
	const { query } = attributes;
	const { query: { querycontext } = {} } = attributes;
	// console.log( 'ContextControls', querycontext );
	// console.log( 'ContextControls', context );

	/**
	 * @source https://www.30secondsofcode.org/js/s/toggle-array-element/
	 * @see    https://dev.to/reobin/how-to-toggle-an-item-in-a-javascript-array-5dl5 In-depth explanation.
	 * @param {*} arr 
	 * @param {*} val 
	 * @returns 
	 */
	const toggleElement = (arr, val) =>
		arr.includes(val) ? arr.filter(el => el !== val) : [...arr, val];


	const onContextualChange = ( ) => {
		// const { query } = attributes;
		// query.indexOf('querycontext') === -1 && query.push('querycontext');
		// let querycontext = ['author'];
		// const newQuery = { ...query, querycontext }
		// query.push('querycontext');
		// console.log(query);
		// console.log(newQuery);
	
		setAttributes( {
			query: {
				// ...attributes.newQuery,
				...attributes.query,
				querycontext: toggleElement( querycontext, 'author'),
			},
		} );
	}
	
// console.log(querycontext);
	// if ( ! querycontext ) {
	// 	return <div>{ __( 'Loading…undefined', 'contextual-query-loop' ) }</div>;
	// }
	return (
		<>
			<div>
				Here We are.
			</div>
			<ToggleControl
				label={ __( 'Contextual Author', 'contextual-query-loop' ) }
				checked={ ( querycontext && querycontext.includes('author') ) }
				onChange={ onContextualChange }
			/>
		</>
	);
};
