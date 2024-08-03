import { Vertex } from './Vertex';
import { WeightedGraph, Path } from './types';

export class Dijkstra {
    graph: WeightedGraph<Vertex>;
    list: Map<Vertex, Map<Vertex, number>>;
    visited: Map<Vertex, boolean>;
    dist: Map<Vertex, number>;
    prev: Map<Vertex, Vertex | null>;

    constructor(graph: WeightedGraph<Vertex>) {
        this.graph = graph;
        this.visited = new Map<Vertex, boolean>();
        this.dist = new Map<Vertex, number>();
        this.prev = new Map<Vertex, Vertex | null>();
        this.list = graph.getAdjacencyList();

        this.reset();
    }

    reset() {
        for (let [key, value] of this.list.entries()) {
            const isVisited = value.size === 0 ? true : false;
            this.visited.set(key, isVisited);
            this.dist.set(key, Infinity);
            this.prev.set(key, null);

        };
    }

    gofrom(vertex: Vertex) {
        let index = vertex;
        let distMin: number | undefined = Infinity;

        for (let key of this.list.keys()) {
            // @ts-ignore
            if (this.dist.get(key) < distMin && !this.visited.get(key)) {
                distMin = this.dist.get(key);
                index = key;
            }
        }

        return index;
    }

    getPaths(startVertex: Vertex): Map<Vertex, number> {
        let u: Vertex;
        while (Array.from(this.visited.values()).includes(false)) {
            u = this.gofrom(startVertex);
            for (let v of this.list.keys()) {
                if (this.list?.get(u)?.get(v) && !this.visited.get(v)) {
                    const newDist = (this.dist.get(u) as number) + (this.list.get(u)?.get(v) as number);
                    if (newDist < (this.dist.get(v) as number)) {
                        this.dist.set(v, newDist);
                        this.prev.set(v, u);
                    }
                }
            }
            this.visited.set(u, true);
        }

        return this.dist;
    }
    
    findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
        this.reset();
        this.dist.set(vertex1, 0);
        this.getPaths(vertex1);

        const path: Vertex[] = [];
        for (let at = vertex2; at !== null; at = this.prev.get(at) as Vertex) {
            path.push(at);
        }
        path.reverse();

        return {
            path: path.map(({ key }) => key),
            distance: this.dist.get(vertex2) as number,
        };
    };
    
    findAllShortestPaths(distVertex: Vertex): Record<string, Path> {
        const pathsRecord: Record<string, Path> = {};
        this.list.forEach((value, vertex) => {
            if (vertex !== distVertex) {
                const path = this.list?.get(vertex)?.size
                    ? this.findShortestPath(vertex, distVertex)
                    : { path: [], distance: Infinity }
                pathsRecord[vertex.key] = path;
            }
        });

        return pathsRecord;
    };
};
