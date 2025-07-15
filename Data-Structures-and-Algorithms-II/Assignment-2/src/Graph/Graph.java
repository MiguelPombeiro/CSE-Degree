package Graph;
import java.util.List;
import java.util.Arrays;
import java.util.LinkedList;


/**
 * Graph class to represent a non directed graph
 * It uses an adjacency list to represent the graph
 * It has methods to add edges and to find the diameter of the graph
 */
public class Graph {
    private List<Integer>[] adjecentList;
    private int nNodes;
    public int[] habitants;

    @SuppressWarnings("unchecked")
    public Graph(int nHabitants) {
        this.nNodes = nHabitants;
        this.adjecentList = new List[nHabitants + 1];
        this.habitants = new int[2];

        for (int i = 0; i <= nHabitants; i++) {
            adjecentList[i] = new LinkedList<>();
        }
    }


    /**
     * Adds an bidirectional edge to the non directed graph
     * @param a Vertex a
     * @param b Vertex b
     */
    public void addEdge(int a, int b) {
        adjecentList[a].add(b);
        adjecentList[b].add(a);
    }


    /**
     * BFS algorithm to find the distance from a start node to all other nodes
     * @param start The starting node
     * @return An array with the distance from the start node to all other nodes
     */
    private int[] BFS (int start, int p[]) {
        boolean[] visited = new boolean[nNodes + 1];
        int nLeafs = 0;
        int maxDegree = 0;
        int[] distance = new int[nNodes + 1];
        LinkedList<Integer> queue = new LinkedList<>();

        visited[start] = true;
        queue.add(start);
        distance[start] = 0;

        while (!queue.isEmpty()) {
            int node = queue.poll();
            for (int neighbor : adjecentList[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    p[neighbor] = node;
                    distance[neighbor] = distance[node] + 1;
                    queue.add(neighbor);
                }
            }
            if (adjecentList[node].size() == 1) {
                nLeafs++;
            }
            if (adjecentList[node].size() > maxDegree) {
                maxDegree = adjecentList[node].size();
            }
        }

        System.out.println("Number of leaf nodes: " + nLeafs);
        System.out.println("Max degree: " + maxDegree);

        return distance;
    }
    

    /**
     * Solves the problem of finding the maximum distance between any two nodes in the graph
     * This is equivalent to finding the diameter of the graph (largest smallest path)
     * Starts from an arbitrary node, finds the farthest node from it, and then finds the farthest node from that node
     * @return The maximum distance between any two nodes in the graph
     */
    public int getDiameter() {

        int startNode = 1, maxDistance = Integer.MIN_VALUE;
        int p[] = new int[nNodes + 1];
        Arrays.fill(p, -1);
        int[] distance = BFS(startNode, p);
        // Find the farthest node from the start node (one end of the diameter)
        for (int i = 1; i <= nNodes; i++) {
            if (distance[i] > distance[startNode]) {
                startNode = i;
            }
        }

        habitants[0] = startNode;
        // System.out.println("Start node: " + startNode);

        // System.out.println(java.util.Arrays.toString(distance));

        // int sum = 0;
        // for (int dist : distance) {
        //     sum += dist;
        // }

        // int n = nNodes; 
        // double mean = (double) sum / n;
        // System.out.println("Mean distance: " + mean);

        // Arrays.fill(p, -1);

        // Get the farthest node from the previous node.
        distance = BFS(startNode, p);
        // The maximum distance found in the BFS is the diameter of the graph
        // int endNode = startNode;
        for (int i = 1; i <= nNodes; i++) {
            if (distance[i] > maxDistance) {
                maxDistance = distance[i];
                habitants[1] = i;
            }
        }
        // System.out.println("End node: " + endNode);
        
        // int i = endNode;
        // while (i != startNode){
        //     System.out.print(i + " -> ");
        //     i = p[i];
        // }
        // System.out.println(i);

        Arrays.sort(habitants);

        

        return maxDistance;

    }

}