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
import { GPQL } from '.';
import GPQLControls from '../slots/gpql-controls';
import GPQLControlsInheritedQuery from '../slots/gpql-controls-inherited-query';
import { PostCountControls } from '../components/post-count-controls';
import { PostOffsetControls } from '../components/post-offset-controls';
import { PostMetaQueryControls } from '../components/post-meta-query-controls';
import { PostDateQueryControls } from '../components/post-date-query-controls';
// import { MultiplePostSelect } from '../components/multiple-post-select';
import { PostOrderControls } from '../components/post-order-controls';
import { PostExcludeControls } from '../components/post-exclude-controls';

import { EventListTypeControls } from '../components/event-list-type-controls';

/**
 * Determines if the active variation is this one
 *
 * @param {*} props
 * @return {boolean} Is this the correct variation?
 */
const isGatherPressQueryLoop = ( props ) => {
	const {
		attributes: { namespace },
	} = props;
	return namespace && namespace === GPQL;
};

/**
 * Custom controls
 *
 * @param {*} BlockEdit
 * @return {Element} BlockEdit instance
 */
const withGatherPressQueryControls = ( BlockEdit ) => ( props ) => {
	// If the is the correct variation, add the custom controls.
	if ( isGatherPressQueryLoop( props ) ) {
		// If the inherit prop is false, add all the controls.
		const { attributes } = props;
		if ( attributes.query.inherit === false ) {
			return (
				<>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody
							title={ __(
								'GatherPress Query Settings',
								'gatherpress-query-loop'
							) }
						>
							{/* We only want our GatherPress events to be used. */}
							{/* <MultiplePostSelect { ...props } /> */}

							{/* Toggle between 'upcoming' & 'past' events. */}
							<EventListTypeControls { ...props } />
							
							<PostCountControls { ...props } />
							<PostOffsetControls { ...props } />
							<PostOrderControls { ...props } />
							<PostExcludeControls { ...props } />
							<PostMetaQueryControls { ...props } />
							<PostDateQueryControls { ...props } />
							<GPQLControls.Slot fillProps={ { ...props } } />
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
							'GatherPress Query Settings',
							'gatherpress-query-loop'
						) }
					>
						<PostOrderControls { ...props } />
						<GPQLControlsInheritedQuery.Slot
							fillProps={ { ...props } }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	}
	return <BlockEdit { ...props } />;
};

addFilter( 'editor.BlockEdit', 'core/query', withGatherPressQueryControls );
