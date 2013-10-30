require('./helpers');

process.stdin.on('data', function(chunk) {
  chunk.each(function(s,i) {
    if (s == T) this[i] = U;
  });
  process.stdout.write(chunk);
});
