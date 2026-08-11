const officeParser = require('officeparser');
const fs = require('fs');

const config = {
  extractAttachments: true
};

officeParser.parseOffice('260810 인플루언서 공구 관련.pptx', config, function(data, err) {
    if (err) return console.log(err);
    fs.writeFileSync('output.json', JSON.stringify(data.content, null, 2), 'utf8');
});
