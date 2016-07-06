tree-grid-directive
===================

A grid to display data in tree structure by using Angular and Bootstrap.

### It's open source (MIT license)
Feel free to whatever you want to do with it.

#### Demo:: [http://khan4019.github.io/tree-grid-directive/test/treeGrid.html](http://khan4019.github.io/tree-grid-directive/test/treeGrid.html)

### Mininum to start
--------------------
####EITHER: 

Install with Bower

      $ bower install angular-bootstrap-grid-tree

Install with Npm

      $ npm install angular-bootstrap-grid-tree

####OR:
Include `src/treeGrid.css` and `src/tree-grid-directive.js` in your HTML file after Bootstrap and Angular. 
	  
####THEN	  

Just add the following

      <tree-grid tree-data="tree_data"></tree-grid>

Include the module as a dependency in your application:

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
        on-click      = "my_tree_handler(branch)"
        template-url  = "path/to/treegrid/template.html"
        expand-level  = "2"
        expand-to     = "expand_to">
    </tree-grid>

**col_defs:** is an array of objects that allows you to customized column header.
If `displayName` is not provided, `field` (object property) is used as `displayName`.

Valid properties are:

	field:              Hook to the field to know the column position in the table.
	displayName:        Text that will be used in the column header.
	cellTemplate:       Template that will be used to show the value. Useful if
	                    you want to show images, for instance.
	cellTemplateScope:  Used to pass the controllers methods you want to be
	                    used inside the cell template.
	sortable:           The user can sort by the values of this field	
	sortingType:        The type of the field, for sorting or filtering purposes.
	                    Possible values are "number", for numeric sorting, or
	                    "string" for alphabetic sorting (this is the default)
	filterable:         This field will be searched when filtering

Example:

     $scope.col_defs = [
      {  field: "Description" },
      {
        field: "DemographicId",
        displayName: "Demographic Id",
		sortable : true,
		filterable : true
      },
      {
        field: "ParentId",
        displayName: "Parent Id"
      },
      { field: "Area",
        sortable : true,
		sortingType : "number",
		filterable : true
	  },
      { field: "Population" },
      {
        field: "image",
        displayName: "Image",
        cellTemplate: "<img ng-click='cellTemplateScope.click(\'example\')' ng-src='{{ row.branch[col.field] }}' />",
        cellTemplateScope: {
            click: function(data) {         // this works too: $scope.someMethod;
                console.log(data);
            }
        }
      }
    ];

Should you wish to define the col_defs dynamically (e.g. if the column names are coming from a service) you can follow the instructions specified in [this issue] (https://github.com/khan4019/tree-grid-directive/issues/51).	
	
**expanding_property:** this is the property of the objects in `tree_data` where you want to put the ability to expand and collapse.
This accepts an array of the same format as col_defs, allowing for sorting & filtering on the expanding field. This now includes the ability
to provide a cellTemplate (but not a cellTemplateScope).

**my_tree:** you can use `tree-control` to use expand all and collapse all. Check it out in the link provided for demo.

**icons:** define Font Awesome, Bootstrap Glyphicon for expand, collapse and leaf.

**template-url:** URL for the custom template to be used.

**expand-level:** depth of the tree, you want to expand while loading - default now set to 0 i.e. tree entirely collapsed. Note that you cannot collapse the tree below this depth, once set.

**expand-to:** the `$rootscope` field the directive will watch for programmatic expansion. When changed, the directive will search the tree for the expandingproperty with the same value, and expand the tree to that point. All other branches will be collapsed.

**on-select:** a click handler while you are clicking on +/- icons.

        $scope.my_tree_handler = function(branch){
         	console.log('you clicked on', branch)
        }

**on-click:** a click handler while you are clicking on the expanding property, useful when you
need to redirect if a branch is selected.

        $scope.my_tree_handler = function(branch){
            console.log('you clicked on', branch)
        }

### Setting icons per row
If the data contains different types, it may be useful to differentiate between them with different icons. Every row can set following three icons:

* **iconLeaf** the icon that will be shown if the row is a leaf
* **iconCollapse** the icon that will be shown if the row has children and is expanded
* **iconExpand** the icon that will be shown if the row has children and is collapsed

Every icon that **isn't** overriden will be the one defined at the tree-grid directive or the default one if none defined.

Example:
```html
<tree-grid
    tree-data     = "tree_data"
    icon-leaf     = "icon-file"
    icon-expand   = "icon-plus-sign"
    icon-collapse = "icon-minus-sign"
</tree-grid>
```

```javascript
$scope.tree_data = [
    {Name:"USA",Area:9826675,Population:318212000,TimeZone:"UTC -5 to -10",
        children:[
            {Name:"California", Area:423970,Population:38340000,TimeZone:"Pacific Time",
                children:[
                    {Name:"San Francisco", Area:231,Population:837442,TimeZone:"PST"},
                    {Name:"Los Angeles", Area:503,Population:3904657,TimeZone:"PST"}
                ]
                icons: {
                    iconLeaf: "fa fa-sun-o"
                }
            },
            {Name:"Illinois", Area:57914,Population:12882135,TimeZone:"Central Time Zone",
                children:[
                    {Name:"Chicago", Area:234,Population:2695598,TimeZone:"CST"}
                ]
            }
        ],
        icons: {
            iconLeaf: "fa fa-flag",
            iconCollapse: "fa fa-folder-open",
            iconExpand: "fa fa-folder"
        }
    },
    {Name:"Texas",Area:268581,Population:26448193,TimeZone:"Mountain"}
];
```

### Expanding tree after search
If it is desired to expand the tree after a (successful) search, you need to modify the template and add a **true** to the filter parameters.

<code>
&lt;tr ng-repeat="row in tree_rows | searchFor:$parent.filterString:expandingProperty:colDefinitions:<b>true</b> track by row.branch.uid"&gt;
</code>

Full example (based on original template):
```html
<div class="table-responsive">
   <table class="table tree-grid">
   <thead>
     <tr>
       <th><a ng-if="expandingProperty.sortable" ng-click="sortBy(expandingProperty)">{{expandingProperty.displayName || expandingProperty.field || expandingProperty}}</a><span ng-if="!expandingProperty.sortable">{{expandingProperty.displayName || expandingProperty.field || expandingProperty}}</span><i ng-if="expandingProperty.sorted" class="{{expandingProperty.sortingIcon}} pull-right"></i></th>
       <th ng-repeat="col in colDefinitions"><a ng-if="col.sortable" ng-click="sortBy(col)">{{col.displayName || col.field}}</a><span ng-if="!col.sortable">{{col.displayName || col.field}}</span><i ng-if="col.sorted" class="{{col.sortingIcon}} pull-right"></i></th>
     </tr>
   </thead>
   <tbody>
     <tr ng-repeat="row in tree_rows | searchFor:$parent.filterString:expandingProperty:colDefinitions:true track by row.branch.uid"
       ng-class="'level-' + {{ row.level }} + (row.branch.selected ? ' active':'')" class="tree-grid-row">
       <td><a ng-click="user_clicks_branch(row.branch)"><i ng-class="row.tree_icon"
              ng-click="row.branch.expanded = !row.branch.expanded"
              class="indented tree-icon"></i></a><span class="indented tree-label" ng-click="on_user_click(row.branch)">
             {{row.branch[expandingProperty.field] || row.branch[expandingProperty]}}</span>
       </td>
       <td ng-repeat="col in colDefinitions">
         <div ng-if="col.cellTemplate" compile="col.cellTemplate" cell-template-scope="col.cellTemplateScope"></div>
         <div ng-if="!col.cellTemplate">{{row.branch[col.field]}}</div>
       </td>
     </tr>
   </tbody>
 </table>
</div>
```

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

### Custom cell templates

If for any reason you want to use a custom HTML to show a specific cell, for showing an image, colorpicker,
or something else, you can use the `cellTemplate` option in the `col-defs` array, just use
`{{ row.branch[col.field] }}` as the placeholder for the value of the cell anywhere in the HTML - use `{{ row.branch[expandingProperty.field] }}`
if providing a template for the expanding property..

Example:

	$scope.col_defs = [
      {
        field: "DemographicId",
        displayName: "Demographic Id",
        cellTemplate: "<img ng-src="{{ row.branch[col.field] }}" />"
      }
    ];

You can use whatever HTML you want, and all Angular directives will work as expected.

Also, if you need to use some method or variable from your scope in the
cell template, you can pass the reference to `cellTemplate` as:

    cellTemplateScope: {
        click: function(data) {         // this works too: $scope.someMethod;
            console.log(data);
        }
    }

and then use it in `cellTemplate` as:

    cellTemplate: "<img ng-click="cellTemplateScope.click(row.branch[col.field])" ng-src="{{ row.branch[col.field] }}" />",

and will work as expected.

#### Inspired by [abn tree](https://github.com/nickperkinslondon/angular-bootstrap-nav-tree)

## Release History
 Version | Date | Change summary
 ------|---------|--------------
 0.4.0 | July 06 2016 | add expand_to functionality
 0.3.0 | May 30 2016 | synchronise NPM and bower releases properly
 0.2.0 | May 24 2016 | various code fixes
 0.1.0 | May 13 2016 | initial NPM release