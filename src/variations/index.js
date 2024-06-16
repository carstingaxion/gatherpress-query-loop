/**
 * WordPress dependencies
 */
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
// Load block-variations for pagination-blocks.
import './pagination';
import './controls';
import GPQLControls from '../slots/gpql-controls';
import GPQLControlsInheritedQuery from '../slots/gpql-controls-inherited-query';

import { GPV_BLOCK, NO_RESULTS_BLOCK, QUERY_PAGINATION_BLOCK } from './templates';

import GPQLIcon from '../components/icon';


const GPQL = 'gatherpress-query-loop';

const GPQL_DEFAULT_ATTRIBUTES = {
	namespace: GPQL,
	query: {
		perPage: 3,
		pages: 0,
		offset: 0,
		postType: 'gatherpress_event',
		gatherpress_events_query: 'upcoming',
		include_unfinished: 1,
		order: 'asc',
		orderBy: 'datetime',
		inherit: false
	}
};

const GPQL_DEFAULT_CONFIGURATION = {
	category: 'gatherpress',
	keywords: [
		__('Events', 'gatherpress'),
		__('Dates', 'gatherpress'),
	],
	icon: GPQLIcon( 'list-view' ),
	isActive: ['namespace', 'scope'],
	attributes: {
		...GPQL_DEFAULT_ATTRIBUTES
	},
	allowedControls: ['inherit', 'taxQuery'],
	scope: ['block'],
}
/**
 * Docs about the Query block.
 *
 * General information on how to modify the query loop block, that's worth reading and learning:
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/#extending-the-query
 * @see https://wpfieldwork.com/modify-query-loop-block-to-filter-by-custom-field/
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 * @see https://jeffreycarandang.com/restrict-wordpress-gutenberg-block-settings-based-on-post-type-user-roles-or-block-context/
 */

/**
 * This is the main query-block variation to list events exclusively. 
 * A user can pick the block directly from the inserter or the left sidebar.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
registerBlockVariation('core/query', {
	...GPQL_DEFAULT_CONFIGURATION,
	name: GPQL,
	title: __('Event Query', 'gatherpress'),
	description: __('Create event queries', 'gatherpress'),
	scope: ['inserter', 'transform'],
	/*
	 * Having innerBlocks in THIS (visible) variation, essentially 
	 * skips the setup phase of the Query Loop block with suggested patterns 
	 * and the block is inserted with these inner blocks as its starting content.
	 * 
	 * This is not what I wanted, so I disabled it.
	 *
	 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/#customize-your-variation-layout

	innerBlocks: [
		[
			'core/post-template',
			{},
			[
				[ 'gatherpress/event-date' ],
				[ 'core/post-title' ],
				[ 'core/post-excerpt' ]
			],
		],
		[ 'core/query-pagination' ],
		[ 'core/query-no-results' ],
	],	 */

	example: {
		attributes: {
			...GPQL_DEFAULT_ATTRIBUTES
		},
		innerBlocks: [
			{
				name: 'core/post-template',
				attributes: {},
				innerBlocks: [
					{
						name: 'gatherpress/event-date',
					},
					{
						name: 'core/post-title',
					},
					{
						...GPV_BLOCK,
					}
				],
			},
		],
	},
});


/**
 * One of the 'Start blank' patterns for the gatherpress query loop variation.
 */
registerBlockVariation('core/query', {
	...GPQL_DEFAULT_CONFIGURATION,
	name: 'gatherpress-query-loop-map-date',
	title: __('Map & Event-Date', 'gatherpress'),
	description: __('Create gatherpress queries with Map & Date', 'gatherpress'),
	innerBlocks: [
		[
			'core/post-template',
			{
				metadata:{
					name:__(
						'Events Template',
						'gatherpress'
					)
				}
			},
			[
				['gatherpress/venue'],
				['gatherpress/event-date'],
			],
		],
		QUERY_PAGINATION_BLOCK,
		NO_RESULTS_BLOCK
	],
});

/**
 * One of the 'Start blank' patterns for the gatherpress query loop variation.
 */
registerBlockVariation('core/query', {
	...GPQL_DEFAULT_CONFIGURATION,
	name: 'gatherpress-query-loop-date-title',
	title: __('Event-Date, Title & Venue details', 'gatherpress'),
	description: __('Create gatherpress queries with Event-Date & Title', 'gatherpress'),
	innerBlocks: [
		[
			'core/post-template',
			{
				metadata:{
					name:__(
						'Events Template',
						'gatherpress'
					)
				}
			},
			[
				{
					name: 'gatherpress/event-date',
				},
				{
					name: 'core/post-title',
				},
				{
					...GPV_BLOCK,
				},
			],
		],
		QUERY_PAGINATION_BLOCK,
		NO_RESULTS_BLOCK
	],
});

/**
 * One of the 'Start blank' patterns for the gatherpress query loop variation.
 */
registerBlockVariation('core/query', {
	...GPQL_DEFAULT_CONFIGURATION,
	name: 'gatherpress-query-loop-date-address',
	title: __('Event-Date & Venue Details', 'gatherpress'),
	description: __('Create gatherpress queries with Event-Date & Venue Details', 'gatherpress'),
	innerBlocks: [
		[
			'core/post-template',
			{
				metadata:{
					name:__(
						'Events Template',
						'gatherpress'
					)
				}
			},
			[
				{
					name:'gatherpress/event-date'
				},
				{
					...GPV_BLOCK,
				},
			],
		],
		QUERY_PAGINATION_BLOCK,
		NO_RESULTS_BLOCK
	],
});




export { GPQL, GPQLControls, GPQLControlsInheritedQuery };
