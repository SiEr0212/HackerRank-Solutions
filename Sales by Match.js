/*
Sales by Match

from HackerRank:https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description:

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints:

1<n<100
1<ar[i]<100 where 0 <i<n

Output Format:

Return the total number of matching pairs of socks that Alex can sell.

Sample Input:
9
10 20 20 10 10 30 50 10 20

Sample Output:
3
*/
//My solution:

const sockMerchant = (n, ar) => {
    let myCount = [];
    let obj = ar.reduce((colors, amount) => {
      colors[amount] = ++colors[amount] || 1;
      return colors;
    }, {});
    let count = Object.values(obj);
    for (let pairs of count) {
      myCount.push(Math.floor(pairs / 2));
    }
    return myCount.reduce((prev, curr) => prev + curr);
  };

sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]);