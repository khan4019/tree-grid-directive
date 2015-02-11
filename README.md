tree-grid-directive
===================

A grid to display data in tree structure by using Angular and Bootstrap.

### It's open source (MIT license)
Feel free to whatever you want to do with it.

#### Demo:: [http://khan4019.github.io/tree-grid-directive/test/treeGrid.html](http://khan4019.github.io/tree-grid-directive/test/treeGrid.html)

### Mininum to start
--------------------
Include `src/treeGrid.css` and `src/tree-grid-directive.js` in your HTML file after Bootstrap and Angular. Just add the following

      <tree-grid tree-data="tree_data"></tree-grid>

Then include the module as a dependency in your application:

	angular.module('myApp', ['treeGrid'])

**tree_data:** is an array of objects. If object has child put them in `children` array of the object. an example of tree-data will look like: 

     $scope.tree_data = [
         {Name:"USA",Area:9826675,Population:318212000,TimeZone:"UTC -5 to -10",
	      children:[
			{Name:"California", Area:423970,Population:38340000,TimeZone:"Pacific Time",
				children:[
					{Name:"San Francisco", Area:231,Population:837442,TimeZone:"PST"},
    				{Name:"Los Angeles", Area:503,Population:3904657,TimeZone:"PST"}
				]
			},
			{Name:"Illinois", Area:57914,Population:12882135,TimeZone:"Central Time Zone",
				children:[
					{Name:"Chicago", Area:234,Population:2695598,TimeZone:"CST"}
				]
			}
		]
	  },	
	  {Name:"Texas",Area:268581,Population:26448193,TimeZone:"Mountain"}
      ];

if you have an array sorted by primary key and parent Key, you can use the `getTree` method inside the `temp` folder.
    
### More Options
----------------
If you want more customization, you can use the following options:

    <tree-grid 
        tree-data     = "tree_data"
        col-defs      = "col_defs"
        expand-on     = "expanding_property"
        tree-control  = "my_tree"
        icon-leaf     = "icon-file"
        icon-expand   = "icon-plus-sign"
        icon-collapse = "icon-minus-sign"
        on-select     = "my_tree_handler(branch)"
        template-url  = "path/to/treegrid/template.html"
        expand-level  = "2">
    </tree-grid>

**col_defs:** is an array of objects that allows you to customized column header.
If `displayName` is not provided, `field` (object property) is used as `displayName`.

     $scope.col_defs = [
      { field: "Description"},
      { field: "DemographicId", displayName: "Demographic Id"},
      { field: "ParentId", displayName: "Parent Id"},
      { field: "Area"},
      { field: "Population"},
      { field: "TimeZone", displayName: "Time Zone"}
    ];

**expanding_property:** this is the property of the objects in `tree_data` where you want to put the ability to expand and collapse.

**my_tree:** you can use `tree-control` to use expand all and collapse all. Check it out in the link provided for demo.

**icons:** define Font Awesome, Bootstrap Glyphicon for expand, collapse and leaf.

**template-url:** URL for the custom template to be used.

**expand-level:** depth of the tree, you want to expand while loading.

**on-select:** a click handler while you are clicking on +/-

        $scope.my_tree_handler = function(branch){
         	console.log('you clicked on', branch)
        }

### Specifying the template

There are two ways to specify the template of the pagination controls directive:

1. Use the `treegridTemplateProvider in your app's config block to set a **global** template for your app:

	```
	myApp.config(function(treegridTemplateProvider) {
	    treegridTemplateProvider.setPath('path/to/treegrid/template.html');
	});
	```

2. Use the `template-url` attribute on each treegrid directive to override a specific instance:

	```
	<tree-grid tree-data="treegrid" col-defs="col_defs" template-url="path/to/treegrid/template.html"></tree-grid>
	```

### Loading the tree data from a REST API (or some external resource).

First, set the `tree_data` to an empty array:

	$scope.tree_data = [];

Later, execute the query using promises and update the `tree_data` value with the resolved objects:

	APIEndpoint
		.find()
		.then(function(objects){
			$scope.tree_data = prepareDataForTreegrid(objects);
		});

#### Inspired by [abn tree](https://github.com/nickperkinslondon/angular-bootstrap-nav-tree)
