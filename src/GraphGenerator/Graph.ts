import { WeightedGraph } from './types';

export class Graph<T> implements WeightedGraph<T> {
    private adjacencyList: Map<T, Map<T, number>>;
  
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(key: T): void {
      if (!this.adjacencyList.has(key)) {
        this.adjacencyList.set(key, new Map());
      }
    }
  
    addEdge(vertex1: T, vertex2: T, weight: number): void {
      if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
        throw new Error('');
      }
  
      this.adjacencyList.get(vertex1)!.set(vertex2, weight);
      this.adjacencyList.get(vertex2)!.set(vertex1, weight);
    }
  
    getAdjacencyList(): Map<T, Map<T, number>> {
      return this.adjacencyList;
    }
}
  