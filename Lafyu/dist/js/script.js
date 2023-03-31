$(function () {
  // console.log("ready!");
  // var Scrollbar = window.Scrollbar;

  // Scrollbar.init(document.querySelector("#my-scrollbar"));

  options = {
    cursorOuter: "circle-basic",
    hoverEffect: "circle-move",
    hoverItemMove: false,
    defaultCursor: false,
    outerWidth: 20,
    outerHeight: 20,
  };

  // Magic Mouse

  magicMouse(options);

  $(".twrap").on("mouseover", function () {
    $("#magicMouseCursor").addClass("change");
  }),
    $(".twrap").on("mouseleave", function () {
      $("#magicMouseCursor").removeClass("change");
    });

  // Tilt JS

  if ($(".js-tilt").length) {
    $(".js-tilt").tilt({
      maxTilt: 5,
      perspective: 2500, // Transform perspective, the lower the more extreme the tilt gets.
      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
      scale: 1, // 2 = 200%, 1.5 = 150%, etc..
      speed: 2000, // Speed of the enter/exit transition.
      transition: true, // Set a transition on enter/exit.
      disableAxis: null, // What axis should be disabled. Can be X or Y.
      reset: true, // If the tilt effect has to be reset on exit.
      glare: true, // Enables glare effect
      maxGlare: 0.1, // From 0 - 1.
    });
  }

  // horizontal scroll
  if ($(".space-holder").length) {
    // use this if you are using class to check
    const spaceHolder = document.querySelector(".space-holder");
    const horizontal = document.querySelector(".horizontal");
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

    function calcDynamicHeight(ref) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const objectWidth = ref.scrollWidth;
      return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
    }

    window.addEventListener("scroll", () => {
      const sticky = document.querySelector(".horizontal-sticky");
      horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    });

    window.addEventListener("resize", () => {
      spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    });
  }

  // use this if you are using class to check
  // it exists
  if ($(".gallery-grid").length) {
    $(".gallery-grid").imagesLoaded(function () {
      $(".gallery-grid").isotope({
        // options...
        itemSelector: ".gallery-item",
        masonry: {
          // columnWidth: 200,
        },
      });
    });
  }

  // navbar toggle

  $(".navbar-toggler").click(function () {
    $(".navbar__list").addClass("open");
  });

  $(".nav-close").click(function () {
    $(".navbar__list").removeClass("open");
  });


  // checkout toggle
  
  $(".cart-checkout").click(function () {
    $(".checkout-sidebar").addClass("open");
    $(".checkout-backdrop").removeClass("d-none");
    $("body").addClass("overflow-hidden");
  });
  
  $(".checkout-sidebar .close").click(function () {
    $(".checkout-sidebar").removeClass("open");
    $(".checkout-backdrop").addClass("d-none");
    $("body").removeClass("overflow-hidden");
  });

  $(".checkout-backdrop").click(function () {
    $(".checkout-sidebar").removeClass("open");
    $(this).removeClass("d-none");
  });


});



$(function () {
  // Hover pop up for product card
  $(".card-product").mouseover(function () {
    $("#magicMouseCursor").addClass("cursor-product");
  });

  $(".card-product").mouseleave(function () {
    $("#magicMouseCursor").removeClass("cursor-product");
  });

  // Hover pop up for core values

  // $(".vision").mouseover(function () {
  //   $("#magicMouseCursor").addClass("cursor-vision");
  // });

  // $(".vision").mouseleave(function () {
  //   $("#magicMouseCursor").removeClass("cursor-vision");
  // });

  // Hover pop up for contact

  $(".contact__info a").mouseover(function () {
    $("#magicMouseCursor").addClass("cursor-contact");
  });

  $(".contact__info a").mouseleave(function () {
    $("#magicMouseCursor").removeClass("cursor-contact");
  });
});


$(function () {
  if ($(".main-image").length) {
    $(".main-image").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: ".slider-nav",
    });
  }
  if ($(".slider-nav").length) {
    $(".slider-nav").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      // centerMode: true,
      focusOnSelect: true,
      asNavFor: ".main-image",
    });
  }
});

$(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});
