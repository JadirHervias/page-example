const TEST = [
  {
    title:
      '1. Unity acquires 3D data optimization software provider Pixyz Software',
    author: 'Chris Kerr',
    published_date: '2021-06-23 08:55:00',
    published_date_precision: 'full',
    link: 'http://feedproxy.google.com/~r/GamasutraFeatureArticles/~3/XV5QchYOgkg/Unity_acquires_3D_data_optimization_software_provider_Pixyz_Software.php',
    clean_url: 'google.com',
    summary:
      "Unity has acquired 3D data preparation and optimization software provider Pixyz Software for an undisclosed fee. The engine maker had previously partnered with Pixyz to allow Unity creators working on real-time experiences to easily import and optimize 3D data including CAD assemblies, meshes, and point clouds. The deal means all of Pixyz's data transformation technology, LOD capabilities, and products -- including Pixyz Plugin, Pixyz Studio, Pixyz Scenario Processor, and more -- will become p",
    rights: 'Copyright 2006, Gamasutra.com',
    rank: 1,
    topic: 'gaming',
    country: 'US',
    language: 'en',
    authors: ['Chris Kerr'],
    media:
      'http://www.gamasutra.com/db_area/images/news/2021/Jun/383969/unity copy.jpg',
    is_opinion: false,
  },
  {
    title:
      '2. Unity acquires 3D data optimization software provider Pixyz Software',
    author: 'Chris Kerr',
    published_date: '2021-06-23 08:55:00',
    published_date_precision: 'full',
    link: 'http://feedproxy.google.com/~r/GamasutraFeatureArticles/~3/XV5QchYOgkg/Unity_acquires_3D_data_optimization_software_provider_Pixyz_Software.php',
    clean_url: 'google.com',
    summary:
      "Unity has acquired 3D data preparation and optimization software provider Pixyz Software for an undisclosed fee. The engine maker had previously partnered with Pixyz to allow Unity creators working on real-time experiences to easily import and optimize 3D data including CAD assemblies, meshes, and point clouds. The deal means all of Pixyz's data transformation technology, LOD capabilities, and products -- including Pixyz Plugin, Pixyz Studio, Pixyz Scenario Processor, and more -- will become p",
    rights: 'Copyright 2006, Gamasutra.com',
    rank: 1,
    topic: 'gaming',
    country: 'US',
    language: 'en',
    authors: ['Chris Kerr'],
    media:
      'http://www.gamasutra.com/db_area/images/news/2021/Jun/383969/unity copy.jpg',
    is_opinion: false,
  },
];

function createItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getValue(key) {
  return JSON.parse(localStorage.getItem(key));
}

const setting = {
  // url: 'https://free-news.p.rapidapi.com/v1/search',
  // contentType: 'application/json',
  // crossDomain: true,
  // headers: {
  //   'x-rapidapi-host': 'free-news.p.rapidapi.com',
  // },
  // data: { q: 'software', page_size: '5' },
};

const getSettings = (page, lang) => {
  const settings = getSettings();
  return {
    ...settinga,
    data: {
      ...settings.data,
      lang,
      page,
    },
  };
};

const setNewsUlContent = (lang, listContent) => {
  $(`#${lang}-news-container`).append(listContent);
};

const clearNewsUlContent = (lang) => {
  $(`#${lang}-news-container`).empty();
};

const getArticleLi = (article, viewMoreMsg) => {
  const date = new Date(article.published_date);
  return `<li class="media py-3">
          <img src="${article.media}" class="mr-3" alt="${article.title}">
          <div class="media-body">
            <h3 class="mt-0 mb-1">${article.title}</h3>
            <h5 class="mt-0 mb-1">${article.author}</h5>
            <span class="mt-0 mb-1">${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}</span>
            <p>${article.summary}... <a href="${
    article.link
  }" target="_blank">${viewMoreMsg}</a></p>
          </div>
        </li>`;
};

const loadNewsData = (resultsPage, lang) => {
  createItem(`news-${lang}`, TEST);
  clearNewsUlContent(lang);
  const articles = getValue(`news-${lang}`);
  const listContent = articles.map((article) => {
    return getArticleLi(
      article,
      lang === 'es' ? 'Ver m&aacute;s' : 'View more'
    );
  });
  setNewsUlContent(lang, listContent);
  // $.ajax({
  //   ...getSettings(resultsPage, lang),
  //   success: function (res) {
  //     console.log(res);
  //     createItem(`news-${lang}`, res.articles);
  //     clearNewsUlContent(lang);
  //     const articles = getValue(`news-${lang}`);
  //     const listContent = articles.map((article) => {
  //       return getArticleLi(
  //         article,
  //         lang === 'es' ? 'Ver m&aacute;s' : 'View more'
  //       );
  //     });
  //     setNewsUlContent(lang, listContent);
  //   },
  //   error: function () {
  //     alert('No se pudo cargar el contenido de las noticias');
  //   },
  // });
};

(function ($) {
  'use strict'; // Start of use strict

  $('.js-is-active').each(function () {
    $(this).removeClass('active');
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      $(this).addClass('active');
    }
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 71,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $('body')
      .on('input propertychange', '.floating-label-form-group', function (e) {
        $(this).toggleClass(
          'floating-label-form-group-with-value',
          !!$(e.target).val()
        );
      })
      .on('focus', '.floating-label-form-group', function () {
        $(this).addClass('floating-label-form-group-with-focus');
      })
      .on('blur', '.floating-label-form-group', function () {
        $(this).removeClass('floating-label-form-group-with-focus');
      });
  });

  // load news data
  loadNewsData(1, 'es');

  setTimeout(() => {
    loadNewsData(1, 'en');
  }, 1000);

  $('a.js-pagination-es-1').click(function () {
    loadNewsData(1, 'es');
  });
  $('a.js-pagination-es-2').click(function () {
    loadNewsData(2, 'es');
  });
  $('a.js-pagination-es-3').click(function () {
    loadNewsData(3, 'es');
  });
  $('a.js-pagination-en-1').click(function () {
    loadNewsData(1, 'en');
  });
  $('a.js-pagination-en-2').click(function () {
    loadNewsData(2, 'en');
  });
  $('a.js-pagination-en-3').click(function () {
    loadNewsData(3, 'en');
  });
})(jQuery); // End of use strict
