import { Vertex } from './Vertex';
import { Edge } from './Edge';
import { Graph } from './Graph';
import { Dijkstra as CustomDijkstra } from './Dijkstra';
import { WeightedGraph, Dijkstra } from './types';

const vertex1 = new Vertex('1');
const vertex2 = new Vertex('2');
const vertex3 = new Vertex('3');
const vertex4 = new Vertex('4');
const vertex5 = new Vertex('5');
const vertex6 = new Vertex('6');
const vertex7 = new Vertex('7');
const vertex8 = new Vertex('8');


const vertices = [ vertex1, vertex2, vertex3, vertex4, vertex5, vertex6, vertex7, vertex8 ];

const edges = [
    new Edge(vertex1, vertex2, 5),
    new Edge(vertex2, vertex3, 3),
    new Edge(vertex2, vertex5, 8),
    new Edge(vertex2, vertex4, 5),
    new Edge(vertex3, vertex5, 4),
    new Edge(vertex4, vertex5, 1),
    new Edge(vertex4, vertex7, 3),
    new Edge(vertex5, vertex6, 2),
    new Edge(vertex5, vertex7, 5),
    new Edge(vertex6, vertex7, 1),
];

const graph: WeightedGraph<Vertex> = new Graph();;

vertices.forEach((verticle) => graph.addVertex(verticle));
edges.forEach((edge) => graph.addEdge(edge.from, edge.to, edge.weight));

const dijkstra: Dijkstra<Vertex> = new CustomDijkstra(graph);

console.log(dijkstra.findShortestPath(vertex1, vertex7));
console.log(dijkstra.findAllShortestPaths(vertex4));

// result:
// { path: [ '1', '2', '4', '7' ], distance: 13 }
// {
//   '1': { path: [ '1', '2', '4' ], distance: 10 },
//   '2': { path: [ '2', '4' ], distance: 5 },
//   '3': { path: [ '3', '5', '4' ], distance: 5 },
//   '5': { path: [ '5', '4' ], distance: 1 },
//   '6': { path: [ '6', '5', '4' ], distance: 3 },
//   '7': { path: [ '7', '4' ], distance: 3 },
//   '8': { path: [], distance: Infinity }
// }
  