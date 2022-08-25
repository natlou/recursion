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
      if (visited[temp] == false) {
        helperFunction(testVariable, temp, visited, result);
      }
    }
  }
  result.unshift(currentNode);
}
  
function topologicalSort(testVariable) {
    var visited = new Array(testVariable.vertices).fill(false);
    var result = [];
    
    for (var currentNode = 0; currentNode < testVariable.vertices; currentNode++) {
      if (visited[currentNode] == false) {
        helperFunction(testVariable, currentNode, visited, result);
      }
    }
    return result;
}

