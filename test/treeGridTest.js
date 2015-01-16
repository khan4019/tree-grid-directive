(function() {
  var app, deps;

  deps = ['treeGrid'];

  app = angular.module('treeGridTest', deps);

  app.controller('treeGridController', function($scope, $timeout) {
    var tree;
    
    var rawTreeData = [
    		{"DemographicId":1390405,"Name":"CORPFINANCE(6)","Description":"test","ParentId":null,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390417,"Name":"ADVISORY(5)","Description":"test","ParentId":1390405,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390423,"Name":"ADVISORY(4)","Description":"test","ParentId":1390417,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390461,"Name":"ADVISORY(3)","Description":"test","ParentId":1390423,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390523,"Name":"DCMADVISORY(2)","Description":"test","ParentId":1390461,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390703,"Name":"DEBTADVISORY(1)","Description":"test","ParentId":1390523,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391069,"Name":"DEBTADVISORY(0)","Description":"test","ParentId":1390703,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390762,"Name":"RATINGSADVISORYFEES(1)","Description":"test","ParentId":1390523,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1216948,"Name":"RATINGSADVISORYFEES(0)","Description":"test","ParentId":1390762,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390524,"Name":"ECMADVISORY(2)","Description":"test","ParentId":1390461,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390686,"Name":"ECMADVISORY(1)","Description":"test","ParentId":1390524,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391070,"Name":"ECMADVISORY(0)","Description":"test","ParentId":1390686,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390494,"Name":"M\u0026A(2)","Description":"test","ParentId":1390461,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664055,"Name":"ADVISORY(CAZ)(1)","Description":"test","ParentId":1390494,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664208,"Name":"ADVISORY(CAZ)(0)","Description":"test","ParentId":1664055,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664057,"Name":"CONDUITSADVISORY(1)","Description":"test","ParentId":1390494,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664238,"Name":"OTHERUPFRONTFEES-CONDUITS(0)","Description":"test","ParentId":1664057,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664056,"Name":"CORPORATEADVISORY(1)","Description":"test","ParentId":1390494,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664223,"Name":"FINANCIALADVISORYFEES(0)","Description":"test","ParentId":1664056,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390642,"Name":"EQPRVTPLCMFEES(1)","Description":"test","ParentId":1390494,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391071,"Name":"EQPRVTPLCMFEES(0)","Description":"test","ParentId":1390642,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664054,"Name":"M\u0026AADVISORY(1)","Description":"test","ParentId":1390494,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664207,"Name":"ADVISORYFEES(0)","Description":"test","ParentId":1664054,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1664220,"Name":"MERGER\u0026ACQUISFEES(0)","Description":"test","ParentId":1664054,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390576,"Name":"M\u0026A(1)","Description":"test","ParentId":1390494,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391072,"Name":"M\u0026A(0)","Description":"test","ParentId":1390576,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390418,"Name":"CREDITORIG(5)","Description":"test","ParentId":1390405,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390430,"Name":"BONDORIG(4)","Description":"test","ParentId":1390418,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390480,"Name":"BOND-OTHERORIG(3)","Description":"test","ParentId":1390430,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390570,"Name":"BOND-OTHERORIG(2)","Description":"test","ParentId":1390480,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390708,"Name":"CMBSORIG(1)","Description":"test","ParentId":1390570,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183172,"Name":"CMBSORIG(0)","Description":"test","ParentId":1390708,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390760,"Name":"CONDUITRUNRATE(1)","Description":"test","ParentId":1390570,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391078,"Name":"CONDUITRUNRATE(0)","Description":"test","ParentId":1390760,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390683,"Name":"CPORIG(1)","Description":"test","ParentId":1390570,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391079,"Name":"CPORIG(0)","Description":"test","ParentId":1390683,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390727,"Name":"RMBSORIG(1)","Description":"test","ParentId":1390570,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183173,"Name":"RMBSORIG(0)","Description":"test","ParentId":1390727,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390477,"Name":"BONDORIG-FEES(3)","Description":"test","ParentId":1390430,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390545,"Name":"ABSORIG(2)","Description":"test","ParentId":1390477,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390599,"Name":"ABSORIG(1)","Description":"test","ParentId":1390545,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183167,"Name":"ABSOFAUTOORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183166,"Name":"ABSOFCDO/CLO/BISTROORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183170,"Name":"ABSOFCONSUMERLEASESORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183169,"Name":"ABSOFGOVORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183165,"Name":"ABSOFNON-PERFORMINGLOANSORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183168,"Name":"ABSOFWBSORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":976080,"Name":"ABSORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183171,"Name":"OTHERABSORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":976082,"Name":"STRFINORIG(0)","Description":"test","ParentId":1390599,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390638,"Name":"CONDUITFEES(1)","Description":"test","ParentId":1390545,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391042,"Name":"CONDUITFEES(0)","Description":"test","ParentId":1390638,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390555,"Name":"EMBONDORIG(2)","Description":"test","ParentId":1390477,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390687,"Name":"EMBONDORIG(1)","Description":"test","ParentId":1390555,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":765613,"Name":"EMBONDORIG(0)","Description":"test","ParentId":1390687,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1872387,"Name":"GEMSYNDICATE(0)","Description":"test","ParentId":1390687,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390556,"Name":"HGBONDORIG(2)","Description":"test","ParentId":1390477,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390693,"Name":"HGBONDORIG(1)","Description":"test","ParentId":1390556,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1006714,"Name":"AGENCIESORIG(0)","Description":"test","ParentId":1390693,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183896,"Name":"HGBONDCORPADVISORY(0)","Description":"test","ParentId":1390693,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":984238,"Name":"HGBONDORIG(0)","Description":"test","ParentId":1390693,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1872388,"Name":"USDHIGHGRADESYNDICATE(0)","Description":"test","ParentId":1390693,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390647,"Name":"MTNORIG(1)","Description":"test","ParentId":1390556,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":984240,"Name":"MTNORIG(0)","Description":"test","ParentId":1390647,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390557,"Name":"HYBONDORIG(2)","Description":"test","ParentId":1390477,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390697,"Name":"HYBONDORIG(1)","Description":"test","ParentId":1390557,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183900,"Name":"HYBONDCORPADVISORY(0)","Description":"test","ParentId":1390697,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":984232,"Name":"HYBONDORIG(0)","Description":"test","ParentId":1390697,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390433,"Name":"LOANORIG(4)","Description":"test","ParentId":1390418,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390482,"Name":"LOAN-OTHERORIG(3)","Description":"test","ParentId":1390433,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390550,"Name":"LOANNII(2)","Description":"test","ParentId":1390482,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390719,"Name":"HYBRIDGELOANNII(1)","Description":"test","ParentId":1390550,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391043,"Name":"HYBRIDGELOANNII(0)","Description":"test","ParentId":1390719,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390720,"Name":"ORIG-EMLOANNII(1)","Description":"test","ParentId":1390550,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391045,"Name":"ORIG-EMLOANNII(0)","Description":"test","ParentId":1390720,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390721,"Name":"ORIG-HGLOANNII(1)","Description":"test","ParentId":1390550,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391046,"Name":"ORIG-HGLOANNII(0)","Description":"test","ParentId":1390721,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390722,"Name":"ORIG-HYLOANNII(1)","Description":"test","ParentId":1390550,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391047,"Name":"ORIG-HYLOANNII(0)","Description":"test","ParentId":1390722,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390572,"Name":"LOANORIGTRDGG/L(2)","Description":"test","ParentId":1390482,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390770,"Name":"LOANORIGTRDGG/L(1)","Description":"test","ParentId":1390572,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1391044,"Name":"LOANORIGTRDGG/L(0)","Description":"test","ParentId":1390770,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390479,"Name":"LOANORIG-FEES(3)","Description":"test","ParentId":1390433,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390567,"Name":"LOANORIG-FEES(2)","Description":"test","ParentId":1390479,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390738,"Name":"EMLOANORIG(1)","Description":"test","ParentId":1390567,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183151,"Name":"EMLOANORIG(0)","Description":"test","ParentId":1390738,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1390739,"Name":"HGLOANORIG(1)","Description":"test","ParentId":1390567,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183156,"Name":"HGACQUISITIONFINANCE(0)","Description":"test","ParentId":1390739,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183160,"Name":"HGBRIDGEFACILITY(0)","Description":"test","ParentId":1390739,"Area":269.403,"Population":0,"TimeZone":"EST"},
{"DemographicId":1183897,"Name":"HGLOANCORPADVISORY(0)","Description":"test","ParentId":1390739,"Area":269.403,"Population":0,"TimeZone":"EST"}];

    
    var myTreeData = getTree(rawTreeData, 'DemographicId', 'ParentId');

    $scope.tree_data = myTreeData;    
    $scope.my_tree = tree = {};
    $scope.expanding_property = "Name";
    $scope.col_defs = [
    	{ field: "Description"},
    	{ field: "Area"},
    	{ field: "Population"},
    	{ field: "TimeZone", displayName: "Time Zone"}
    ];
    $scope.my_tree_handler = function(branch){
    	console.log('you clicked on', branch)
    }
    
function getTree(data, primaryIdName, parentIdName){
	if(!data || data.length==0 || !primaryIdName ||!parentIdName)
		return [];

	var tree = [],
		rootIds = [],
		item = data[0],
		primaryKey = item[primaryIdName],
		treeObjs = {},
		parentId,
		parent,
		len = data.length,
		i = 0;
	
	while(i<len){
		item = data[i++];
		primaryKey = item[primaryIdName];			
		treeObjs[primaryKey] = item;
		parentId = item[parentIdName];

		if(parentId){
			parent = treeObjs[parentId];	

			if(parent.children){
				parent.children.push(item);
			}
			else{
				parent.children = [item];
			}
		}
		else{
			rootIds.push(primaryKey);
		}
	}

	for (var i = 0; i < rootIds.length; i++) {
		tree.push(treeObjs[rootIds[i]]);
	};

	return tree;
}

  });

}).call(this);
