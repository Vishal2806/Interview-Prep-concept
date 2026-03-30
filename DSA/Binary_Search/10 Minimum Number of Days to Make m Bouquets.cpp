//https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        
        long long totalFlowers = (long long)m * k;
        if (totalFlowers > bloomDay.size()) return -1;

        int minDays = *min_element(bloomDay.begin(), bloomDay.end());
        int maxDays = *max_element(bloomDay.begin(), bloomDay.end());
        
        int finalAns = -1;

        while (minDays <= maxDays) {
            int guessDay = minDays + (maxDays - minDays) / 2;

            int adjFlowCnt = 0;
            int noOfBouquets = 0;

            for (int day : bloomDay) {
                if (day <= guessDay) {
                    adjFlowCnt++;
                    
                    if (adjFlowCnt == k) {
                        noOfBouquets++;
                        adjFlowCnt = 0;
                    }
                } else {
                    adjFlowCnt = 0;
                }
            }

            if (noOfBouquets >= m) {
                finalAns = guessDay;
                maxDays = guessDay - 1;
            } else {
                minDays = guessDay + 1;
            }
        }

        return finalAns;
    }
};
