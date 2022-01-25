module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }

  let open = ['(', '[', '{','|', '1', '3','5','7','8'];
  let pairs = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['1']: '2',
    ['3']: '4',
    ['5']: '6',
    ['7']: '7',
    ['8']: '8',
  };
  let stack = [];
for (let i = 0; i < str.length; i++){
 
  let current = str[i];
  if (open.includes(current)){
    stack.push(current);
  } else {
    if (stack.length === 0){
     return false;
    }
    let top = stack[stack.length - 1];

    if (pairs[current] === top){
      stack.pop();
    }
    else{
      return true;
    }
  }
}
return stack.length == 0;
}
