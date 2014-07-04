//less then ECMAScript 5 don't support .bind() therefore first polyfill it
Function.prototype.bind=Function.prototype.bind||function(b){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");}var a=Array.prototype.slice,f=a.call(arguments,1),e=this,c=function(){},d=function(){return e.apply(this instanceof c?this:b||window,f.concat(a.call(arguments)));};c.prototype=this.prototype;d.prototype=new c();return d;};

//now polyfill addEventListener
//override EventTarget.addEventListener
EventTarget.prototype.old_addEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function(eventType, obj, bubble){
    if(typeof obj == "function"){
        this.old_addEventListener(eventType, obj, bubble);
    }
    else if(typeof obj == "object" && obj.handleEvent){
        this.old_addEventListener(eventType, obj.handleEvent.bind(obj), bubble);
    }
    else{
        throw e;
    }   
}