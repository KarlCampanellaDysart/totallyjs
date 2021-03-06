'use strict';

define([

  /**
	* @requires jview/tags/tagObject
	* @requires viewObjectParser
    */
	'jview/tags/tagObject',
	'viewObjectParser'

	], function(to, vop){

  /**
	* Tag Module - used to create html tag objects
	
	* @exports jview/tags/tags
	*/
	var tags = {

	  /**
		* Function to create the 'a' html tag
		
		* @function a
		* @alias jview/tags/tags.a

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		a: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'a'); },

	  /**
		* Function to create the 'abbr' html tag
		
		* @function abbr
		* @alias jview/tags/tags.abbr

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		abbr: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'abbr'); },

	  /**
		* Function to create the 'address' html tag
		
		* @function address
		* @alias jview/tags/tags.address

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		address: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'address'); },

		/**
		* Function to create the 'area' html tag
		
		* @function area
		* @alias jview/tags/tags.area

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		area: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'area'); },

	  /**
		* Function to create the 'b' html tag
		
		* @function b
		* @alias jview/tags/tags.b

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		b: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'b'); },

	  /**
		* Function to create the 'base' html tag
		
		* @function base
		* @alias jview/tags/tags.base

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		base: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'base'); },

	  /**
		* Function to create the 'bdo' html tag
		
		* @function bdo
		* @alias jview/tags/tags.bdo

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		bdo: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'bdo'); },

	  /**
		* Function to create the 'blockquote' html tag
		
		* @function blockquote
		* @alias jview/tags/tags.blockquote

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		blockquote: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'blockquote'); },

	  /**
		* Function to create the 'body' html tag
		
		* @function body	
		* @alias jview/tags/tags.body

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		body: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'body'); },

	  /**
		* Function to create the 'br' html tag
		
		* @function br
		* @alias jview/tags/tags.br

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		br: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'br'); },

	  /**
		* Function to create the 'button' html tag
		
		* @function button
		* @alias jview/tags/tags.button

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		button: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'button'); },

	  /**
		* Function to create the 'caption' html tag
		
		* @function caption
		* @alias jview/tags/tags.caption

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		caption: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'caption'); },

	  /**
		* Function to create the 'cite' html tag
		
		* @function cite
		* @alias jview/tags/tags.cite

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		cite: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'cite'); },

	  /**
		* Function to create the 'code' html tag
		
		* @function code
		* @alias jview/tags/tags.code

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		code: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'code'); },

	  /**
		* Function to create the 'col' html tag
		
		* @function col
		* @alias jview/tags/tags.col

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		col: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'col'); },

	  /**
		* Function to create the 'colgroup' html tag
		
		* @function colgroup
		* @alias jview/tags/tags.colgroup

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		colgroup: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'colgroup'); },

	  /**
		* Function to create the 'dd' html tag
		
		* @function dd
		* @alias jview/tags/tags.dd

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		dd: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'dd'); },

	  /**
		* Function to create the 'del' html tag
		
		* @function del
		* @alias jview/tags/tags.del

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		del: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'del'); },

	  /**
		* Function to create the 'dfn' html tag
		
		* @function dfn
		* @alias jview/tags/tags.dfn

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		dfn: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'dfn'); },

	  /**
		* Function to create the 'div' html tag
		
		* @function div
		* @alias jview/tags/tags.div

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		div: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'div'); },

	  /**
		* Function to create the 'dl' html tag
		
		* @function dl
		* @alias jview/tags/tags.dl

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		dl: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'dl'); },

	  /**
		* Function to create the 'dt' html tag
		
		* @function dt
		* @alias jview/tags/tags.dt

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		dt: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'dt'); },

	  /**
		* Function to create the 'em' html tag
		
		* @function em
		* @alias jview/tags/tags.em

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		em: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'em'); },

	  /**
		* Function to create the 'fieldset' html tag
		
		* @function fieldset
		* @alias jview/tags/tags.fieldset

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		fieldset: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'fieldset'); },

	  /**
		* Function to create the 'form' html tag
		
		* @function form
		* @alias jview/tags/tags.form

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		form: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'form'); },

	  /**
		* Function to create the 'h1' html tag
		
		* @function h1
		* @alias jview/tags/tags.h1

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		h1: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'h1'); },

	  /**
		* Function to create the 'h2' html tag
		
		* @function h2
		* @alias jview/tags/tags.h2

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		h2: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'h2'); },

	  /**
		* Function to create the 'h3' html tag
		
		* @function h3
		* @alias jview/tags/tags.h3

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		h3: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'h3'); },

	  /**
		* Function to create the 'h4' html tag
		
		* @function h4
		* @alias jview/tags/tags.h4

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		h4: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'h4'); },

	  /**
		* Function to create the 'h5' html tag
		
		* @function h5
		* @alias jview/tags/tags.h5

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		h5: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'h5'); },

	  /**
		* Function to create the 'h6' html tag
		
		* @function h6
		* @alias jview/tags/tags.h6

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		h6: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'h6'); },

	  /**
		* Function to create the 'head' html tag
		
		* @function head
		* @alias jview/tags/tags.head

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		head: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'head'); },

	  /**
		* Function to create the 'hr' html tag
		
		* @function hr
		* @alias jview/tags/tags.hr

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		hr: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'hr'); },

	  /**
		* Function to create the 'html' html tag
		
		* @function html
		* @alias jview/tags/tags.html

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		html: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'html'); },

	  /**
		* Function to create the 'i' html tag
		
		* @function i
		* @alias jview/tags/tags.i

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		i: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'i'); },

	  /**
		* Function to create the 'iframe' html tag
		
		* @function iframe
		* @alias jview/tags/tags.iframe

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		iframe: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'iframe'); },

	  /**
		* Function to create the 'img' html tag
		
		* @function img
		* @alias jview/tags/tags.img

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		img: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'img'); },

	  /**
		* Function to create the 'input' html tag
		
		* @function input
		* @alias jview/tags/tags.input

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		input: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'input'); },

	  /**
		* Function to create the 'ins' html tag
		
		* @function ins
		* @alias jview/tags/tags.ins

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		ins: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'ins'); },

	  /**
		* Function to create the 'kbd' html tag
		
		* @function kbd
		* @alias jview/tags/tags.kbd

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		kbd: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'kbd'); },

	  /**
		* Function to create the 'label' html tag
		
		* @function label
		* @alias jview/tags/tags.label

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		label: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'label'); },

	  /**
		* Function to create the 'legend' html tag
		
		* @function legend
		* @alias jview/tags/tags.legend

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		legend: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'legend'); },

	  /**
		* Function to create the 'li' html tag
		
		* @function li
		* @alias jview/tags/tags.li

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		li: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'li'); },

	  /**
		* Function to create the 'link' html tag
		
		* @function link
		* @alias jview/tags/tags.link

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		link: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'link'); },

	  /**
		* Function to create the 'map' html tag
		
		* @function map
		* @alias jview/tags/tags.map

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		map: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'map'); },

	  /**
		* Function to create the 'menu' html tag
		
		* @function menu
		* @alias jview/tags/tags.menu

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		menu: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'form'); },

	  /**
		* Function to create the 'meta' html tag
		
		* @function meta
		* @alias jview/tags/tags.meta

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		meta: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'meta'); },

	  /**
		* Function to create the 'nav' html tag
		
		* @function nav
		* @alias jview/tags/tags.nav

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		nav: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'nav'); },

	  /**
		* Function to create the 'noscript' html tag
		
		* @function noscript
		* @alias jview/tags/tags.noscript

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		noscript: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'noscript'); },

	  /**
		* Function to create the 'object' html tag
		
		* @function object
		* @alias jview/tags/tags.object

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		object: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'object'); },

	  /**
		* Function to create the 'ol' html tag
		
		* @function ol
		* @alias jview/tags/tags.ol

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		ol: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'ol'); },

	  /**
		* Function to create the 'optgroup' html tag
		
		* @function optgroup
		* @alias jview/tags/tags.optgroup

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		optgroup: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'optgroup'); },

	  /**
		* Function to create the 'option' html tag
		
		* @function option
		* @alias jview/tags/tags.option

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		option: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'option'); },

	  /**
		* Function to create the 'p' html tag
		
		* @function p
		* @alias jview/tags/tags.p

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		p: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'p'); },

	  /**
		* Function to create the 'param' html tag
		
		* @function param
		* @alias jview/tags/tags.param

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		param: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'param'); },

	  /**
		* Function to create the 'pre' html tag
		
		* @function pre
		* @alias jview/tags/tags.pre

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		pre: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'pre'); },

	  /**
		* Function to create the 'q' html tag
		
		* @function q
		* @alias jview/tags/tags.q

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		q: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'q'); },

	  /**
		* Function to create the 's' html tag
		
		* @function s
		* @alias jview/tags/tags.s

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		s: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 's'); },

	  /**
		* Function to create the 'samp' html tag
		
		* @function samp
		* @alias jview/tags/tags.samp

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		samp: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'samp'); },

	  /**
		* Function to create the 'script' html tag
		
		* @function script
		* @alias jview/tags/tags.script

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		script: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'script'); },

	  /**
		* Function to create the 'select' html tag
		
		* @function select
		* @alias jview/tags/tags.select

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		select: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'select'); },

	  /**
		* Function to create the 'small' html tag
		
		* @function small
		* @alias jview/tags/tags.small

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		small: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'small'); },

	  /**
		* Function to create the 'span' html tag
		
		* @function span
		* @alias jview/tags/tags.span

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		span: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'span'); },

	  /**
		* Function to create the 'strong' html tag
		
		* @function strong
		* @alias jview/tags/tags.strong

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		strong: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'strong'); },

	  /**
		* Function to create the 'style' html tag
		
		* @function style
		* @alias jview/tags/tags.style

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		style: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'style'); },

	  /**
		* Function to create the 'sub' html tag
		
		* @function sub
		* @alias jview/tags/tags.sub

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		sub: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'sub'); },

	  /**
		* Function to create the 'sup' html tag
		
		* @function sup
		* @alias jview/tags/tags.sup

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		sup: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'sup'); },

	  /**
		* Function to create the 'table' html tag
		
		* @function table
		* @alias jview/tags/tags.table

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		table: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'table'); },

	  /**
		* Function to create the 'tbody' html tag
		
		* @function tbody
		* @alias jview/tags/tags.tbody

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		tbody: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'tbody'); },

	  /**
		* Function to create the 'td' html tag
		
		* @function td
		* @alias jview/tags/tags.td

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		td: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'td'); },

	  /**
		* Function to create the 'textarea' html tag
		
		* @function textarea
		* @alias jview/tags/tags.textarea

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		textarea: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'textarea'); },

	  /**
		* Function to create the 'tfoot' html tag
		
		* @function tfoot
		* @alias jview/tags/tags.tfoot

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		tfoot: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'tfoot'); },

	  /**
		* Function to create the 'th' html tag
		
		* @function th
		* @alias jview/tags/tags.th

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		th: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'th'); },

	  /**
		* Function to create the 'thead' html tag
		
		* @function thead
		* @alias jview/tags/tags.thead

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		thead: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'thead'); },

	  /**
		* Function to create the 'title' html tag
		
		* @function title
		* @alias jview/tags/tags.title

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		title: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'title'); },

	  /**
		* Function to create the 'tr' html tag
		
		* @function tr
		* @alias jview/tags/tags.tr

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		tr: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'tr'); },

	  /**
		* Function to create the 'u' html tag
		
		* @function u
		* @alias jview/tags/tags.u

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		u: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'u'); },

	  /**
		* Function to create the 'ul' html tag
		
		* @function ul
		* @alias jview/tags/tags.ul

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		ul: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'ul'); },

	  /**
		* Function to create the 'jvar' html tag
		
		* @function jvar
		* @alias jview/tags/tags.jvar

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		jvar: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'var'); },

		//html 5

	  /**
		* Function to create the 'article' html tag
		
		* @function article
		* @alias jview/tags/tags.article

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		article: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'aritcle'); },

	  /**
		* Function to create the 'aside' html tag
		
		* @function aside
		* @alias jview/tags/tags.aside

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		aside: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'aside'); },

	  /**
		* Function to create the 'audio' html tag
		
		* @function audio
		* @alias jview/tags/tags.audio

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		audio: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'adio'); },

	  /**
		* Function to create the 'bdi' html tag
		
		* @function bdi
		* @alias jview/tags/tags.bdi

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		bdi: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'bdi'); },

	  /**
		* Function to create the 'canvas' html tag
		
		* @function canvas
		* @alias jview/tags/tags.canvas

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		canvas: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'canvas'); },

	  /**
		* Function to create the 'datalist' html tag
		
		* @function datalist
		* @alias jview/tags/tags.datalist

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		datalist: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'datalist'); },

	  /**
		* Function to create the 'details' html tag
		
		* @function details
		* @alias jview/tags/tags.details

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		details: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'details'); },

	  /**
		* Function to create the 'dialog' html tag
		
		* @function dialog
		* @alias jview/tags/tags.dialog

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		dialog: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'dialog'); },

	  /**
		* Function to create the 'embed' html tag
		
		* @function embed
		* @alias jview/tags/tags.embed

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		embed: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'embed'); },

	  /**
		* Function to create the 'figcaption' html tag
		
		* @function figcaption
		* @alias jview/tags/tags.figcaption

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		figcaption: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'figcaption'); },

	  /**
		* Function to create the 'figure' html tag
		
		* @function figure
		* @alias jview/tags/tags.figure

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		figure: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'figure'); },

	  /**
		* Function to create the 'footer' html tag
		
		* @function footer
		* @alias jview/tags/tags.footer

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		footer: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'footer'); },

	  /**
		* Function to create the 'header' html tag
		
		* @function header
		* @alias jview/tags/tags.header

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		header: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'header') },

	  /**
		* Function to create the 'keygen' html tag
		
		* @function keygen
		* @alias jview/tags/tags.keygen

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		keygen: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'keygen'); },

	  /**
		* Function to create the 'main' html tag
		
		* @function main
		* @alias jview/tags/tags.main

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		main: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'main'); },

	  /**
		* Function to create the 'mark' html tag
		
		* @function mark
		* @alias jview/tags/tags.mark

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		mark: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'mark'); },

	  /**
		* Function to create the 'menuitem' html tag
		
		* @function menuitem
		* @alias jview/tags/tags.menuitem

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		menuitem: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'form'); },

	  /**
		* Function to create the 'meter' html tag
		
		* @function meter
		* @alias jview/tags/tags.meter

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		meter: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'meter'); },

	  /**
		* Function to create the 'output' html tag
		
		* @function output
		* @alias jview/tags/tags.output

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		output: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'output'); },

	  /**
		* Function to create the 'progress' html tag
		
		* @function progress
		* @alias jview/tags/tags.progress

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		progress: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'progress'); },

	  /**
		* Function to create the 'rp' html tag
		
		* @function rp
		* @alias jview/tags/tags.rp

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		rp: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'rp'); },

	  /**
		* Function to create the 'rt' html tag
		
		* @function rt
		* @alias jview/tags/tags.rt

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		rt: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'rt'); },

	  /**
		* Function to create the 'ruby' html tag
		
		* @function ruby
		* @alias jview/tags/tags.ruby

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		ruby: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'ruby'); },

	  /**
		* Function to create the 'section' html tag
		
		* @function section
		* @alias jview/tags/tags.section

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		section: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'section'); },

	  /**
		* Function to create the 'source' html tag
		
		* @function source
		* @alias jview/tags/tags.source

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		source: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'source'); },

	  /**
		* Function to create the 'summary' html tag
		
		* @function summary
		* @alias jview/tags/tags.summary

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		summary: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'summary'); },

	  /**
		* Function to create the 'time' html tag
		
		* @function time
		* @alias jview/tags/tags.time

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		time: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'time'); },

	  /**
		* Function to create the 'track' html tag
		
		* @function track
		* @alias jview/tags/tags.track

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		track: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'track'); },

	  /**
		* Function to create the 'video' html tag
		
		* @function video
		* @alias jview/tags/tags.video

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		video: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'video'); },

	  /**
		* Function to create the 'wbr' html tag
		
		* @function wbr
		* @alias jview/tags/tags.wbr

		* @param {string} _identifier - string of all tag identifiers
		* @param {Object[]} _content - all tag objects within the current tag object
		* @returns {string} tag object
		*/
		wbr: function(_identifier, _content){ return to.tagObjectBuilder(vop.parseIdentifiers(_identifier), _content, 'wbr'); }
	};

	//export tags object
	return tags;
});