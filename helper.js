/**
 * Created by Pawel on 2017-01-02.
 */
function sign(x) {
    return typeof x === 'number' ? x ? x < 0 ? -1 : 1 : x === x ? 0 : NaN : NaN;
}