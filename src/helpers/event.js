/**
 * WordPress dependencies.
 */
import { select } from '@wordpress/data';

/**
 * Checks if the current post type is an event in the GatherPress application.
 *
 * This function queries the current post type using the `select` function from the `core/editor` package.
 * It returns `true` if the current post type is 'gatherpress_event', indicating that the post is an event,
 * and `false` otherwise.
 *
 * @since 0.30.0 Added postType parameter.
 * 
 * @since 0.28.0
 * 
 * @param  {string|null} postType Post type slug to check against, instead of the current post type.
 *
 * @return {boolean} True if the current post type is 'gatherpress_event', false otherwise.
 */
export function isEventPostType( postType=null ) {
	const postTypeToCheck = postType || select('core/editor').getCurrentPostType()
	return 'gatherpress_event' === postTypeToCheck;
}
