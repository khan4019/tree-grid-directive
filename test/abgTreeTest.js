(function() {
  var app, deps;

  deps = ['angularBootstrapNavTree'];

  app = angular.module('abgTest', deps);

  app.controller('abgTestController', function($scope, $timeout) {
    var tree;
    
    var rawTreeData = [
    		{"DemographicId":1,"ParentId":null,"Name":"United States of America","Description":"United States of America", "Area":9826675,"Population":318212000,"TimeZone":"UTC -5 to -10"},
    		{"DemographicId":2,"ParentId":1,"Name":"California","Description":"The Tech State","Area":423970,"Population":38340000,"TimeZone":"Pacific Time"},
    		{"DemographicId":3,"ParentId":2,"Name":"San Francisco","Description":"The happening city","Area":0,"Population":0,"TimeZone":"PST"},
    		{"DemographicId":4,"ParentId":2,"Name":"Los Angeles","Description":"Disco city","Area":0,"Population":0,"TimeZone":"PST"},
    		{"DemographicId":5,"ParentId":1,"Name":"Illinois","Description":"Not so cool","Area":0,"Population":0,"TimeZone":"Central Time Zone"},
    		{"DemographicId":6,"ParentId":5,"Name":"Chicago","Description":"Financial City","Area":0,"Population":0,"TimeZone":"CST"},
    		{"DemographicId":7,"ParentId":1,"Name":"Texas","Description":"Rances, Oil & Gas","Area":0,"Population":0,"TimeZone":"Mountain"},
    		{"DemographicId":8,"ParentId":1,"Name":"New York","Description":"The largest diverse city","Area":141300,"Population":19651127,"TimeZone":"Eastern Time Zone"},
    		{"DemographicId":14,"ParentId":8,"Name":"Manhattan","Description":"Time Square is the place","Area":269.40000000000003,"Population":0,"TimeZone":"EST"},
    		{"DemographicId":15,"ParentId":14,"Name":"Manhattan City","Description":"Manhattan island","Area":33.77,"Population":0,"TimeZone":"EST"},
    		{"DemographicId":16,"ParentId":14,"Name":"Time Square","Description":"Time Square for new year","Area":269.40000000000003,"Population":0,"TimeZone":"EST"},
    		{"DemographicId":17,"ParentId":8,"Name":"Niagra water fall","Description":"Close to Canada","Area":65.7,"Population":0,"TimeZone":"EST"},
    		{"DemographicId":18,"ParentId":8,"Name":"Long Island","Description":"Harbour to Atlantic","Area":362.9,"Population":0,"TimeZone":"EST"},
    		{"DemographicId":51,"ParentId":1,"Name":"All_Other","Description":"All_Other demographics","Area":0,"Population":0,"TimeZone":0}];
    
    var myTreeData = getTree(rawTreeData, 'DemographicId', 'ParentId');

    $scope.my_data = myTreeData;    
    $scope.my_tree = tree = {};
    $scope.expandingProperty = "Name";
    $scope.colDefs = [
    	{ field: "Name"},
    	{ field: "Description"},
    	{ field: "DemographicId", displayName: "Demographic Id"},
    	{ field: "ParentId", displayName: "Parent Id"},
    	{ field: "Area"},
    	{ field: "Population"},
    	{ field: "TimeZone", displayName: "Time Zone"}
    ];
    function getTree(data, primaryIdName, parentIdName){
    	var item = data[0],
    		primaryKey = item[primaryIdName],
    		tree = {},
    		parent,
    		len = data.length,
    		i = 1;

		tree[primaryKey] = item;
		
		while(i<len){
			item = data[i++];
			primaryKey = item[primaryIdName];			
			tree[primaryKey] = item;
			parent = tree[item[parentIdName]];
			if(parent.children){
				parent.children.push(item);
			}
			else{
				parent.children = [item];
			}						
		}
		return [tree[data[0][primaryIdName]]];
    }

  });

}).call(this);
