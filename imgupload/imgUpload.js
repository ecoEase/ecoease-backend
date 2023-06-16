const { Storage } = require('@google-cloud/storage');
const path = require('path');
const moment = require('moment');

const pathKey = path.resolve('./serviceaccountkey.json');

//bisa diganti kalau mau deploy //testing
const gcs = new Storage({
  projectId: 'ecoease-389914',
  keyFilename: pathKey,
});

//bisa diganti kalau mau deploy //testing
const bucketName = 'ecoease';
const bucket = gcs.bucket(bucketName);

function getPublicUrl(filename) {
  return 'https://storage.googleapis.com/' + bucketName + '/' + filename;
}

let ImgUpload = {};

ImgUpload.uploadToGcs = (req, res, next) => {
  if (!req.file) return next();

  const gcsname = moment().format('YYYYMMDDHHmmss') + '-' + req.file.originalname;
  console.log(gcsname)
  const file = bucket.file(gcsname);


  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname;
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    next();
  });

  stream.end(req.file.buffer);
};

module.exports = ImgUpload;
