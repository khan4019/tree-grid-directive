angular-bootstrap-grid-tree
===========================

A grid that has tree structure rows. using angular, bootstrap

#### Check it out [http://khan4019.github.io/angular-bootstrap-grid-tree/test/abgTree.html](http://khan4019.github.io/angular-bootstrap-grid-tree/test/abgTree.html)

##### Mininum to start
Include abgTree.css and abg-tree-directive.js

In you html add the following

      <abg-tree
        tree-data  ="my_tree_data"
        col-defs = "col_defs"
        expand-on = "expand_property">
      </abg-tree>


**tree_data:** tree-data is an array of objects. If object has child put them in 'children' array of the object. an example of tree-data will look like. 

     $scope.tree_data = [
         {Name:"USA",Area:9826675,Population:318212000,TimeZone:"UTC -5 to -10",
	      childrend:[
			{Name:"California", Area:423970,Population:38340000,TimeZone:"Pacific Time",
				childrend:[
					{Name:"San Francisco", Area:231,Population:837442,TimeZone:"PST"},
    				{Name:"Los Angeles", Area:503,Population:3904657,TimeZone:"PST"}
				]
			},
			{Name:"Illinois", Area:57914,Population:12882135,TimeZone:"Central Time Zone",
				childrend:[
					{Name:"Chicago", Area:234,Population:2695598,TimeZone:"CST"}
				]
			}
		]
	  },	
	  {Name:"Texas",Area:268581,Population:26448193,TimeZone:"Mountain"}
      ];
    


**style and concept** inspired by [abn teee](https://github.com/nickperkinslondon/angular-bootstrap-nav-tree)
