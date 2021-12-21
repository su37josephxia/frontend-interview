const request = require("request");

async function getRequest(url) {
  return new Promise((resolve, reject) => {
    request(
      {
        url,
        method: "GET",
        headers: {
          //设置请求头
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:94.0) Gecko/20100101 Firefox/94.0",
        },
        encoding: null,
      },
      async (error, _, body) => {
        if (!error) {
          resolve(body);
        } else {
          reject(error);
        }
      }
    );
  });
}

module.exports = getRequest;
