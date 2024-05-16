/**
 * WordPress dependencies
 */
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import './controls';
// import GPQLIcon from '../components/icons';
import GPQLControls from '../slots/gpql-controls';
import GPQLControlsInheritedQuery from '../slots/gpql-controls-inherited-query';
const GPQL = 'gatherpress-query-loop';


const GPQL_DEFAULT_ATTRIBUTES = {
	namespace: GPQL,
	query: {
		perPage: 3,
		pages: 0,
		offset: 0,
		postType: 'gatherpress_event',
		gp_events_query: 'upcoming',
		order: 'desc',
		orderBy: 'date',
		inherit: false
	}
};

/**
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/#extending-the-query
 * @see https://wpfieldwork.com/modify-query-loop-block-to-filter-by-custom-field/
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 * @see https://jeffreycarandang.com/restrict-wordpress-gutenberg-block-settings-based-on-post-type-user-roles-or-block-context/
 * 
 */

/**
 * This is the main query-block variation to list events exclusively. 
 * A user can pick the block directly from the inserter or the left sidebar.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
registerBlockVariation('core/query', {
	name: GPQL,
	title: __('GatherPress Query Loop', 'gatherpress-query-loop'),
	description: __('Create gatherpress queries', 'gatherpress-query-loop'),
	category: 'gatherpress',
	// icon: GPQLIcon,
	icon: 'nametag',
	isActive: ['namespace', 'scope'],
	attributes: {
		...GPQL_DEFAULT_ATTRIBUTES
	},
	allowedControls: ['inherit', 'taxQuery'],
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
						name: 'gatherpress/venue',
						attributes: {
							mapShow: false
						},
					},
				],
			},
		],
	},
});



/**
 * One of the 'Start blank' patterns for the gatherpress query loop variation.
 */
registerBlockVariation('core/query', {
	name: 'gatherpress-query-loop-map-date',
	title: __('Map & Event-Date', 'gatherpress-query-loop'),
	description: __('Create gatherpress queries with Map & Date', 'gatherpress-query-loop'),
	icon: 'nametag',
	isActive: ['namespace', 'scope'],
	attributes: {
		...GPQL_DEFAULT_ATTRIBUTES
	},
	allowedControls: ['inherit', 'taxQuery'],
	scope: ['block'],
	innerBlocks: [
		[
			'core/post-template',
			{},
			[
				['gatherpress/venue'],
				['gatherpress/event-date'],
			],
		],
		['core/query-pagination'],
		['core/query-no-results'],
	],
});


/*
  */
registerBlockVariation('core/query', {
	name: 'gatherpress-query-loop-date-title',
	title: __('Event-Date & Title', 'gatherpress-query-loop'),
	description: __('Create gatherpress queries with Event-Date & Title', 'gatherpress-query-loop'),
	icon: 'nametag',
	isActive: ['namespace', 'scope'],
	attributes: {
		...GPQL_DEFAULT_ATTRIBUTES
	},
	allowedControls: ['inherit', 'taxQuery'],
	scope: ['block'],
	innerBlocks: [
		[
			'core/post-template',
			{},
			[
				['gatherpress/event-date'],
				['core/post-title'],
			],
		],
		['core/query-pagination'],
		['core/query-no-results'],
	],
});

/*
  */
registerBlockVariation('core/query', {
	name: 'gatherpress-query-loop-date-address',
	title: __('Event-Date & Address', 'gatherpress-query-loop'),
	description: __('Create gatherpress queries with Event-Date & Address', 'gatherpress-query-loop'),
	icon: 'nametag',
	isActive: ['namespace', 'scope'],
	attributes: {
		...GPQL_DEFAULT_ATTRIBUTES
	},
	allowedControls: ['inherit', 'taxQuery'],
	scope: ['block'],
	innerBlocks: [
		[
			'core/post-template',
			{},
			[
				['gatherpress/event-date'],
				['gatherpress/venue', {
					mapShow: false
				}],
			],
		],
		['core/query-pagination'],
		['core/query-no-results'],
	],
});

export { GPQL, GPQLControls, GPQLControlsInheritedQuery };
