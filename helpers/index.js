Buffer.prototype.each = function(f) { 
  for (var i=0; i < this.length; ++i)
    f.call(this, this[i], i);
}

'A C G T U'.split(' ').forEach(function(base) {
  global[base] = base.charCodeAt(0);
});

global.complement = [];
global.complement[A] = T;
global.complement[C] = G;
global.complement[G] = C;
global.complement[T] = A;
