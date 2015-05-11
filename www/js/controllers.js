angular.module('dinoApp.controllers', ['dinoApp.services','ngDraggable'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('DinosaurCtrl', function ($scope, $stateParams, DinosaurService) {
        DinosaurService.findById($stateParams.dinosaurId).then(function(dinosaur) {
            $scope.dinosaur = dinosaur;
        });
		
		$scope.formatHeightMeasure = function(val) {
            return "" + parseFloat(val) + "m";
        };
    })

.controller('DinosaursCtrl', function($scope, DinosaurService) {
        var findAllDinosaurs = function() {
			console.log('findAllDinosaurs... ');
            DinosaurService.findAll().then(function (dinosaurs) {
                $scope.dinosaurs = dinosaurs;
            });
        }

        findAllDinosaurs();
    
})

.controller('PlayCtrl', function ($scope,$state,$http, $stateParams, DinosaurService) {
		
		var questionGroup = [		
				//id: 0, desc: "Who's longer?" },
				//id: 1, desc: "Who's higher?" },
				//id: 2, desc: "Who's heavier?" }
				{ id: 0, desc: "Chi \351 pi\371 lungo?" },
				{ id: 1, desc: "Chi \351 pi\371 alto?" },
				{ id: 2, desc: "Chi \351 pi\371 pesante?" }				
			];
			
        var initializeDinosaurOneAndTwo = function() {
			console.log('initializeDinosaurOneAndTwo... ');
			DinosaurService.count().then(function(dinosaurCount) {
				var count = dinosaurCount;
				var randomId = Math.floor((Math.random() * count) + 1);
				DinosaurService.findById(randomId).then(function(dinosaur) {
					$scope.dinosaurOne = dinosaur;
				});
				randomId = Math.floor((Math.random() * count) + 1);
				DinosaurService.findById(randomId).then(function(dinosaur) {
					$scope.dinosaurTwo = dinosaur;
				});
				
			});
			$scope.showResult=false;
			$scope.selectedQuestionGroup = questionGroup[Math.floor((Math.random() * 3))];
			console.log('selectedQuestionGroup:'+$scope.selectedQuestionGroup.desc);
		}
		
		$scope.compare = function(itemSelected, otherItem,selectedQuestionGroupId) {
			if(selectedQuestionGroupId==0){
				$scope.result = (itemSelected.length>=otherItem.length);
			}else if(selectedQuestionGroupId==1){
				$scope.result = (itemSelected.height>=otherItem.height);
			}else{
				$scope.result = (itemSelected.weight>=otherItem.weight);
			}			
			$scope.showResult=true;	
		}
		
		$scope.playAgain = function() {
			initializeDinosaurOneAndTwo();
        };
		
		initializeDinosaurOneAndTwo();	
    })
	
.controller('PlayeraCtrl', function($scope, DinosaurService) {
		 var initializeDraggableDinosaur = function() {
			DinosaurService.count().then(function(dinosaurCount) {
			var count = dinosaurCount;
			var randomId = Math.floor((Math.random() * count) + 1);
			DinosaurService.findById(randomId).then(function(dinosaur) {
					$scope.selectedDinosaur = dinosaur;
					$scope.draggableObjects = [dinosaur];
					$scope.droppedObjects1 = [];
					$scope.droppedObjects2= [];
					$scope.droppedObjects3= [];
					$scope.showResult=false;
				});
			});
        }
		
		$scope.playeraAgain = function() {
			initializeDraggableDinosaur();
        };

		initializeDraggableDinosaur();
        $scope.centerAnchor = true;
        $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
        //$scope.draggableObjects = [{name:'one'}, {name:'two'}, {name:'three'}];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2= [];
		$scope.droppedObjects3= [];
				
		$scope.onDragSuccess1=function(data,evt){
            console.log("133","$scope","onDragSuccess1", "", evt);
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        }
        $scope.onDropComplete1=function(data,evt){			
			populateDroppedObjects1(data);
        }
		$scope.onPeriodClick1=function(data){
			populateDroppedObjects1(data);
        }		
		var populateDroppedObjects1 = function(data) {
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1){
				console.log("droppedObjects1", data);
				$scope.droppedObjects1.push(data);
				$scope.showResult=true;
				$scope.result= (data.era.toLowerCase().indexOf("triassic")>-1);
				//clean others
				$scope.droppedObjects2= [];
				$scope.droppedObjects3= [];
			}
		}

        $scope.onDragSuccess2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects2.splice(index, 1);
            }
        }
        $scope.onDropComplete2=function(data,evt){
			populateDroppedObjects2(data);
        }		
		$scope.onPeriodClick2=function(data){
			populateDroppedObjects2(data);
        }		
		var populateDroppedObjects2 = function(data) {
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects2.push(data);
				$scope.showResult=true;
				$scope.result= (data.era.toLowerCase().indexOf("giurass")>-1);
				//clean others
				$scope.droppedObjects1= [];
				$scope.droppedObjects3= [];
            }
		}
		
		$scope.onDragSuccess3=function(data,evt){
            var index = $scope.droppedObjects3.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects3.splice(index, 1);
            }
        }
        $scope.onDropComplete3=function(data,evt){
			populateDroppedObjects3(data);
        }		
		$scope.onPeriodClick3=function(data){
			populateDroppedObjects3(data);
        }		
		var populateDroppedObjects3 = function(data) {
			var index = $scope.droppedObjects3.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects3.push(data);
				$scope.showResult=true;
				$scope.result= (data.era.toLowerCase().indexOf("cretac")>-1);
				//clean others
				$scope.droppedObjects1= [];
				$scope.droppedObjects2= [];				
            }
		}
		
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }
      })	
;

