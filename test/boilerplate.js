import assert from 'assert';
import from from 'from';
import ezs from 'ezs';
import locals from '../src';

ezs.use(locals);

describe('tests', () => {
    it('examples', (done) => {
        const res = [];
        from([
            'loren',
            'korem',
            'olrem',
        ])
            .pipe(ezs('BOILERPLATE', { param: 300 }))
            .on('data', (chunk) => {
                res.push(chunk);
            })
            .on('end', () => {
                assert(res.length === 3);
                done();
            });
    });
});
