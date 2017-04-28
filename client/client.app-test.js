import {describe, it} from 'meteor/practicalmeteor:mocha';

describe('Client test', function() {
    this.timeout(10000);

    it('long test', function(done) {
        console.log('Client test start: ' + new Date());

        setTimeout(() => {
            console.log('Client test end: ' + new Date());
            done();
        }, 5000);
    });
});