/**
 * WordPress dependencies
 */
import { SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * PostOrderControls component
 *
 * @param {*} param0
 * @return {Element} PostCountControls
 */
export const PostOrderControls = ( { attributes, setAttributes } ) => {
	const { query: { order, orderBy } = {} } = attributes;
	return (
		<>
			<SelectControl
				label={ __( 'Post Order By', 'gatherpress-query-loop' ) }
				value={ orderBy }
				help={
					orderBy === 'meta_value' || orderBy === 'meta_value_num'
						? __(
								'Meta Value and Meta Value Num require that Meta Key is set in the Meta Query section.',
								'gatherpress-query-loop'
						  )
						: ''
				}
				options={ [
					// The 'gp_event' post_type does not support 'author'.
					// {
					// 	label: __( 'Author', 'gatherpress-query-loop' ),
					// 	value: 'author',
					// },
					{
						label: __( 'Date', 'gatherpress-query-loop' ),
						value: 'date',
					},
					{
						label: __(
							'Last Modified Date',
							'gatherpress-query-loop'
						),
						value: 'modified',
					},
					{
						label: __( 'Title', 'gatherpress-query-loop' ),
						value: 'title',
					},
					{
						label: __( 'Meta Value', 'gatherpress-query-loop' ),
						value: 'meta_value',
					},
					{
						label: __( 'Meta Value Num', 'gatherpress-query-loop' ),
						value: 'meta_value_num',
					},
					{
						label: __( 'Random', 'gatherpress-query-loop' ),
						value: 'rand',
					},
					// The 'gp_event' post_type does not support 'page_attributes'.
					// {
					// 	label: __( 'Menu Order', 'gatherpress-query-loop' ),
					// 	value: 'menu_order',
					// },
					{
						label: __( 'Post ID', 'gatherpress-query-loop' ),
						value: 'id',
					},
				] }
				onChange={ ( newOrderBy ) => {
					setAttributes( {
						query: {
							...attributes.query,
							orderBy: newOrderBy,
						},
					} );
				} }
			/>
			<ToggleControl
				label={ __( 'Ascending Order', 'gatherpress-query-loop' ) }
				checked={ order === 'asc' }
				onChange={ () => {
					setAttributes( {
						query: {
							...attributes.query,
							order: order === 'asc' ? 'desc' : 'asc',
						},
					} );
				} }
			/>
		</>
	);
};
