var Barc = require('../lib/barc')
    , fs = require('fs');


generate('defaults', 'Wikipedia', new Barc());
generate('automatic border', 'PJJ123C', new Barc({border: 'auto'}));
generate('big font', '5760466961738', new Barc({fontsize: 20}));
generate('rotated', 'Wikipedia', new Barc(), 45);

generate('defaults charset_a', 'Wikipedia', new Barc(), 0, "a");
generate('automatic border charset_a', 'PJJ123C', new Barc({border: 'auto'}), 0, "a");
generate('big font charset_a', '5760466961738', new Barc({fontsize: 20}), 0, "a");
generate('rotated charset_a', 'Wikipedia', new Barc(), 45, "a");


function generate(title, text, barc, angle, charset) {
    var buf = barc.code128(text, 300, 100, angle, charset);
    var filename = 'code128-' + title + '.png';
    fs.writeFile(__dirname + '/' + filename, buf, function () {
        console.log('Created code128 and saved it as ', filename);
    })
}