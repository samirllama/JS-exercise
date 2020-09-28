Function.prototype.myCall = function(context, ...args) {
    context.fnName = this;
    context.fnName(...args);
}

/* Usage*/

function showProfileMessage(message) {
    console.log(message, this.name);
}
const obj = {
    name: "Samir"
};

showProfileMessage.myCall(obj, "Welcome ");