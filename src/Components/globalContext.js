function gc(contextID="fji4jh2342u423"){
    let ctxID = contextID;
    function getValue(){
        return JSON.parse(window.localStorage.getItem(ctxID))
    }
    function setValue(jsonData){
        window.localStorage.setItem(ctxID,JSON.stringify(jsonData));
    }
  return {getValue,setValue};
}
export default gc