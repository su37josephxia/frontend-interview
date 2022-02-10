const grpc = require("grpc");

const path = require('path')
const PROTO_PATH = path.resolve(__dirname,'./test.proto')
const testProto = grpc.load(PROTO_PATH).testPackage;

const client = new testProto.testService(
  "0.0.0.0:50051",
  grpc.credentials.createInsecure()
);

client.ping({}, function(err, response) {
  console.log("ping -> :", response.message);
});
