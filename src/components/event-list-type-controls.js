/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __, _x, sprintf } from '@wordpress/i18n';

/**
 * A component that lets you pick posts to be excluded from the query
 *
 * @return {Element} EventListTypeControls
 */
export const EventListTypeControls = ( { attributes, setAttributes } ) => {
	const { query: { gp_events_query: eventListType = 'upcoming'  } = {} } = attributes;

	const currentPost = useSelect( ( select ) => {
		return select( 'core/editor' ).getCurrentPost();
	}, [] );

	if ( ! currentPost ) {
		return <div>{ __( 'Loading…', 'gatherpress-query-loop' ) }</div>;
	}

	return (
		<>
			<h2> { __( 'Type of event list', 'gatherpress-query-loop' ) }</h2>
			<ToggleControl
				label={ __( "Upcoming or past events.", 'gatherpress-query-loop' ) }
				help={ sprintf(
					/* translators: %s: 'upcoming' or 'past' */
					_x( "Currently shows %s events.", "'upcoming' or 'past'", 'gatherpress-query-loop' ),
					eventListType
				) }
				checked={ 'past' === eventListType }
				onChange={ ( value ) => {
					setAttributes( {
						query: {
							...attributes.query,
							gp_events_query: value ? 'past' : 'upcoming',
						},
					} );
				} }
			/>
		</>
	);
};
