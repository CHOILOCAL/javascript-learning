if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
  }
  console.log(functionScopeValue); 
  console.log(blockScopeValue);


let value = "바깥값";
if (true) {
  console.log(value);
  let value2 = "안쪽값";
}