function BOILERPLATE(data, feed) {
    const param = this.getParam('param', 'no parameter');
    if (this.isLast()) {
        return feed.close();
    }
    console.log('param=', param);
    console.log('data=', data);
    feed.send(data);
}

export default {
    BOILERPLATE,
};
