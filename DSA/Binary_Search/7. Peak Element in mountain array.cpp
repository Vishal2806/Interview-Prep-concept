class Solution {
int peakIndexInMountainArray(vector<int>& arr) {
    int s = 0;
    int e = arr.size() - 1;

    while (s < e) {
        int mid = s + (e - s) / 2;

        if (arr[mid] < arr[mid + 1]) {
            // peak right side mein hai
            s = mid + 1;
        } else {
            // peak left side ya mid pe hi hai
            e = mid;
        }
    }

    return s; // ya e (both same)
}
};