var gpql;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/event-list-type-controls.js":
/*!****************************************************!*\
  !*** ./src/components/event-list-type-controls.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListTypeControls: () => (/* binding */ EventListTypeControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * A component that lets you pick posts to be excluded from the query
 *
 * @return {Element} EventListTypeControls
 */
const EventListTypeControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      gp_events_query: eventListType = 'upcoming'
    } = {}
  } = attributes;
  const currentPost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select('core/editor').getCurrentPost();
  }, []);
  if (!currentPost) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Loading…', 'gatherpress-query-loop'));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Type of event list', 'gatherpress-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Upcoming or past events.", 'gatherpress-query-loop'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( /* translators: %s: 'upcoming' or 'past' */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)("Currently shows %s events.", "'upcoming' or 'past'", 'gatherpress-query-loop'), eventListType),
    checked: 'past' === eventListType,
    onChange: value => {
      setAttributes({
        query: {
          ...attributes.query,
          gp_events_query: value ? 'past' : 'upcoming'
        }
      });
    }
  }));
};

/***/ }),

/***/ "./src/components/post-count-controls.js":
/*!***********************************************!*\
  !*** ./src/components/post-count-controls.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostCountControls: () => (/* binding */ PostCountControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * PostCountControls component
 *
 * @param {*} param0
 * @return {Element} PostCountControls
 */
const PostCountControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      perPage,
      offset = 0
    } = {}
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Posts Per Page', 'gatherpress-query-loop'),
    min: 1,
    max: 50,
    onChange: newCount => {
      setAttributes({
        query: {
          ...attributes.query,
          perPage: newCount,
          offset
        }
      });
    },
    value: perPage
  });
};

/***/ }),

/***/ "./src/components/post-date-query-controls.js":
/*!****************************************************!*\
  !*** ./src/components/post-date-query-controls.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostDateQueryControls: () => (/* binding */ PostDateQueryControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


const PostDateQueryControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      date_query: {
        relation: relationFromQuery = '',
        date_primary: datePrimary = new Date(),
        date_secondary: dateSecondary = new Date(),
        inclusive: isInclusive = false
      } = {}
    } = {}
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Date Query', 'gatherpress-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date Relationship', 'gatherpress-query-loop'),
    value: relationFromQuery,
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Before',
      value: 'before'
    }, {
      label: 'After',
      value: 'after'
    }, {
      label: 'Between',
      value: 'between'
    }],
    onChange: relation => {
      setAttributes({
        query: {
          ...attributes.query,
          date_query: relation !== '' ? {
            ...attributes.query.date_query,
            relation
          } : ''
        }
      });
    }
  }), relationFromQuery !== '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, relationFromQuery === 'between' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start date', 'gatherpress-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
    currentDate: datePrimary,
    onChange: newDate => {
      setAttributes({
        query: {
          ...attributes.query,
          date_query: {
            ...attributes.query.date_query,
            date_primary: newDate
          }
        }
      });
    }
  }), relationFromQuery === 'between' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End date', 'gatherpress-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
    currentDate: dateSecondary,
    onChange: newDate => {
      setAttributes({
        query: {
          ...attributes.query,
          date_query: {
            ...attributes.query.date_query,
            date_secondary: newDate
          }
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Include selected date(s)', 'gatherpress-query-loop'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Should the selected date(s) be included in your query?', 'gatherpress-query-loop'),
    checked: isInclusive,
    onChange: newIsInclusive => {
      setAttributes({
        query: {
          ...attributes.query,
          date_query: {
            ...attributes.query.date_query,
            inclusive: newIsInclusive
          }
        }
      });
    }
  })));
};

/***/ }),

/***/ "./src/components/post-exclude-controls.js":
/*!*************************************************!*\
  !*** ./src/components/post-exclude-controls.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostExcludeControls: () => (/* binding */ PostExcludeControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * A component that lets you pick posts to be excluded from the query
 *
 * @return {Element} PostExcludeControls
 */
const PostExcludeControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      exclude_current: excludeCurrent
    } = {}
  } = attributes;
  const currentPost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select('core/editor').getCurrentPost();
  }, []);
  if (!currentPost) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Loading…', 'gatherpress-query-loop'));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Exclude Posts', 'gatherpress-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Exclude Current Post', 'gatherpress-query-loop'),
    checked: !!excludeCurrent,
    onChange: value => {
      setAttributes({
        query: {
          ...attributes.query,
          exclude_current: value ? currentPost.id : 0
        }
      });
    }
  }));
};

/***/ }),

/***/ "./src/components/post-meta-control.js":
/*!*********************************************!*\
  !*** ./src/components/post-meta-control.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostMetaControl: () => (/* binding */ PostMetaControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


const compareMetaOptions = ['=', '!=', '>', '>=', '<', '<=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN', 'BETWEEN', 'NOT BETWEEN', 'EXISTS', 'NOT EXISTS', 'REGEXP', 'NOT REGEXP', 'RLIKE'];
const PostMetaControl = ({
  registeredMetaKeys,
  id,
  queries,
  attributes,
  setAttributes
}) => {
  const activeQuery = queries.find(query => query.id === id);

  /**
   * Update a query param.
   *
   * @param {*} queries
   * @param {*} queryId
   * @param {*} item
   * @param {*} value
   * @returns
   */
  const updateQueryParam = (queries, queryId, item, value) => {
    return queries.map(query => {
      if (query.id === queryId) {
        return {
          ...query,
          [item]: value
        };
      }
      return query;
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start typing to search for a meta key or manually enter one.', 'gatherpress-query-loop')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Key', 'gatherpress-query-loop'),
    value: activeQuery?.meta_key?.length ? [activeQuery.meta_key] : [],
    __experimentalShowHowTo: false,
    suggestions: registeredMetaKeys,
    maxLength: 1,
    onChange: newMeta => {
      setAttributes({
        query: {
          ...attributes.query,
          meta_query: {
            ...attributes.query.meta_query,
            queries: updateQueryParam(queries, id, 'meta_key', newMeta[0])
          }
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Value', 'gatherpress-query-loop'),
    value: activeQuery.meta_value,
    onChange: newValue => {
      setAttributes({
        query: {
          ...attributes.query,
          meta_query: {
            ...attributes.query.meta_query,
            queries: updateQueryParam(queries, id, 'meta_value', newValue)
          }
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Compare', 'gatherpress-query-loop'),
    value: activeQuery.meta_compare,
    options: [...compareMetaOptions.map(operator => {
      return {
        label: operator,
        value: operator
      };
    })],
    onChange: newCompare => {
      setAttributes({
        query: {
          ...attributes.query,
          meta_query: {
            ...attributes.query.meta_query,
            queries: updateQueryParam(queries, id, 'meta_compare', newCompare)
          }
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSmall: true,
    variant: "secondary",
    isDestructive: true,
    onClick: () => {
      const updatedQueries = queries.filter(query => query.id !== id);
      setAttributes({
        query: {
          ...attributes.query,
          meta_query: {
            ...attributes.query.meta_query,
            queries: updatedQueries
          }
        }
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove meta query', 'gatherpress-query-loop')));
};

/***/ }),

/***/ "./src/components/post-meta-query-controls.js":
/*!****************************************************!*\
  !*** ./src/components/post-meta-query-controls.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostMetaQueryControls: () => (/* binding */ PostMetaQueryControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _post_meta_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-meta-control */ "./src/components/post-meta-control.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Converts the meta keys from the all sources into a single array.
 *
 * @param {Array} records
 * @return {Array} meta keys
 */
const combineMetaKeys = records => {
  return {
    ...records?.[0]?.meta,
    ...records?.[0]?.acf
  };
};

// A component to render a select control for the post meta query.
const PostMetaQueryControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      postType,
      meta_query: {
        relation: relationFromQuery = '',
        queries = []
      } = {}
    } = {}
  } = attributes;
  const {
    records
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)('postType', postType, {
    per_page: 1
  });
  const [selectedPostType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(postType);
  const registeredMeta = combineMetaKeys(records);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // If the post type changes, reset the meta query.
    if (postType !== selectedPostType) {
      setAttributes({
        query: {
          ...attributes.query,
          meta_query: {}
        }
      });
    }
  }, [postType]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Meta Query', 'gatherpress-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, queries.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Query Relationship', 'gatherpress-query-loop'),
    value: relationFromQuery,
    options: [{
      label: 'Choose relationship',
      value: ''
    }, {
      label: 'AND',
      value: 'AND'
    }, {
      label: 'OR',
      value: 'OR'
    }],
    onChange: relation => setAttributes({
      query: {
        ...attributes.query,
        meta_query: {
          ...attributes.query.meta_query,
          relation
        }
      }
    })
  }), queries.length < 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add a meta query to select post meta to query', 'gatherpress-query-loop')), queries.map(({
    id,
    meta_key: metaKey,
    meta_value: metaValue,
    compare
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      key: id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_meta_control__WEBPACK_IMPORTED_MODULE_5__.PostMetaControl, {
      id: id,
      metaKey: metaKey,
      metaValue: metaValue,
      metaCompare: compare,
      registeredMetaKeys: Object.keys(registeredMeta),
      queries: queries,
      attributes: attributes,
      setAttributes: setAttributes
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSmall: true,
    variant: "primary",
    onClick: () => {
      const newQueries = [...queries, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        meta_key: '',
        meta_value: '',
        meta_compare: ''
      }];
      setAttributes({
        query: {
          ...attributes.query,
          meta_query: {
            ...attributes.query.meta_query,
            queries: newQueries
          }
        }
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add meta query', 'gatherpress-query-loop'))));
};

/***/ }),

/***/ "./src/components/post-offset-controls.js":
/*!************************************************!*\
  !*** ./src/components/post-offset-controls.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostOffsetControls: () => (/* binding */ PostOffsetControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */

// eslint-disable-next-line @wordpress/no-unsafe-wp-apis


const PostOffsetControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      offset = 0
    } = {}
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Offset', 'gatherpress-query-loop'),
    value: offset,
    min: 0,
    onChange: newOffset => {
      setAttributes({
        query: {
          ...attributes.query,
          offset: newOffset
        }
      });
    }
  });
};

/***/ }),

/***/ "./src/components/post-order-controls.js":
/*!***********************************************!*\
  !*** ./src/components/post-order-controls.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostOrderControls: () => (/* binding */ PostOrderControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * PostOrderControls component
 *
 * @param {*} param0
 * @return {Element} PostCountControls
 */
const PostOrderControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      order,
      orderBy
    } = {}
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Order By', 'gatherpress-query-loop'),
    value: orderBy,
    help: orderBy === 'meta_value' || orderBy === 'meta_value_num' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Value and Meta Value Num require that Meta Key is set in the Meta Query section.', 'gatherpress-query-loop') : '',
    options: [
    // The 'gp_event' post_type does not support 'author'.
    // {
    // 	label: __( 'Author', 'gatherpress-query-loop' ),
    // 	value: 'author',
    // },
    {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'gatherpress-query-loop'),
      value: 'date'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Last Modified Date', 'gatherpress-query-loop'),
      value: 'modified'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'gatherpress-query-loop'),
      value: 'title'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Value', 'gatherpress-query-loop'),
      value: 'meta_value'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Value Num', 'gatherpress-query-loop'),
      value: 'meta_value_num'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Random', 'gatherpress-query-loop'),
      value: 'rand'
    },
    // The 'gp_event' post_type does not support 'page_attributes'.
    // {
    // 	label: __( 'Menu Order', 'gatherpress-query-loop' ),
    // 	value: 'menu_order',
    // },
    {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post ID', 'gatherpress-query-loop'),
      value: 'id'
    }],
    onChange: newOrderBy => {
      setAttributes({
        query: {
          ...attributes.query,
          orderBy: newOrderBy
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ascending Order', 'gatherpress-query-loop'),
    checked: order === 'asc',
    onChange: () => {
      setAttributes({
        query: {
          ...attributes.query,
          order: order === 'asc' ? 'desc' : 'asc'
        }
      });
    }
  }));
};

/***/ }),

/***/ "./src/slots/gpql-controls-inherited-query.js":
/*!****************************************************!*\
  !*** ./src/slots/gpql-controls-inherited-query.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */


/**
 * Create our Slot and Fill components
 */
const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('GPQLControlsInheritedQuery');
const GPQLControlsInheritedQuery = ({
  children
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, children);
GPQLControlsInheritedQuery.Slot = Slot;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GPQLControlsInheritedQuery);

/***/ }),

/***/ "./src/slots/gpql-controls.js":
/*!************************************!*\
  !*** ./src/slots/gpql-controls.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */


/**
 * Create our Slot and Fill components
 */
const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('GPQLControls');
const GPQLControls = ({
  children
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, children);
GPQLControls.Slot = ({
  fillProps
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Slot, {
  fillProps: fillProps
}, fills => {
  return fills.length ? fills : null;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GPQLControls);

/***/ }),

/***/ "./src/variations/controls.js":
/*!************************************!*\
  !*** ./src/variations/controls.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./src/variations/index.js");
/* harmony import */ var _slots_gpql_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slots/gpql-controls */ "./src/slots/gpql-controls.js");
/* harmony import */ var _slots_gpql_controls_inherited_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slots/gpql-controls-inherited-query */ "./src/slots/gpql-controls-inherited-query.js");
/* harmony import */ var _components_post_count_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/post-count-controls */ "./src/components/post-count-controls.js");
/* harmony import */ var _components_post_offset_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/post-offset-controls */ "./src/components/post-offset-controls.js");
/* harmony import */ var _components_post_meta_query_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/post-meta-query-controls */ "./src/components/post-meta-query-controls.js");
/* harmony import */ var _components_post_date_query_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/post-date-query-controls */ "./src/components/post-date-query-controls.js");
/* harmony import */ var _components_post_order_controls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/post-order-controls */ "./src/components/post-order-controls.js");
/* harmony import */ var _components_post_exclude_controls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/post-exclude-controls */ "./src/components/post-exclude-controls.js");
/* harmony import */ var _components_event_list_type_controls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/event-list-type-controls */ "./src/components/event-list-type-controls.js");

/**
 * WordPress dependencies
 */




/**
 *  Internal dependencies
 */







// import { MultiplePostSelect } from '../components/multiple-post-select';




/**
 * Determines if the active variation is this one
 *
 * @param {*} props
 * @return {boolean} Is this the correct variation?
 */
const isGatherPressQueryLoop = props => {
  const {
    attributes: {
      namespace
    }
  } = props;
  return namespace && namespace === ___WEBPACK_IMPORTED_MODULE_5__.GPQL;
};

/**
 * Custom controls
 *
 * @param {*} BlockEdit
 * @return {Element} BlockEdit instance
 */
const withGatherPressQueryControls = BlockEdit => props => {
  // If the is the correct variation, add the custom controls.
  if (isGatherPressQueryLoop(props)) {
    // If the inherit prop is false, add all the controls.
    const {
      attributes
    } = props;
    if (attributes.query.inherit === false) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('GatherPress Query Settings', 'gatherpress-query-loop')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_event_list_type_controls__WEBPACK_IMPORTED_MODULE_14__.EventListTypeControls, {
        ...props
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post_count_controls__WEBPACK_IMPORTED_MODULE_8__.PostCountControls, {
        ...props
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post_offset_controls__WEBPACK_IMPORTED_MODULE_9__.PostOffsetControls, {
        ...props
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post_order_controls__WEBPACK_IMPORTED_MODULE_12__.PostOrderControls, {
        ...props
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post_exclude_controls__WEBPACK_IMPORTED_MODULE_13__.PostExcludeControls, {
        ...props
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post_meta_query_controls__WEBPACK_IMPORTED_MODULE_10__.PostMetaQueryControls, {
        ...props
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post_date_query_controls__WEBPACK_IMPORTED_MODULE_11__.PostDateQueryControls, {
        ...props
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_slots_gpql_controls__WEBPACK_IMPORTED_MODULE_6__["default"].Slot, {
        fillProps: {
          ...props
        }
      }))));
    }
    // Add some controls if the inherit prop is true.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('GatherPress Query Settings', 'gatherpress-query-loop')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post_order_controls__WEBPACK_IMPORTED_MODULE_12__.PostOrderControls, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_slots_gpql_controls_inherited_query__WEBPACK_IMPORTED_MODULE_7__["default"].Slot, {
      fillProps: {
        ...props
      }
    }))));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
    ...props
  });
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'core/query', withGatherPressQueryControls);

/***/ }),

/***/ "./src/variations/index.js":
/*!*********************************!*\
  !*** ./src/variations/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GPQL: () => (/* binding */ GPQL),
/* harmony export */   GPQLControls: () => (/* reexport safe */ _slots_gpql_controls__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   GPQLControlsInheritedQuery: () => (/* reexport safe */ _slots_gpql_controls_inherited_query__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/variations/controls.js");
/* harmony import */ var _slots_gpql_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slots/gpql-controls */ "./src/slots/gpql-controls.js");
/* harmony import */ var _slots_gpql_controls_inherited_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slots/gpql-controls-inherited-query */ "./src/slots/gpql-controls-inherited-query.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

// import GPQLIcon from '../components/icons';


const GPQL = 'gatherpress-query-loop';
const GPQL_DEFAULT_ATTRIBUTES = {
  namespace: GPQL,
  query: {
    perPage: 3,
    pages: 0,
    offset: 0,
    postType: 'gp_event',
    gp_events_query: 'upcoming',
    order: 'desc',
    orderBy: 'date',
    //   author: '',
    //   search: '',
    //   exclude: [],
    //   sticky: '',
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
 * 
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/query', {
  name: GPQL,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('GatherPress Query Loop', 'gatherpress-query-loop'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Create gatherpress queries', 'gatherpress-query-loop'),
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
   * Having innerBlocks in the variation
   * essentially skips the setup phase of the Query Loop block with suggested patterns 
   * and the block is inserted with these inner blocks as its starting content.
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
  /* 	
  example: [
  	'core/post-template',
  	{},
  	[
  		[ 'gatherpress/event-date' ],
  		[ 'core/post-title' ],
  		[ 'core/post-excerpt' ]
  	],
  ], */
  example: {
    attributes: {
      ...GPQL_DEFAULT_ATTRIBUTES
    },
    innerBlocks: [{
      name: 'core/post-template',
      attributes: {},
      innerBlocks: [{
        name: 'gatherpress/event-date'
      }, {
        name: 'core/post-title'
      }, {
        name: 'gatherpress/venue',
        attributes: {
          mapShow: false
        }
      }]
    }]
  }
});

/* 
  */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/query', {
  name: 'gatherpress-query-loop-map-date',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('GatherPress Query Loop MAP & DATE', 'gatherpress-query-loop'),
  // description: __( 'Create gatherpress queries', 'gatherpress-query-loop' ),
  // icon: GPQLIcon,
  // icon: 'nametag',
  example: [],
  isActive: ['namespace', 'scope'],
  attributes: {
    ...GPQL_DEFAULT_ATTRIBUTES
  },
  allowedControls: ['inherit', 'taxQuery'],
  scope: ['block'],
  /*
   * Having innerBlocks in the variation
   * essentially skips the setup phase of the Query Loop block with suggested patterns 
   * and the block is inserted with these inner blocks as its starting content.
   *
   * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/#customize-your-variation-layout
   */
  innerBlocks: [['core/post-template', {}, [['gatherpress/venue'], ['gatherpress/event-date']]], ['core/query-pagination'], ['core/query-no-results']]
});

/*
  */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/query', {
  name: 'gatherpress-query-loop-date-title',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('GatherPress Query Loop DATE & TITLE', 'gatherpress-query-loop'),
  // description: __( 'Create gatherpress queries', 'gatherpress-query-loop' ),
  // icon: GPQLIcon,
  icon: 'nametag',
  isActive: ['namespace', 'scope'],
  attributes: {
    ...GPQL_DEFAULT_ATTRIBUTES
  },
  allowedControls: ['inherit', 'taxQuery'],
  scope: ['block'],
  /*
   * Having innerBlocks in the variation
   * essentially skips the setup phase of the Query Loop block with suggested patterns 
   * and the block is inserted with these inner blocks as its starting content.
   *
   * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/#customize-your-variation-layout
   */
  innerBlocks: [['core/post-template', {}, [['gatherpress/event-date'], ['core/post-title']]], ['core/query-pagination'], ['core/query-no-results']]
});

/*
  */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/query', {
  name: 'gatherpress-query-loop-date-address',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('GatherPress Query Loop DATE & ADDRESS', 'gatherpress-query-loop'),
  // description: __( 'Create gatherpress queries', 'gatherpress-query-loop' ),
  // icon: GPQLIcon,
  icon: 'nametag',
  isActive: ['namespace', 'scope'],
  attributes: {
    ...GPQL_DEFAULT_ATTRIBUTES
  },
  allowedControls: ['inherit', 'taxQuery'],
  scope: ['block'],
  /*
   * Having innerBlocks in the variation
   * essentially skips the setup phase of the Query Loop block with suggested patterns 
   * and the block is inserted with these inner blocks as its starting content.
   *
   * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/#customize-your-variation-layout
   */
  innerBlocks: [['core/post-template', {}, [['gatherpress/event-date'], ['gatherpress/venue', {
    mapShow: false
  }]]], ['core/query-pagination'], ['core/query-no-results']]
});


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/variations/index.js");
/******/ 	gpql = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=variations.js.map