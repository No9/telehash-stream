var Stream = require('stream');

exports.install = function(self)
{

   self.stream = function(chan)
   {

      this.streams = [];
      if(this.streams[chan]) {
         return this.streams[chan];
      } else {
      
         self.listen(chan, function(err, packet, type) {
         });
      
         var stream = new Stream();
         stream.readable = stream.writeable = true;
      
         stream.read = function() {
      
         }
   
         stream.write = function () {
            return true; 
         }

         this.streams[chan] = stream;
         self.listen(chan, function(err, packet, type) {
         });
         
         return stream;
      }
   } 

}
