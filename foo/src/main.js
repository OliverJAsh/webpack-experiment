class Foo {
    constructor() {
        window.console.log('foo loaded');
    }
}

new Foo();

window.console.log('foo dependency', require('bar'));
