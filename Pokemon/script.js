// Write your code here
var Pokemon = angular.module("Pokemon",[]);

Pokemon.controller("ListadoPokemon", function($scope,$http) {
  $scope.conteo = 0;
  $scope.Poke = [];
  //Inicia el ciclo for para que aparezcan 504 pokemon
  for (var i=1;i<=504.0;i++) {
    //Creamos la variable y se le suma uno para que aparezcan los pokemon
    $scope.conteo = $scope.conteo + 1;
    //Llamada de PokeApi
    $http({
      method: 'POST',
      url: "http://pokeapi.co/api/v2/pokemon/" + $scope.conteo
      //Le estamos guardando  los datos en la variable "response"
    }).then(function successCallback(response) {
      //Ciclo para llamar las imagenes en HD
      for (var x = 0; x <= i; x++) {
        //Primera condicion donde le damos valor a x
         if (response.data.id == x) {
           $scope.Poke[x] = {"data":response.data}
           //Condicion para llamar las imagenes en HD si son menos de 10 pokemon
           if (x <10) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
             //Condicion para llamar las imagenes en HD si son menor o iguales a 99
           } else if (x >= 10 && x <= 99) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
             //Condicion para llamar las imagenes en HD si son mayores o iguales a 100
           } else if (x >=100) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
           }
         }
       }
       //A la funcion "response" tira un mensaje de "Error"
    }), function errorCallback(response) {
      console.log("Error");
    }
  }
})



var myweb = angular.module ("myweb", []);
myweb.controller("Login", function ($scope){
	//funcion Inicio de sesion
	$scope.nombre = "pokeMerrick"
	$scope.contrasena = "mon"
	


	$scope.Inicio =function(a,b){
		if (a == $scope.nombre && b == $scope.contrasena) {
			window.open("https://app-1524680045.000webhostapp.com/NewPokedex-master%20nuevo/index.html","_parent") 
		} else {
					swal("Usuario incorrecto o contraseña incorrecto")
				}
		}




});



