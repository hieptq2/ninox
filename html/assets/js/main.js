/**
 * REQUIREJS configuration file
 *
 */

(function(){
  'use strict';

  requirejs.config({

    baseUrl: 'assets/js',
    paths: {

    	// libs
      'jquery':           'libs/jquery.min',
      'bootstrap':        'libs/bootstrap.bundle.min',
      'cytoscape':        'libs/cytoscape.umd',
      'cytoscape':        'libs/cytoscape.min',
      'cytoscape-html':   'libs/cytoscape-node-html-label.min',
      'daterangepicker':  'libs/daterangepicker',
      'easing':           'libs/jquery.easing.min',	
      'moment':           'libs/moment.min',
      'slick':            'libs/slick.min',
      'select2':          'libs/select2.min',
      'select2vie':       'libs/i18n/vi',
      'swiper':           'libs/swiper.min',

      // modules
      'base':           'modules/base',
      'header':         'modules/header',
      'footer':         'modules/footer',
      'page':           'modules/page',

      'components':     'modules/components',
      'landing':        'modules/landing',
      'profile':        'modules/profile',
      'lesson':         'modules/lesson',
      'report':         'modules/report',
      'login':          'modules/login',
      'home':           'modules/home'
    },

    shim:{

  		// libraries
      'jquery': {
        exports: '$'
      },
      'chart':{
        deps: ['jquery', 'moment']
      },
      'daterangepicker':{
        deps: ['jquery', 'moment']
      },
      'easing': {
      	deps: ['jquery']
      },
      'slick':{
        deps: ['jquery']
      },
      'select2vie':{
        deps: ['select2']
      },

      // modules
      'base': {
        deps: ['jquery', 'bootstrap', 'easing', 'select2', 'select2vie', 'daterangepicker']
      },
      'header': {
        deps: ['jquery', 'bootstrap', 'easing']
      },
      'footer': {
        deps: ['jquery', 'bootstrap', 'easing']
      },

      'page':{
        deps: ['jquery', 'bootstrap', 'easing']
      },
      'components':{
        deps: ['jquery', 'bootstrap', 'easing']
      },
      'landing':{
        deps: ['jquery', 'bootstrap', 'easing']
      },
      'profile': {
        deps: ['jquery', 'bootstrap', 'easing']
      },
      'lesson': {
        deps: ['jquery', 'bootstrap', 'easing', 'slick']
      },
      'report': {
        deps: ['jquery', 'bootstrap', 'easing']
      },
      'login': {
        deps: ['jquery', 'bootstrap', 'easing']
      },
      'home': {
        deps: ['jquery', 'bootstrap', 'easing', 'slick']
      }
      
    }
  });

  require([
    'base',
    'header',
    'footer',
  	'jquery',
  	'bootstrap',
  	'easing'
  ], function(base, header, footer, $, bootstrap, easing){

    // Global module
    base.init();
    header.init();
    footer.init();

    // Page specific module
    var currentModule = $('#SiteContent').attr('data-js-module');
    var listModules = ['components', 'page', 'landing', 'profile', 'lesson', 'report', 'login', 'home'];

    if (currentModule && $.inArray(currentModule, listModules) !== -1) {
      require([currentModule], function (currentModule) {
        currentModule.init();
      });
    }else{
      console.log('Not found any Specific Module of Current Page in #SiteContent');
    }
  });


  // sample data

  // require([
  //     'cytoscape', 'libs/cytoscape-node-html-label.min'
  //   ], function(cytoscape, nodeHtmlLabel){

  //     // nodeHtmlLabel( cytoscape );

  //     var cy = cytoscape({

  //       container: document.getElementById('RoadmapSample'),

  //       elements: {
  //         nodes: [
  //           { data: { id: 'rmNode01', }, classes: 'rm__node--not-required' },
  //           { data: { id: 'rmNode02', }, classes: 'rm__node--required' },
  //           { data: { id: 'rmNode03', }, classes: ['rm__node--not-required', 'rm__node--completed'] },
  //           { data: { id: 'rmNode04', }, classes: ['rm__node--required', 'rm__node--completed'] }
  //         ],
  //         edges: [
  //           { data: { source: 'rmNode01', target: 'rmNode02' } },
  //           { data: { source: 'rmNode01', target: 'rmNode03' } },
  //           { data: { source: 'rmNode02', target: 'rmNode03' } },
  //           { data: { source: 'rmNode03', target: 'rmNode04' } }
  //         ]
  //       },

  //       style: [
  //         {
  //           selector: 'node',
  //           style: {
  //             'shape':            'rectangle',
  //             'width':            '24px',
  //             'height':           '24px',
  //             'background-color': '#fff',
  //             'border-width':     '2px',
  //             'border-style':     'solid',
  //             'border-color':     '#616161'
  //           }
  //         },{
  //           selector: '.rm__node--not-required',
  //           style: {
  //             'shape':            'ellipse',
  //           }
  //         },{
  //           selector: '.rm__node--required',
  //           style: {
  //             'shape':            'rectangle',
  //           }
  //         },{
  //           selector: '.rm__node--completed',
  //           style: {
  //             'background-color': '#e84e1c',
  //             'border-color':     '#e84e1c'
  //           }
  //         },{
  //           selector: 'edge',
  //           style: {
  //             'width': 2,
  //             'line-color': '#90caf9',
  //             'target-arrow-color': '#90caf9',
  //             'target-arrow-shape': 'triangle'
  //           }
  //         }
  //       ],

  //       // layout: {
  //       //   name: 'grid',
  //       //   rows: 5,
  //       //   cols: 4
  //       // }

  //     });

  //     cy.nodeHtmlLabel([
  //       {
  //         query: '#rmNode01',
  //         valign: "center",
  //         halign: "center",
  //         valignBox: "center",
  //         halignBox: "center",
  //         tpl: function(data) {
  //            return '<div class="cy-milestone"><div class="milestone-info">5/10</div><div class="milestone-label">Bài giảng</div></div>';
  //         }
  //       },
  //       {
  //         query: '#rmNode02',
  //         valign: "center",
  //         halign: "center",
  //         valignBox: "center",
  //         halignBox: "center",
  //         tpl: function(data) {
  //            return '<div class="cy-milestone"><div class="milestone-info">5/10</div><div class="milestone-label">Bài giảng</div></div>';
  //         }
  //       },
  //       {
  //         query: '#rmNode03',
  //         valign: "center",
  //         halign: "center",
  //         valignBox: "center",
  //         halignBox: "center",
  //         tpl: function(data) {
  //            return '<div class="cy-milestone"><div class="milestone-info">5/10</div><div class="milestone-label">Bài giảng</div></div>';
  //         }
  //       },
  //       {
  //         query: '#rmNode04',
  //         valign: "center",
  //         halign: "center",
  //         valignBox: "center",
  //         halignBox: "center",
  //         tpl: function(data) {
  //            return '<div class="cy-milestone"><div class="milestone-info">5/10</div><div class="milestone-label">Bài giảng</div></div>';
  //         }
  //       },
  //     ]);

  //   });

}());

