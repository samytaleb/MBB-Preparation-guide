// ============================================================
// DATA-COURSES.JS — Foundation: bug fix + i18n + empty array
// Content is pushed by data-courses-1.js / 2.js / 3.js
// ============================================================
(function () {

  // Fix howToPrepare: EN sections use 'body' but app.js reads 'content'
  if (DATA.howToPrepare) {
    ['fr', 'en'].forEach(function(lang) {
      if (DATA.howToPrepare[lang]) {
        DATA.howToPrepare[lang].forEach(function(s) {
          if (s.body && !s.content) s.content = s.body;
        });
      }
    });
  }

  // i18n keys for the new views
  if (DATA.i18n) {
    DATA.i18n.fr.title_courses     = 'Cours';
    DATA.i18n.fr.title_learningpath = 'Mon Parcours';
    DATA.i18n.en.title_courses     = 'Courses';
    DATA.i18n.en.title_learningpath = 'My Learning Path';
  }

  // Initialize empty — content pushed by data-courses-1/2/3.js
  DATA.courses = [];

})();

