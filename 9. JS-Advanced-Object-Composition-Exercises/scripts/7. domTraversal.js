function solve(selector) {
    let firstNode = $(selector);
    let deepest = 0;
    let deepestNode = firstNode;

    dfs(0, firstNode);
    highlightAllNodes(deepestNode);

    function dfs(currentDepth, currentNode) {
        if(currentDepth > deepest){
            deepest = currentDepth;
            deepestNode = currentNode;
        }

        let children = currentNode.children();
        for(let child of children) {
            dfs(currentDepth + 1, $(child))
        }
    }

    function highlightAllNodes(currentNode) {
        currentNode.addClass('highlight');
        if(currentNode.attr('id') === firstNode.attr('id')){
            return;
        }

        highlightAllNodes(currentNode.parent())
    }
}