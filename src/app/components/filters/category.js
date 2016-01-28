(function() {
  'use strict';

  angular
    .module('blogularApp-components')
    .filter('category', CategoryFilter);

  function CategoryFilter($sce) {
    return function(category) {
      var catClass;
      switch(category){
        case 'Media':
          catClass='fa-television';
          break;
        case 'Technology':
          catClass='fa-keyboard-o';
          break;
        case 'Social':
          catClass='fa-users';
          break;
        case 'News':
          catClass='fa-rss';
          break;
        default:
          catClass='';
      }
      return $sce.trustAsHtml("<i class='fa "+catClass+"' title='"+category+"'></i>");
    };
  }
})();
