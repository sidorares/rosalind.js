var hist = [];
process.stdin.on('data', function(chunk) {
  for(var i=0; i < chunk.length; ++i) {
    if (!hist[chunk[i]]) hist[chunk[i]] = 0;
    hist[chunk[i]]++;
  }
});

process.stdin.on('end', function() {
  console.log(hist['A'.charCodeAt(0)]);
  console.log(hist['C'.charCodeAt(0)]);
  console.log(hist['G'.charCodeAt(0)]);
  console.log(hist['T'.charCodeAt(0)]);
});
