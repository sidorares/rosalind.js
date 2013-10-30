require('./helpers');

var buffers = [];
process.stdin.on('data', function(chunk) {
  if (chunk.length && chunk[chunk.length-1] == 10)
     chunk.length--;
  for (var i=0; i < Math.floor(chunk.length/2); ++i) {
     var a = complement[chunk[i]];
     var b = complement[chunk[chunk.length - 1 - i]];
     chunk[i] = b;
     chunk[chunk.length - 1 - i] = a;
  }
  buffers.push(chunk);
});

process.stdin.on('end', function() {
  while(buffers.length)
    process.stdout.write(buffers.pop());
});
