const http = require("http");
const fs = require("fs");
const _ = require("lodash")

http.createServer(function(req, res) {
    res.writeHead(200, { "content-Type": "video/mp4" });
    let video = fs.createReadStream("/media/sayem/Media/movies/Rush Hour 3 (2007)/Rush.Hour.3.2007.720p.BrRip.x264.Deceit.YIFY.mp4");
    video.pipe(res);

}).listen(3001, () => console.log("server is running"));