!function(){var e={last5values:[0,0,0,0,0],memoryAcceleration:[0,0,0],isAcceleration:!1,isStopped:!0,direction:"",delta:"",timer:"",onWheel:"onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"MozMousePixelScroll",addEvent:function(e,t,n){window.addEventListener&&e.addEventListener(t,n,!1),window.attachEvent&&e.attachEvent("on"+t,n)},getDeltaY:function(t){return t.wheelDelta?e.getDeltaY=function(e){return e.wheelDelta/-120}:e.getDeltaY=function(e){return e.deltaY},e.getDeltaY(t)},processDelta:function(e){var t,n=this,o=0;if(n.direction=e>0?direction="down":direction="up",n.delta=Math.abs(e),clearTimeout(n.timer),n.timer=setTimeout(function(){n.last5values=[0,0,0,0,0],n.memoryAcceleration=[0,0,0],n.isStopped=!0,n.isAcceleration=!1},200),n.isStopped)n.triggerEvent(),n.isStopped=!1,n.isAcceleration=!0,o=1,n.memoryAcceleration.shift(),n.memoryAcceleration.push(o);else{for(n.last5values.shift(),n.last5values.push(n.delta),t=5;t--;1==t)n.last5values[t-1]<n.last5values[t]&&o++;n.memoryAcceleration.shift(),n.memoryAcceleration.push(o),n.memoryAcceleration[2]<n.memoryAcceleration[1]&&n.memoryAcceleration[1]<n.memoryAcceleration[0]&&(n.isAcceleration=!1),n.memoryAcceleration[2]>n.memoryAcceleration[1]&&n.memoryAcceleration[1]>n.memoryAcceleration[0]&&(n.isAcceleration||(n.isAcceleration=!0,n.triggerEvent()))}},triggerEvent:function(){try{new CustomEvent("IE has CustomEvent, but doesn't support constructor")}catch(e){window.CustomEvent=function(e,t){var n;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},CustomEvent.prototype=Object.create(window.Event.prototype)}var t=new CustomEvent("scrollUp"),n=new CustomEvent("scrollDown");triggerEvent=function(){"up"===this.direction?window.dispatchEvent(t):window.dispatchEvent(n)},triggerEvent()}};e.addEvent(document,e.onWheel,function(t){e.processDelta(e.getDeltaY(t))})}();