class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int st = 1;
        int end = *max_element(piles.begin(),piles.end());
        int res = 0;
        int ans = INT_MAX;
        while(st <= end){
            int mid = st + (end-st)/2;
            int cnt = 0;
            for(int i = 0;i<piles.size();i++){
                cnt+= ceil(double)(piles[i] / mid);
            }
            if(cnt <= h){
                res = mid;
                end = mid -1;
            }
            else{
                st = mid + 1;
            }
            ans = min(res,ans);
        }
        return ans;
    }
};