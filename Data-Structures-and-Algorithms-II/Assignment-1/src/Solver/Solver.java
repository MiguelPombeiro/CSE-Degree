package Solver;
import java.util.Arrays;

public class Solver {
    int nDreams, nNumbers;
    int[] dreams, numbers;


    /**
     * Constructor
     * Sorts the numbers array for binary search
     * 
     * @param nDreams - number of dreams
     * @param nNumbers - number of numbers
     * @param dreams - array of dreams
     * @param numbers - array of numbers
    */
    public Solver(int nDreams, int nNumbers, int[] dreams, int[] numbers){
        this.nDreams = nDreams;
        this.nNumbers = nNumbers;
        this.dreams = dreams;

        // Sort the numbers array for binary search (O(n log n))
        Arrays.sort(numbers);
        this.numbers = numbers;
    }


    /**
     * Calculates the minimum wasted capacity when packing all the dreams in the given order.
     * Uses dynamic programming to solve the problem.
     * 
     * @return minimum wasted capacity
    */
    public int solve(){

        // Create an array to store the minimum wasted capacity
        int w[] = new int[nDreams + 1];
        // int nPacksUsed[] = new int[nDreams + 1];
        int prev[] = new int[nDreams + 1];
        int wherePacked[] = new int[nDreams + 1];

        // Initialize the array with the maximum value for comparison
        Arrays.fill(w, Integer.MAX_VALUE);
        Arrays.fill(wherePacked, -1);
        Arrays.fill(prev, -1);

        // Base case
        w[0] = 0;
        // nPacksUsed[0] = 0;

        for (int dream : dreams) {
            if (dream > numbers[nNumbers - 1]) {
                // If a dream is larger than the largest number, it cannot be packed
                throw new IllegalArgumentException("Dream " + dream + " is larger than the largest number.");
            }

        }

        // Step through the dreams
        for(int j = 1; j <= nDreams; j++){
            // Sum of the dreams being packed
            int sum = 0;

            // Step the current dream back to the first dream
            for(int k = j - 1; k >= 0; k--){

                sum += dreams[k];

                // If the sum exceeds the largest number, there is no need to continue
                if(sum > numbers[nNumbers - 1]){
                    // System.out.println("Dreams from " + k + " to " + j + " exceed the largest number, breaking out of the loop.");
                    break;
                }

                // Find the index of the number that is closest to the sum (O(log n))
                int idx = Arrays.binarySearch(numbers, sum-1);
                // int idx = nNumbers - 1; // 

                // If the value is not found, get the index of the number that is larger than the sum
                idx = idx >= 0 ? idx : -idx - 1;

                    // Calculate the minimum wasted capacity
                    if (idx < nNumbers) {  // Vai so as posições válidas
                        int min = w[k] + numbers[idx] - sum;
                        if(min < w[j]){
                            if (min < 0) 
                                min = 0; // Ensure no negative wasted capacity
                            w[j] = min;
                            // nPacksUsed[j] = nPacksUsed[k] + 1;
                            // System.out.println("Packing dreams from " + k + " to " + j + " with pack size " + numbers[idx] + ", wasted capacity: " + min);
                            // wherePacked[j] = idx; // Store the index of the number used for packing
                        }
                    }
            }
        }


        // System.out.println("Packs used: " + Arrays.toString(nPacksUsed));
        return w[nDreams];
    }
}
