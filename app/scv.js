var scv = require('claudia-bot-builder');

module.exports = function(){
    var quote = "What's going on? SCV ready.";
    
    function pingSCV(){
        return quote;
    }
    
    return {
        hello: pingSCV
    };
}();