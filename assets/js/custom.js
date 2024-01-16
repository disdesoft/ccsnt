(function ($) {
    "use strict";

    // Page loading animation
    $(window).on('load', function () {
        $('#js-preloader').addClass('loaded');
    });

    // Header background toggle
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();

        $("header").toggleClass("background-header", scroll >= box - header);
    });

    // Reload on window resize for specific width range
    var width = $(window).width();
    $(window).resize(function () {
        if ((width > 767 && $(window).width() < 767) || (width < 767 && $(window).width() > 767)) {
            location.reload();
        }
    });

    // Initialize Isotope for event filtering
    const elem = document.querySelector('.event_box');
    const filtersElem = document.querySelector('.event_filter');

    if (elem) {
        const rdn_events_list = new Isotope(elem, {
            itemSelector: '.event_outer',
            layoutMode: 'masonry'
        });

        if (filtersElem) {
            filtersElem.addEventListener('click', function (event) {
                if (!event.target.matches('a')) {
                    return;
                }

                const filterValue = event.target.getAttribute('data-filter');
                rdn_events_list.arrange({
                    filter: filterValue
                });

                filtersElem.querySelector('.is_active').classList.remove('is_active');
                event.target.classList.add('is_active');
                event.preventDefault();
            });
        }
    }

    // Initialize Owl Carousels
    function initOwlCarousel(selector) {
        $(selector).owlCarousel({
            center: true,
            items: 1,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            margin: 30,
            responsive: {
                992: { items: 1 },
                1200: { items: 1 }
            }
        });
    }

    initOwlCarousel('.owl-banner');
    initOwlCarousel('.owl-testimonials');

    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
        $(".menu-trigger").on('click', function () {
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }

    // Smooth scroll for menu links
    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                var width = $(window).width();

                if (width < 767) {
                    $('.menu-trigger').removeClass('active');
                    $('.header-area .nav').slideUp(200);
                }

                $('html,body').animate({
                    scrollTop: (target.offset().top) - 80
                }, 700);

                return false;
            }
        }
    });

    // Page loading animation (additional check)
    $(window).on('load', function () {
        if ($('.cover').length) {
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function () {
            setTimeout(function () {
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });

    // Handle dropdown submenus
    const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li');
                var thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }

    // Functions for handling modal windows
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

// Función para abrir la ventana flotante 1
document.getElementById('abrirVentana').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo').style.display = 'none';
  }
  


// Función para abrir la ventana flotante 2
document.getElementById('abrirVentana2').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo2').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo2').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana2').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo2').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo2').style.display = 'none';
  }



// Función para abrir la ventana flotante 3
document.getElementById('abrirVentana3').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo3').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo3').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana3').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo3').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo3').style.display = 'none';
  }


// Función para abrir la ventana flotante 4
document.getElementById('abrirVentana4').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo4').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo4').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana4').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo4').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo4').style.display = 'none';
  }



// Función para abrir la ventana flotante 5
document.getElementById('abrirVentana5').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo5').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo5').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana5').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo5').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo5').style.display = 'none';
  }


// Función para abrir la ventana flotante 6
document.getElementById('abrirVentana6').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo6').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo6').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana6').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo6').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo6').style.display = 'none';
  }



// Función para abrir la ventana flotante 7
document.getElementById('abrirVentana7').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo7').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo7').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana7').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo7').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo7').style.display = 'none';
  }


// Función para abrir la ventana flotante 8
document.getElementById('abrirVentana8').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo8').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo8').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana8').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo8').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo8').style.display = 'none';
  }

// Función para abrir la ventana flotante 9
document.getElementById('abrirVentana9').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo9').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo9').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana9').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo9').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo9').style.display = 'none';
  }

// Función para abrir la ventana flotante 10
document.getElementById('abrirVentana10').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo10').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo10').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana10').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo10').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo10').style.display = 'none';
  }

  // Función para abrir la ventana flotante 11
document.getElementById('abrirVentana11').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo11').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo11').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana11').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo11').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo11').style.display = 'none';
  }


    // Función para abrir la ventana flotante 12
document.getElementById('abrirVentana12').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo12').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo12').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana12').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo12').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo12').style.display = 'none';
  }


// Función para abrir la ventana flotante 13
document.getElementById('abrirVentana13').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo13').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo13').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana13').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo13').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo13').style.display = 'none';
  }

// Función para abrir la ventana flotante 14
document.getElementById('abrirVentana14').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo14').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo14').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana14').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo14').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo14').style.display = 'none';
  }

// Función para abrir la ventana flotante 15
document.getElementById('abrirVentana15').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo15').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo15').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana15').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo15').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo15').style.display = 'none';
  }

// Función para abrir la ventana flotante 16
document.getElementById('abrirVentana16').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo16').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo16').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana16').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo16').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo16').style.display = 'none';
  }

// Función para abrir la ventana flotante 17
document.getElementById('abrirVentana17').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo17').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo17').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana17').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo17').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo17').style.display = 'none';
  }

  // Función para abrir la ventana flotante 18
document.getElementById('abrirVentana18').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo18').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo18').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana18').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo18').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo18').style.display = 'none';
  }

// Función para abrir la ventana flotante 19
document.getElementById('abrirVentana19').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo19').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo19').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana19').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo19').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo19').style.display = 'none';
  }

  // Función para abrir la ventana flotante 20
document.getElementById('abrirVentana20').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo20').style.display = 'flex';
  });
  
  // Función para cerrar la ventana flotante al hacer clic fuera de ella
  document.getElementById('ventanaFondo20').addEventListener('click', function(event) {
	if (event.target === this) {
	  this.style.display = 'none';
	}
  });
  
  // Función para cerrar la ventana flotante al hacer clic en el enlace "Cerrar"
  document.getElementById('cerrarVentana20').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventanaFondo20').style.display = 'none';
  });

  // Función para cerrar la ventana flotante al hacer clic en el icono de cerrar
function cerrarVentana() {
	document.getElementById('ventanaFondo20').style.display = 'none';
  }


})(window.jQuery);