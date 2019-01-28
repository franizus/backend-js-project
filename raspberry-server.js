// Import net module.
var net = require('net');

// https://www.instructables.com/id/Controlling-Multiple-LEDs-With-Python-and-Your-Ras/
// http://voidcanvas.com/control-led-with-raspberry-pi-nodejs/

const Gpio = require('onoff').Gpio;
const LED17 = new Gpio(17, 'out');
const LED27 = new Gpio(27, 'out');
const LED22 = new Gpio(22, 'out');
const LED18 = new Gpio(18, 'out');
const LED23 = new Gpio(23, 'out');
const LED24 = new Gpio(24, 'out');

// Create and return a net.Server object, the function will be invoked when client connect to this server.
var server = net.createServer(function(client) {
  client.setEncoding('utf-8');

  client.on('data', function(data) {
    // Print received client data and length.
    console.log(
      'Receive client send data : ' + data + ', data size : ' + client.bytesRead
    );
    const received = data.split(' ');
    let onOff = 0;
    if (received[1] === 'on') {
      onOff = 1;
    }
    switch (+received[0]) {
      case 17:
        LED17.writeSync(onOff);
        break;
      case 27:
        LED27.writeSync(onOff);
        break;
      case 22:
        LED22.writeSync(onOff);
        break;
      case 18:
        LED18.writeSync(onOff);
        break;
      case 23:
        LED23.writeSync(onOff);
        break;
      case 24:
        LED24.writeSync(onOff);
        break;
    }
  });

  // When client send data complete.
  client.on('end', function() {
    console.log('Client disconnect.');
  });

  // When client timeout.
  client.on('timeout', function() {
    console.log('Client request time out. ');
  });
});

// Make the server a TCP server listening on port 9999.
server.listen(9999, function() {
  // Get server address info.
  var serverInfo = server.address();

  var serverInfoJson = JSON.stringify(serverInfo);

  console.log('TCP server listen on address : ' + serverInfoJson);

  server.on('close', function() {
    console.log('TCP server socket is closed.');
  });

  server.on('error', function(error) {
    console.error(JSON.stringify(error));
  });
});
