;(function(ng){
  'use strict';

  ng.module('app')
    .factory('kooponCoreComunicacaoExtensaoService', [
      '$rootScope',
      '$window',
      function($rootScope, $window){
        class kooponCoreComunicacaoExtensaoService{
          envioExtensao(obj){
            var k = new CustomEvent('PageParaExtensao', obj);
            $window.dispatchEvent(k);
          }

          retornoExtensao(){
            $window.addEventListener('ExtensaoParaPage', function (obj) {
              return new Promise(function (res, rej){
                return $rootScope.$broadcast('retornoExt', obj);
              })
            }, false);

            $window.removeEventListener('ExtensaoParaPage', function (obj){});
          }
        }

        return new kooponCoreComunicacaoExtensaoService();
    }]);
}(angular))
