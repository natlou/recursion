import Graph from './graph.js'

function helperFunction(testVariable, currentNode, visited, result) {
  visited[currentNode] = true; 

  if (testVariable.graph.has(currentNode) == true) {
    var currentAdjacencyList = testVariable.graph.get(currentNode);
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
  
  

