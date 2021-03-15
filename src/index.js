module.exports = function check(str, bracketsConfig) {
  let result=false;
  for (i=0; i< bracketsConfig.length; i++){
    while(true){

      let openValue=bracketsConfig[i][0];
      let closeValue=bracketsConfig[i][1];
      // if(openValue == closeValue){

      // }
      // else{
        let openIndex=str.indexOf(openValue);
        let closeIndex=str.indexOf(closeValue);
        if (openIndex!==-1) {
          if (closeIndex<openIndex){
            break;
          }
          else {
            str= str.slice(0, openIndex) + str.slice(openIndex + 1);
            let closeNewIndex= str.indexOf(closeValue);
            str=str.slice(0, closeNewIndex) + str.slice(closeNewIndex + 1);;
          }
        }
      if (openIndex==-1){
       if (closeIndex==-1){
         result=true;
         break;
        }
       else {
         break;
        }
      }
    }
  }
  if(str.length!==0){
    result=false;
  }
  return result;
}  