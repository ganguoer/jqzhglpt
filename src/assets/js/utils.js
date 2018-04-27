// export default (function(options){
//     options = options || 
//     {
//         key:"988b262540ae65a710f18bf4516193de",
//         callback:function(res){

//         }
//     };
    
//     let script = document.createElement("script");
// 	script.src = "http://webapi.amap.com/maps?v=1.4.4&key"+options.key;
// 	document.head.appendChild(script);
// })();
function LoadScript(callback){
    var js = document.createElement("script");
    this.js = js;
    js.setAttribute("type",'text/javascript');
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(js);
    if(navigator.appName.toLowerCase().indexOf('netscape') == -1){
        js.onreadystatechange = function(){
            if(js.readyState == 'complete'){
                callback(js);
            }
        }
    }else{
        js.onload = function(){
            callback(js);
        }
    }
}
LoadScript.prototype.get = function(url){
    this.js.src = url;
}
function script_onload(script){
    if(script.src){
        return true;
    }
    else{
        return false;
    }
}
var load_js = new LoadScript(script_onload);
// load_js.get('http://webapi.amap.com/maps?v=1.4.4&key=988b262540ae65a710f18bf4516193de');

export default LoadScript;