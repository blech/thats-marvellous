walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var marvellous = "marvellous"; // TODO add switch for US English spelling
	var Marvellous = marvellous.charAt(0).toUpperCase();
	Marvellous = Marvellous + marvellous.substr(1);

	var v = textNode.nodeValue;

	v = v.replace(/\bawesome\b/g, marvellous);
	v = v.replace(/\bAwesome\b/g, Marvellous);
	v = v.replace(/\bAWESOME\b/gi, marvellous);
	
	textNode.nodeValue = v;
}


