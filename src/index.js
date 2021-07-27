import * as BFSE from 'botframework-streaming';

// Exercises Buffer.from and stream polyfills, as well as process.nextTick
const stream = new BFSE.SubscribableStream();

stream.subscribe(buffer => {
  const message = buffer.toString('utf8');
  const container = document.getElementById('container');

  if (container) {
    container.appendChild(document.createTextNode(message));
  }
});

setTimeout(
  () => {
    stream._write("hello world", 'utf8', console.log.bind('stream._write'));
  },
  1000
)

try {
  process.nextTick();
} catch (err) {
  console.log('process.nextTick error', err);
}
