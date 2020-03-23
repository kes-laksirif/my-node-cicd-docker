const assert = require('chai').assert;
const message = require('../message');

//Results
helloMessage = message.helloMessage();
helloWorldMessage = message.helloWorldMessage();

describe('Message', function(){
    describe ('helloMessage', function () {
        it('helloMessage should return Hello!', function() {
            assert.equal(helloMessage, 'Hello!');
        });
        it('helloMessage should return string', function() {
            assert.typeOf(helloMessage, 'string');
        });
    });
    describe ('helloWorldMessage', function() {
        it('helloWorldMessage should return Hello World!', function() {
            assert.equal(helloWorldMessage,'Hello World!!');
        });
        it('sayHelloWorldMessage should return a string', function() {
            assert.typeOf(helloWorldMessage, 'string');
        });
    });
});