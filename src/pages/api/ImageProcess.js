const { createCanvas } = require('canvas');

function drawCanvas(colors) {
    const width = 256;
    const height = 128;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    const imgData = ctx.createImageData(width, height);
    for (let i = 0; i < imgData.data.length; i += 4) {
        const cPos = i / 4;
        imgData.data[i] = colors[cPos][0];
        imgData.data[i + 1] = colors[cPos][1];
        imgData.data[i + 2] = colors[cPos][2];
        imgData.data[i + 3] = colors[cPos][3];
    }
    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
}

const palette = (req, res) => {
    const { query } = req || { query: { alpha: "" } }
    const palette = [];
    const steps = 32;
    const increment = 8;
    const params = new Array(steps + 1).fill().map((_, i) => i * increment);
    // remove 0 column color so the resulting loop returns 32,768 colors
    params.shift();

    const alpha = query.alpha || 255;
    params.forEach(r => {
        params.forEach(g => {
            params.forEach(b => {
                palette.push([r, g, b, alpha]);
            });
        });
    });

    return palette

};


const Engage = (req, res) => {
    let response = palette(req, res);
    return res.end(JSON.stringify(drawCanvas(response)));
}
module.exports = {
    palette: palette,
    Engage: Engage
}