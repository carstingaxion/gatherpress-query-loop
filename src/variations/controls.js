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
import { EventCountControls } from '../components/event-count-controls';
import { EventExcludeControls } from '../components/event-exclude-controls';
import { EventListTypeControls } from '../components/event-list-type-controls';
import { EventOffsetControls } from '../components/event-offset-controls';
import { EventOrderControls } from '../components/event-order-controls';
import { EventIncludeUnfinishedControls } from '../components/event-include-unfinished-controls';

// import { PostDateQueryControls } from '../components/post-date-query-controls';



import { isEventPostType } from '../helpers/event';

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
/* 
	// Idea based on @patriciabt|s feedback in slack.
	if (props.name !== 'core/query') {
		return false;
	}
	const {
		query: { postType },
	} = props.attributes;
	return postType && postType === 'gatherpress_event'; */
};



/**
 * Custom controls
 *
 * @param {*} BlockEdit
 * @return {Element} BlockEdit instance
 */
const withGatherPressQueryControls = ( BlockEdit ) => ( props ) => {
	// If the is the correct variation, add the custom controls.
	if ( ! isGatherPressQueryLoop( props ) ) {
		return <BlockEdit { ...props } />;
	}
	const isEventContext = isEventPostType();
	// If the inherit prop is false, add all the controls.
	const { attributes } = props;
	if ( attributes.query.inherit === false ) {
		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __(
							'Event Query Settings',
							'gatherpress'
						) }
					>

						{/* Toggle between 'upcoming' & 'past' events. */}
						<EventListTypeControls { ...props } />
						<EventIncludeUnfinishedControls { ...props } />
						
						{ isEventContext && (
							<EventExcludeControls { ...props } />
						)}						
						<EventCountControls { ...props } />
						<EventOffsetControls { ...props } />
						<EventOrderControls { ...props } />

						{/* <PostDateQueryControls { ...props } /> */}
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
						'gatherpress'
					) }
				>
					<EventOrderControls { ...props } />
					<GPQLControlsInheritedQuery.Slot
						fillProps={ { ...props } }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
	
};

addFilter( 'editor.BlockEdit', 'core/query', withGatherPressQueryControls );
