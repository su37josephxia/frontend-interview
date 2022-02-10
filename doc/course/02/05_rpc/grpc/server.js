const grpc = require('grpc') 
const path = require('path')
const PROTO_PATH = path.resolve(__dirname,'./test.proto')
const testProto = grpc.load(PROTO_PATH).testPackage

function test(call, callback) {
  const time = new Date()
  callback(null, {message: '然叔666'})
}

const server = new grpc.Server();
// 创建的非安全连接
server.addProtoService(testProto.testService.service, {ping:test})

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()