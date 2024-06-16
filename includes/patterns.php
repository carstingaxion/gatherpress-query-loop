<?php
/**
 * Registers block patterns for the plugin.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/#register_block_pattern
 *
 * @package GatherPressQueryLoop
 */

namespace GatherPressQueryLoop;

\add_action( 'init', __NAMESPACE__ . '\register_patterns' );

function register_patterns(): void {
	\register_block_pattern(
		'gatherpress/online-event-and-venue-details',
		[
			'title'         => __( 'Online-Event & Venue details', 'gatherpress' ),
			'description'   => _x( 'Shows Online-Event & Venue details, the Title, as well as events date and time.', 'Block pattern description', 'gatherpress' ),
			'blockTypes'    => [ 'core/query/gatherpress-query-loop' ],
			'viewportWidth' => 500,
			'content'       => '<!-- wp:query {"query":{"perPage":"3","pages":0,"offset":0,"postType":"gatherpress_event","gatherpress_events_query":"past","order":"asc","orderBy":"datetime","inherit":false},"namespace":"gatherpress-query-loop","layout":{"type":"default"}} -->
            <div class="wp-block-query"><!-- wp:post-template -->
            <!-- wp:post-title /-->
            
            <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|40","margin":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|60"}}},"layout":{"type":"grid","columnCount":"2","minimumColumnWidth":null}} -->
            <div style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--60)"><!-- wp:group {"style":{"layout":{"selfStretch":"fit","flexSize":null,"columnSpan":1,"rowSpan":1}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"top"}} -->
            <div><!-- wp:buttons -->
            <div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"base-2","metadata":{"bindings":{"url":{"source":"gatherpress/onlineevent-or-venue","args":{"key":"url"}},"text":{"source":"gatherpress/onlineevent-or-venue","args":{"key":"text"}}}},"className":"gp-onlineevent-or-venue-button is-style-outline"} -->
            <div class="wp-block-button gp-onlineevent-or-venue-button is-style-outline"><a class="wp-block-button__link has-base-2-background-color has-background wp-element-button" title="Visit Online-Event">🌐 Online-Event</a></div>
            <!-- /wp:button --></div>
            <!-- /wp:buttons -->
            
            <!-- wp:gatherpress/event-date /-->
            
            <!-- wp:post-excerpt {"excerptLength":20} /--></div>
            <!-- /wp:group -->
            
            <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"right","verticalAlignment":"bottom"}} -->
            <div><!-- wp:group {"style":{"spacing":{"blockGap":"0"}},"className":"gp-venue-v3","layout":{"type":"flex","orientation":"nonsense","justifyContent":"right"}} -->
            <div class="gp-venue-v3"><!-- wp:post-title {"textAlign":"right","level":3,"style":{"typography":{"textTransform":"uppercase"}},"fontSize":"medium"} /-->
            
            <!-- wp:paragraph {"align":"right","placeholder":"No website added, yet.","metadata":{"bindings":{"content":{"source":"core/post-meta","args":{"key":"venue_information_website"}}}},"style":{"typography":{"fontSize":"0.7rem"}},"className":"gp-venue-website"} -->
            <p class="has-text-align-right gp-venue-website" style="font-size:0.7rem"></p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group -->
            
            <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"right","flexWrap":"wrap"}} -->
            <div class="wp-block-buttons"><!-- wp:button {"tagName":"button","backgroundColor":"base-2","className":"gp-add-to-calendar is-style-outline"} -->
            <div class="wp-block-button gp-add-to-calendar is-style-outline"><button type="button" class="wp-block-button__link has-base-2-background-color has-background wp-element-button" title="Allows you to add an event to your preferred calendar.">📅 Add to Calendar</button></div>
            <!-- /wp:button --></div>
            <!-- /wp:buttons --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group -->
            <!-- /wp:post-template -->
            
            <!-- wp:query-pagination {"paginationArrow":"arrow"} -->
            <!-- wp:query-pagination-previous /-->
            
            <!-- wp:query-pagination-numbers /-->
            
            <!-- wp:query-pagination-next /-->
            <!-- /wp:query-pagination -->
            
            <!-- wp:query-no-results -->
            <!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
            <p></p>
            <!-- /wp:paragraph -->
            <!-- /wp:query-no-results --></div>
            <!-- /wp:query -->',
		]
	);
	\register_block_pattern(
		'gatherpress/title-date',
		[
			'title'         => __( 'Title & event date', 'gatherpress' ),
			'description'   => _x( 'Shows the Title, as well as events date and time.', 'Block pattern description', 'gatherpress' ),
			'blockTypes'    => [ 'core/query/gatherpress-query-loop' ],
			'viewportWidth' => 500,
			'content'       => '<!-- wp:query {"queryId":0,"query":{"postType":"gatherpress_event","gatherpress_events_query":"upcoming","perPage":10},"namespace":"gatherpress-query-loop"} -->
            <div class="wp-block-query"><!-- wp:post-template -->
            <!-- wp:gatherpress/event-date /-->
            
            <!-- wp:post-title /-->
            
            <!-- /wp:post-template -->
            
            <!-- wp:query-pagination -->
            <!-- wp:query-pagination-previous /-->
            
            <!-- wp:query-pagination-numbers /-->
            
            <!-- wp:query-pagination-next /-->
            <!-- /wp:query-pagination -->
            
            <!-- wp:query-no-results -->
            <!-- wp:paragraph {"placeholder":"Füge einen Text oder Blöcke hinzu, die angezeigt werden, wenn die Abfrage keine Ergebnisse ausgibt."} -->
            <p>Es sind keine Veranstaltungen geplant.</p>
            <!-- /wp:paragraph -->
            <!-- /wp:query-no-results --></div>
            <!-- /wp:query -->',
		]
	);
	\register_block_pattern(
		'gatherpress/title-date-excerpt',
		[
			'title'         => __( 'Title, excerpt & event date', 'gatherpress' ),
			'description'   => _x( 'Shows the Title, excerpt as well as events date and time.', 'Block pattern description', 'gatherpress' ),
			'blockTypes'    => [ 'core/query/gatherpress-query-loop' ],
			'viewportWidth' => 500,
			'content'       => '<!-- wp:query {"query":{"perPage":5,"pages":0,"offset":0,"postType":"gatherpress_event","gatherpress_events_query":"upcoming","order":"asc","orderBy":"datetime","inherit":false},"namespace":"gatherpress-query-loop"} -->
            <div class="wp-block-query"><!-- wp:post-template -->
            <!-- wp:post-title /-->
            
            <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|40","margin":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between","verticalAlignment":"top"}} -->
            <div style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)"><!-- wp:group {"style":{"layout":{"selfStretch":"fit","flexSize":null}},"layout":{"type":"constrained","justifyContent":"center"}} -->
            <div><!-- wp:gatherpress/event-date /-->
            
            <!-- wp:post-excerpt {"excerptLength":20} /--></div>
            <!-- /wp:group -->
            
            <!-- wp:group {"layout":{"type":"constrained"}} -->
            <div><!-- wp:buttons {"layout":{"type":"flex","justifyContent":"right"}} -->
            <div class="wp-block-buttons"><!-- wp:button {"tagName":"button","className":"gp-add-to-calendar"} -->
            <div class="wp-block-button gp-add-to-calendar"><button type="button" class="wp-block-button__link wp-element-button" title="Allows you to add an event to your preferred calendar.">📅 Add to Calendar (v2)</button></div>
            <!-- /wp:button --></div>
            <!-- /wp:buttons -->
            
            <!-- wp:group {"style":{"spacing":{"blockGap":"0"}},"className":"gp-venue-v3","layout":{"type":"flex","orientation":"nonsense","justifyContent":"right"}} -->
            <div class="gp-venue-v3"><!-- wp:post-title {"textAlign":"right","level":3,"style":{"typography":{"textTransform":"uppercase"}},"fontSize":"medium"} /-->
            
            <!-- wp:paragraph {"align":"right","placeholder":"No website added, yet.","metadata":{"bindings":{"content":{"source":"core/post-meta","args":{"key":"venue_information_website"}}}},"style":{"typography":{"fontSize":"0.7rem"}},"className":"gp-venue-website"} -->
            <p class="has-text-align-right gp-venue-website" style="font-size:0.7rem"></p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group -->
            <!-- /wp:post-template -->
            
            <!-- wp:query-pagination -->
            <!-- wp:query-pagination-previous /-->
            
            <!-- wp:query-pagination-numbers /-->
            
            <!-- wp:query-pagination-next /-->
            <!-- /wp:query-pagination -->
            
            <!-- wp:query-no-results -->
            <!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
            <p></p>
            <!-- /wp:paragraph -->
            <!-- /wp:query-no-results --></div>
            <!-- /wp:query -->',
		]
	);
	\register_block_pattern(
		'gatherpress/title-date-excerpt-with-cover',
		[
			'title'      => __( 'Title, excerpt & event date next to a cover', 'gatherpress' ),
			// 'description' => _x( 'Shows the Title, excerpt as well as events date and time.', 'Block pattern description', 'gatherpress' ),
			'blockTypes' => [ 'core/query/gatherpress-query-loop' ],
			'content'    => '<!-- wp:query {"queryId":3,"query":{"perPage":3,"pages":0,"offset":0,"postType":"gatherpress_event","gatherpress_events_query":"upcoming","order":"asc","orderBy":"title","inherit":false,"exclude_current":0},"namespace":"gatherpress-query-loop"} -->
            <div class="wp-block-query"><!-- wp:post-template {"layout":{"type":"default","columnCount":"3"}} -->
            <!-- wp:group {"style":{"border":{"width":"1px","color":"#b5bdbc","radius":"4px"},"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"}}},"backgroundColor":"base-2","layout":{"type":"flex","flexWrap":"nowrap"}} -->
            <div class="wp-block-group has-border-color has-base-2-background-color has-background" style="border-color:#b5bdbc;border-width:1px;border-radius:4px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|20","left":"var:preset|spacing|20"}}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"wrap"}} -->
            <div class="wp-block-group" style="padding-right:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)"><!-- wp:post-title {"isLink":true} /-->
            
            <!-- wp:gatherpress/event-date /-->
            
            <!-- wp:gatherpress/venue {"mapShow":false} /--></div>
            <!-- /wp:group -->
            
            <!-- wp:cover {"useFeaturedImage":true,"isUserOverlayColor":true,"minHeight":198,"minHeightUnit":"px","customGradient":"linear-gradient(277deg,rgba(217,97,61,0) 79%,rgb(255,255,255) 79%)","style":{"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}},"spacing":{"margin":{"top":"0","bottom":"0"}},"layout":{"selfStretch":"fill","flexSize":null}},"textColor":"contrast"} -->
            <div class="wp-block-cover has-contrast-color has-text-color has-link-color" style="margin-top:0;margin-bottom:0;min-height:198px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim has-background-gradient" style="background:linear-gradient(277deg,rgba(217,97,61,0) 79%,rgb(255,255,255) 79%)"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->
            <p class="has-text-align-center has-large-font-size"></p>
            <!-- /wp:paragraph --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:group -->
            <!-- /wp:post-template -->
            
            <!-- wp:query-pagination -->
            <!-- wp:query-pagination-previous /-->
            
            <!-- wp:query-pagination-numbers /-->
            
            <!-- wp:query-pagination-next /-->
            <!-- /wp:query-pagination -->
            
            <!-- wp:query-no-results -->
            <!-- wp:paragraph {"placeholder":"Füge einen Text oder Blöcke hinzu, die angezeigt werden, wenn die Abfrage keine Ergebnisse ausgibt."} -->
            <p></p>
            <!-- /wp:paragraph -->
            <!-- /wp:query-no-results --></div>
            <!-- /wp:query -->',
		]
	);
	\register_block_pattern(
		'gatherpress/title-date-with-cover',
		[
			'title'         => __( 'Event date & Title on image-cover', 'gatherpress' ),
			// 'description' => _x( 'Shows the Title, excerpt as well as events date and time.', 'Block pattern description', 'gatherpress' ),
			'blockTypes'    => [ 'core/query/gatherpress-query-loop' ],
			'viewportWidth' => 800,
			'content'       => '<!-- wp:query {"queryId":0,"query":{"postType":"gatherpress_event","gatherpress_events_query":"upcoming","perPage":1,"inherit":false,"offset":0},"namespace":"gatherpress-query-loop","enhancedPagination":true,"metadata":{},"align":"wide"} -->
            <div class="wp-block-query alignwide"><!-- wp:post-template {"layout":{"type":"grid","columnCount":null,"minimumColumnWidth":"29rem"}} -->
            <!-- wp:cover {"useFeaturedImage":true,"dimRatio":80,"overlayColor":"contrast","isUserOverlayColor":true,"style":{"color":{"duotone":"var:preset|duotone|duotone-1"},"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}}},"textColor":"base-2","layout":{"type":"default"},"fontSize":"large"} -->
            <div class="wp-block-cover has-base-2-color has-text-color has-link-color has-large-font-size"><span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim-80 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:post-date {"textAlign":"center","format":"F j, Y","style":{"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}},"typography":{"fontSize":"1.8rem"}},"textColor":"base-2"} /-->
            
            <!-- wp:post-title {"textAlign":"center","isLink":true,"fontSize":"xx-large"} /--></div></div>
            <!-- /wp:cover -->
            <!-- /wp:post-template -->
            
            <!-- wp:spacer -->
            <div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->
            
            <!-- wp:query-pagination {"paginationArrow":"arrow","showLabel":false,"style":{"typography":{"letterSpacing":"20px"}},"layout":{"type":"flex","justifyContent":"left"},"fontSize":"xx-large"} -->
            <!-- wp:query-pagination-previous /-->
            
            <!-- wp:query-pagination-numbers {"midSize":1} /-->
            
            <!-- wp:query-pagination-next /-->
            <!-- /wp:query-pagination -->
            
            <!-- wp:query-no-results -->
            <!-- wp:paragraph {"placeholder":"Füge einen Text oder Blöcke hinzu, die angezeigt werden, wenn die Abfrage keine Ergebnisse ausgibt."} -->
            <p>Es sind keine Veranstaltungen geplant.</p>
            <!-- /wp:paragraph -->
            <!-- /wp:query-no-results --></div>
            <!-- /wp:query -->',
		]
	);
}
