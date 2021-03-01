

const dev = process.env.NODE_ENV !== 'production';

const server = dev ? 'http://localhost:5000/api':'https://my-json-server.typicode.com/WaiswaDonnie/database'
export default server;
