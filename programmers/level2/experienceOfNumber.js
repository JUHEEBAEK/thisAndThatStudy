function solution(n) {
  var answer = 0;
  let startNumber = 1;
  function sumNumber(i, sum) {
      sum += i
      if(sum < n) {
          sumNumber(i+1, sum);
      }else if(sum === n) {
          answer++;
          return;
      }   
  }

  for(let i = startNumber; i <= n; i++) {
      sumNumber(i, 0);   
  }
  return answer;
}