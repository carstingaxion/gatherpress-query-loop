# Contextual Query Loop

## Description

Query loop block-variation to create custom queries based on the post- or template-context.

https://github.com/carstingaxion/additional-advanced-query-loops/assets/198883/0f077ac4-06ff-44e2-81c9-a92b02b3cff1

> Dear [#WordPress](https://github.com/topics/wordpress) flat mates, where did we put our contextual query block?
>
>You know. The block, that is capable to query posts based on the context it is placed in. This better, related posts query block variation that can show posts by the current author, a given taxonomy or the current post_parent. The one, that doesn’t need any ID, but the object-field to contextualize for any of the query block controls and its attributes.
>
>Please! Where did we put it?
>[Or do I really have to create a new one?](https://dewp.space/@carstingaxion/112348844278058426)

This block helps while templating in FSE, because it inherits some settings from the currently viewed template or surounding block, without the need to *hard code* the attributes of the query block.

This should help query posts by:

- [x] the same author, as the context post.
   - [x] :bulb: exclude the current context-author
- [x] the same term(s), as the current archive or context post.
- [x] the [same day before](https://indieweb.social/@janboddez/112485691901272067) ... 1 week, 1 month, n year :bulb: Idea from [@janboddez](https://github.com/janboddez)
- [ ] the same post parent.
- [ ] a shadow-taxonomy.

---

**Credits to @ryanwelcher** for everything below and 97% of the code within this project.

---

## (Original) Description

This plugin introduces a Query Loop block variation that will empower users to be able to do much more complicated queries with the Query Loop block, such number of posts to display and post meta

### Support/Issues

Please use the either the [support](https://wordpress.org/support/plugin/contextual-query-loop/) forum or the [official repository](https://github.com/ryanwelcher/contextual-query-loop) for any questions or to log issues.

### Available Controls

#### Multiple post types

Select additional post types for your query!

#### Post Count

Set the number of items you want to display (up to 50).

#### Include Posts

Choose the posts you want to display manually.

#### Exclude current post

Remove the current post from the query.

#### Offset

Choose whether you want to start at the first or 100th!

#### Post Meta Query

Generate complicated post meta queries using an interface that allows you to create a query based on `meta_key`, `meta_value` and the `compare` options. Combine multiple queries and determine if they combine results (OR) or narrow them down (AND).

#### Date Query

Query item before a date, after a date or between two dates!

#### Post Order controls

Sort in ascending or descending order by:

-   Author
-   Date
-   Last Modified Date
-   Title
-   Meta Value
-   Meta Value Num
-   Random
-   Menu Order ( props to @jvanja )
-   Post ID ( props to @markhowellsmead )

**Please note that this is a slight duplication of the existing sorting controls. They both work interchangeably but it just looks a bit odd in the UI**

## Extending CQL

Detailed instructions on how to extend CQL as well as an example are available [here](./extending-cql.md)
