var Stream = require('stream');

exports.install = function(self)
{

   self.createListenStream = function(chan)
   {
      if(!chan) { 
         throw new Error('ChannelCreationError', 'Channel string must be supplied');
      }
      this.streams = [];
      this.channel = {};
      if(this.streams[chan]) {
         return this.streams[chan];
      } else {
         var stream = new Stream();
         stream.readable = stream.writeable = true;
      
         stream.read = function(data) {
            //Write to telehash
            this.channel.send({js:data});
         }
   
         this.streams[chan] = stream;
         self.listen(chan, function(err, packet, type) {
            if (err) {
               stream.emit('error', err);
            }
            this.channel = type;
            //function(err, arg, chan, cb){
            stream.write(packet);
         });

         stream.end = function() {
            //process.exit(0);
         }
         return stream;
      }
   } 
}
