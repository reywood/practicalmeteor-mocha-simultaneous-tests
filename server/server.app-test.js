import {describe, it} from 'meteor/practicalmeteor:mocha';

describe('Server test', function() {
    this.timeout(10000);

    it('long test', function(done) {
        console.log('Server test start: ' + new Date());

        setTimeout(() => {
            console.log('Server test end: ' + new Date());
            done();
        }, 5000);
    });
});