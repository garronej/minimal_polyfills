
if (typeof String.prototype.startsWith !== "function") {

    String.prototype.startsWith = function startsWith(str){
      return this.indexOf(str) === 0;
    };

}

export {};