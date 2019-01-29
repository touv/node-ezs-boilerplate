/**
 * Take `Object` object, and throw the ame object
 *
 * @param {String} [param=no parameterid] example
 * @returns {Object}
 */
export default function BOILERPLATE(data, feed) {
    const param = this.getParam('param', 'no parameter');
    if (this.isLast()) {
        return feed.close();
    }
    feed.send(data);
}
