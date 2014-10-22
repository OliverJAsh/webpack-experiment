window.console.log('bar loaded');
window.console.log('bar transitive dependency', require('query-string'));
module.exports = 'bar';
