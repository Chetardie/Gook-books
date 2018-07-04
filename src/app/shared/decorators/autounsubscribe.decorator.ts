export function AutoUnsubscribe() {
    return function(constructor: any ) {
        const original = constructor.prototype.ngOnDestroy;
        constructor.prototype.ngOnDestroy = function () {
            for ( const prop in this ) {
                if (this.hasOwnProperty(prop)) {
                    const property = this[ prop ];
                    if ( property && (typeof property.unsubscribe === 'function') ) {
                        property.unsubscribe();
                    }
                }
            }
            original && typeof original === 'function' && original.apply(this, arguments);
        };
    };
}
