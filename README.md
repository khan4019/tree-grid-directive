angular-bootstrap-grid-tree
===========================

A grid that has tree structure rows. using angular, bootstrap

Minimum required properties:

    <abg-tree 
        tree-data    = "my_treedata"
        expanding-on = "expanding_property"
        col-Defs     = "col_dfs">      
    </abg-tree>

**tree-data:** is and an array of objects. 
    
    $scope.my_treeData = [
        {Name:"United States of America", Area:9826675,Population:318212000,TimeZone:"UTC -5 to -10"},
    	{Name:"California",Area:423970,Population:38340000,TimeZone:"PST",
    	    children:[
    	        {Name:"San Francisco", Area:231,Population:837442,TimeZone:"PST"},
    	        {Name:"Los Angeles", Area :503, Population :3904657, TimeZone :"PST"}    
    	    ]
    	},
    	{ Name :"Illinois", Area:57914, Population:12882135, TimeZone :"Central Time Zone",
    	    children:[
    	        {Name:"Chicago",  Area:234, Population:2695598, TimeZone :"CST"}        
    	    ]
		}
		];    

**expanding-on:** Name of the property where you want to put '+\-' to expand and collapse

**col_Defs:** an array of object where you have a field and display Name
     $scope.col_defs = [
        {field: "Area"},
        {filed:"Population"},
        {field: "TimeZone", dislayname: "Time Zone"}
     ]
     

Don't include expanding-on in colDef. If displayName is not provided, then field is used as column header

### More Options
You can have more property but there are other attributes to customize the tree:

    <abg-tree 
        tree-data         = "my_treedata"
        expanding-on      = "expanding_property"
        col-Defs          = "col_dfs"
        tree-control      = "my_tree"
        icon-leaf         = "icon-file"
        icon-expand       = "icon-plus-sign"
        icon-collapse     = "icon-minus-sign"
        on-select         = "my_tree_handler(branch)"
        expand-level      = "2">      
    </abg-tree>

**tree-control:** you can use tree control to use collapse all and expand all

**icon-leaf, icon-expand, icon-collapse: ** If you want to use icons

**on-select:** you can add an click handler on the branch click

**expand-level:** depth of the tree that will be expanded at the time of tree initialized


If displayName is not provided, field is used as column header.

style and concept inspired by [abn teee](https://github.com/nickperkinslondon/angular-bootstrap-nav-tree)
