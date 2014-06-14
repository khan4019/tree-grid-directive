angular-bootstrap-grid-tree
===========================

A grid that has tree structure rows. using angular, bootstrap

Minimum required properties:

    <abg-tree 
        tree-data    = "my_treedata"
        expanding-on = "expandingProperty"
        col-Defs     = "colDfs">      
    </abg-tree>

You can have more property but there are other attributes to customize the tree:

    <abg-tree 
        tree-data         = "my_treedata"
        expanding-on      = "expandingProperty"
        col-Defs          = "colDfs"
        tree-control      = "my_tree"
        icon-leaf         = "icon-file"
        icon-expand       = "icon-plus-sign"
        icon-collapse     = "icon-minus-sign"
        on-select         = "my_tree_handler(branch)"
        expand-level      = "2">      
    </abg-tree>

The example uses Font-Awesome 3, but Font-Awsome 4 also works.
Use the following syntax:

##colDef
Don't include expanding-on in colDef. Each column object is like 

     {field: "filedName", dislayname: "Awesome Column Name"}

If displayName is not provided, field is used as column header.

style and concept inspired by [abn teee](https://github.com/nickperkinslondon/angular-bootstrap-nav-tree)
