import Graph from './graph.js'

function helperFunction(testVariable, currentNode, visited, result) {

  // marks the currentNode as visited 
  visited[currentNode] = true; 

  // checks if the currentNode is a vertex in the graph
  if (testVariable.graph.has(currentNode) == true) {
    // set an adjacencyList (which is a list derived from the key in the graph) 
    var currentAdjacencyList = testVariable.graph.get(currentNode);
    // loop through this adjacency list
    for (var i = 0; i < currentAdjacencyList.length; i++)
    {
      var temp = currentAdjacencyList[i];

      // check if the vertex in the adjacency list has already been visited
      if (visited[temp] == false) {
        // if it hasnt, recursively call the helper
        helperFunction(testVariable, temp, visited, result);
      }
    }
  }

  // push the currentNode to the front 
  result.unshift(currentNode);
}
  
function topologicalSort(testVariable) {
    // create an array of size (variables) filled with false
    var visited = new Array(testVariable.vertices).fill(false);
    var result = []; 
    // output ^
    
    // loops through all the vertices 
    for (var currentNode = 0; currentNode < testVariable.vertices; currentNode++) {
      // checks if the node has been visited
      if (visited[currentNode] == false) {
        // otherwise call helperFunction
        helperFunction(testVariable, currentNode, visited, result);
      }
    }

    // this will fill the result array
    return result;
}

