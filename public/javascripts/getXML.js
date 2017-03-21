const unzipper = function(path) {

    var readStream = fs.createReadStream(path);
    var writeStream = fstream.Writer('../../unzipped')

    readStream

}

module.export = unzipper;