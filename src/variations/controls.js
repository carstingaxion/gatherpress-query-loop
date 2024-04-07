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
import { EventOffsetControls } from '../components/event-offset-controls';
import { PostDateQueryControls } from '../components/post-date-query-controls';
import { PostOrderControls } from '../components/post-order-controls';
import { EventExcludeControls } from '../components/event-exclude-controls';



import { EventListTypeControls } from '../components/event-list-type-controls';
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
							'GatherPress Query Settings',
							'gatherpress-query-loop'
						) }
					>

						{/* Toggle between 'upcoming' & 'past' events. */}
						<EventListTypeControls { ...props } />
						{ isEventContext && (
							<EventExcludeControls { ...props } />
						)}						
						<EventCountControls { ...props } />
						<EventOffsetControls { ...props } />
						<PostOrderControls { ...props } />

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
	
};

addFilter( 'editor.BlockEdit', 'core/query', withGatherPressQueryControls );
