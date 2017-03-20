(function(){
  'use strict';

  angular.module('app', [
    'alt.carregando-info'
  ])
    .controller('mainController', [
      'AltCarregandoInfoService',
      '$window',
      '$rootScope',
      'kooponCoreComunicacaoExtensaoService',
      function(AltCarregandoInfoService, $window, $rootScope, ComunicacaoExtensaoService){
        var self = this;
        this.flag = -1;

        this.baitbois = {
          detail:{
            message:'Eu sou sei pai! FON!'
          }
        }

        ComunicacaoExtensaoService.retornoExtensao();
        $rootScope.$on('retornoExt', function(event, args){
          document.getElementById('pre').textContent = args.detail.message;
        })

        this.bois = function(){
          document.getElementById('pre').textContent = 'Eu sou sei pai! FON!';
        }

        this.enviar = function(){
          ComunicacaoExtensaoService.envioExtensao(this.baitbois);
        }

        this.load = function(){
          var Kappa = {msg: "Angry Paraíba Gaming"}
          AltCarregandoInfoService.exibe(Kappa);
        }

        this.autorizar = function(){
          return this.flag = 1;
        }

        this.rejeitar = function(){
          return this.flag = 2;
        }
      }])
}())
