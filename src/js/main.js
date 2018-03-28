( function( window ) {

  'use strict';

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }

  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else {
    // browser global
    window.classie = classie;
  }

  })( window );


  // MODAL DIALOG COMPONENT

  var ModalEffects = (function() {

    function init() {

      var overlay = document.querySelector( '.md-overlay' );

      [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

        var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
          close = modal.querySelector( '.md-close' );

        function removeModal( hasPerspective ) {
          classie.remove( modal, 'md-show' );

          if( hasPerspective ) {
            classie.remove( document.documentElement, 'md-perspective' );
          }
        }

        function removeModalHandler() {
          removeModal( classie.has( el, 'md-setperspective' ) );
        }

        el.addEventListener( 'click', function( ev ) {
          classie.add( modal, 'md-show' );
          overlay.removeEventListener( 'click', removeModalHandler );
          overlay.addEventListener( 'click', removeModalHandler );

          if( classie.has( el, 'md-setperspective' ) ) {
            setTimeout( function() {
              classie.add( document.documentElement, 'md-perspective' );
            }, 25 );
          }
        });

        close.addEventListener( 'click', function( ev ) {
          ev.stopPropagation();
          removeModalHandler();
        });

      } );

    }

    init();

  })();

  // ACCORDION COMPONENT

  (function($) {
      $('.accordion > li:eq(0) a.drop').addClass('active').next().slideDown();

      $('.accordion a.drop').click(function(j) {
          var dropDown = $(this).closest('li').find('div');

          $(this).closest('.accordion').find('div').not(dropDown).slideUp();

          if ($(this).hasClass('active')) {
              $(this).removeClass('active');
          } else {
              $(this).closest('.accordion').find('a.active').removeClass('active');
              $(this).addClass('active');
          }

          dropDown.stop(false, true).slideToggle();

          j.preventDefault();
      });
  })(jQuery);

  // TABS COMPONENT
  // tabbed content
      $(".tab_content").hide();
      $(".tab_content:first").show();


    /* if in tab mode */
      $("ul.tabs li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
       // $("#"+activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

      });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
      //  $("#"+d_activeTab).fadeIn();

      $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

      $("ul.tabs li").removeClass("active");
      $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
      });


    /* Extra class "tab_last"
       to add border to right side
       of last tab */
    $('ul.tabs li').last().addClass("tab_last");


  /*
      TOGGLE MENU
  */


  $('#toggle-menu').on('click', function (e) {
          e.preventDefault();
          $('header').toggleClass('header-opened');
  });

  $('.header-overlay').on('click', function (e) {
          e.preventDefault();
          $('header').toggleClass('header-opened');
  });
