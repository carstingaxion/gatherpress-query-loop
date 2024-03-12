# GatherPress Query Loop

## Description

This plugin should help shape the idea, that it should be relatively simple to convert the existing GatherPress **Event List** block into a tailored block-variation of the core **Query** block.

### Read THE issue about this repo:

- [BLOCK Convert Event-List block into query block-variation](https://github.com/GatherPress/gatherpress/issues/599)

---

**Credits to @ryanwelcher** for everything below and 97% of the code within this project.

---

This plugin introduces a Query Loop block variation that will empower users to be able to do much more complicated queries with the Query Loop block, such number of posts to display and post meta

### Support/Issues

Please use the either the [support](https://wordpress.org/support/plugin/gatherpress-query-loop/) forum or the [official repository](https://github.com/ryanwelcher/gatherpress-query-loop) for any questions or to log issues.

### Available Controls

#### Multiple post types

Select additional post types for your query!

#### Post Count

Set the number of items you want to display (up to 50).

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

## Extending GPQL

Detailed instructions on how to extend GPQL as well as an example are available [here](./extending-gpql.md)
