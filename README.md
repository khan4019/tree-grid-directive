angular-bootstrap-grid-tree
===========================

A grid to display data in tree structure by using angular, bootstrap.

#### Demo:: [http://khan4019.github.io/angular-bootstrap-grid-tree/test/treeGrid.html](http://khan4019.github.io/tree-grid-directive/test/treeGrid.html)

### Mininum to start
Include src/treeGrid.css and src/tree-grid-directive.js in your html file after bootstrap and angular. Just add the following

      <tree-grid tree-data="my_tree_data"></tree-grid>


**tree_data:** is an array of objects. If object has child put them in 'children' array of the object. an example of tree-data will look like. 

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

if you have an array sorted by primary key and parent Key, you can use getTree inside temp folder.
    
### More Options

    <tree-grid 
        tree-data         = "my_treedata"
        col-Defs          = "col_defs"
        expand-on         = "expand_on"
        tree-control      = "my_tree"
        icon-leaf         = "icon-file"
        icon-expand       = "icon-plus-sign"
        icon-collapse     = "icon-minus-sign"
        on-select         = "my_tree_handler(branch)"
        expand-level      = "2">      
    </tree-grid>


**col_defs:** is an array of objects that allows you to customized column header. if displayName is not provided, field (object property) is used as display Name.

     $scope.col_defs = [
      { field: "Description"},
      { field: "DemographicId", displayName: "Demographic Id"},
      { field: "ParentId", displayName: "Parent Id"},
      { field: "Area"},
      { field: "Population"},
      { field: "TimeZone", displayName: "Time Zone"}
    ];

**expand_property:** this is the property of the objects in 'tree_data' where you want to put the ability to expand and collapse. 

**tree-control:** you can use 'tree-control' to use expand all and collapse all. check it out in the link provided for demo

**icon:** define Font Awesome, bootstrap glyphicon for expand, collapse and leaf

**expand-level:** depth of the tree, you want to expand while loading

**on-select:** a click handler while you are clicking on +/-

        $scope.my_tree_handler = function(branch){
         	console.log('you clicked on', branch)
        }

###custom template
If you want to use custom template, change the template in line 10 src/tree-grid-directive.js. if you want to use template in html file, replace template="" by templateUrl="mytemplate.html"

####Inspired by [abn teee](https://github.com/nickperkinslondon/angular-bootstrap-nav-tree)
