/*
	if you have an array sorted by primary key and then by parentId then you can
	use following getTree to generate array

	it just loop through the array
*/
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