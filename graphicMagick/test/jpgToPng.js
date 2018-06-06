const fs = require('fs')
const gm = require('gm').subClass({ imageMagick: true });

describe('test image conversion', () => {

	it('should be able to convert jpeg into png', async () => {
		gm('C:/random.jpg')
			.write('C:/converted.png', function (err) {
				if (!err) console.log('done');
				else
					console.log(err)
			});
	});
});