/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 *  Internal dependencies
 */
import { CQL } from '.';
import CQLControls from '../slots/cql-controls';
import CQLControlsInheritedQuery from '../slots/cql-controls-inherited-query';
import { PostCountControls } from '../components/post-count-controls';
import { PostOffsetControls } from '../components/post-offset-controls';
import { PostMetaQueryControls } from '../components/post-meta-query-controls';
import { PostDateQueryControls } from '../components/post-date-query-controls';
import { MultiplePostSelect } from '../components/multiple-post-select';
import { PostOrderControls } from '../components/post-order-controls';
import { PostExcludeControls } from '../components/post-exclude-controls';
import { AuthorContextControls } from '../components/context-author-controls';
import { TermsContextControls } from '../components/context-terms-controls';

/**
 * Determines if the active variation is this one
 *
 * @param {*} props
 * @return {boolean} Is this the correct variation?
 */
const isContextualQueryLoop = ( props ) => {
	const {
		attributes: { namespace },
	} = props;
	return namespace && namespace === CQL;
};

/**
 * Custom controls
 *
 * @param {*} BlockEdit
 * @return {Element} BlockEdit instance
 */
const withContextualQueryControls = ( BlockEdit ) => ( props ) => {
	// If the is the correct variation, add the custom controls.
	if ( isContextualQueryLoop( props ) ) {
		// If the inherit prop is false, add all the controls.
		const { attributes } = props;
		if ( attributes.query.inherit === false ) {
			return (
				<>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody
							title={ __(
								'Contextual Query Settings',
								'contextual-query-loop'
							) }
						>
							<AuthorContextControls { ...props } />
							{/* <MultiplePostSelect { ...props } /> */}
							<PostCountControls { ...props } />
							<PostOffsetControls { ...props } />
							<PostOrderControls { ...props } />
							<PostExcludeControls { ...props } />
							<PostIncludeControls { ...props } />
							<PostMetaQueryControls { ...props } />
							<PostDateQueryControls { ...props } />
							<CQLControls.Slot fillProps={ { ...props } } />
						</PanelBody>
					</InspectorControls>
				</>
			);
		}
		// Add some controls if the inherit prop is true.
		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __(
							'Contextual Query Settings',
							'contextual-query-loop'
						) }
					>
						<PostOrderControls { ...props } />
						<CQLControlsInheritedQuery.Slot
							fillProps={ { ...props } }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	}
	return <BlockEdit { ...props } />;
};

addFilter( 'editor.BlockEdit', 'core/query', withContextualQueryControls );

