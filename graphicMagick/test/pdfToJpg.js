const fs = require('fs')
const gm = require('gm').subClass({ imageMagick: true });

describe('test image conversion', () => {

    it('should be able to convert pdf to jpeg', async () => {

        gm('C:/pdfs/listingReports1.pdf')
            .density(800, 600)
            .write('C:/pdfs/converted.jpg', function (err) {
                if (!err) console.log('done');
                else
                    console.log(err)
            });
    });
});