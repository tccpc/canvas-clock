var canvas = document.querySelector('#canvas');
canvas.width = 1366;
canvas.height = 800;
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#000'
ctx.fillRect(0, 0, 1366, 800)

for (var i = 0; i < 50; i++) {
    var x = Math.random() * 1366;
    var y = Math.random() * 800;
    var r = Math.random() * 10 + 3;
    var R = 2 * r;
    var rotate = Math.random() * 360;
    drawStar(x, y, R, r, rotate, ctx)
}
ctx.beginPath();
ctx.arc(1000, 100, 50, 0, 2 * Math.PI);
ctx.shadowBlur = 100;
ctx.shadowColor = "#fff";
ctx.strokeStyle = '#fff';
ctx.stroke();
ctx.fillStyle = '#fff';
ctx.fill();
ctx.closePath();

function drawStar(x, y, R, r, rotate, context) {
    context.beginPath();
    for (var i = 0; i < 5; i++) {
        context.lineTo(Math.cos((18 + i * 72 + rotate) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72 + rotate) / 180 * Math.PI) * R + y);
        context.lineTo(Math.cos((54 + i * 72 + rotate) / 180 * Math.PI) * r + x, -Math.sin((54 + i * 72 + rotate) / 180 * Math.PI) * r + y);
    }
    context.closePath();
    ctx.shadowBlur = 40;
    ctx.shadowColor = "#fff";
    context.lineWidth = 1;
    context.strokeStyle = '#333';
    context.stroke();
    context.fillStyle = '#fff';
    context.fill();
}









// var tangram = [
//     {p:[{x:0, y:0}, {x:800, y:0}, {x:400, y:400}], color: '#caff67'},
//     {p:[{x:0, y:0}, {x:400, y:400}, {x:0, y:800}], color: '#67bccf'},
//     {p:[{x:800, y:0}, {x:800, y:400}, {x:600, y:600}, {x:600, y:200}], color: '#ef3d61'},
//     {p:[{x:600, y:200}, {x:600, y:600}, {x:400, y:400}], color: '#f9f51a'},
//     {p:[{x:400, y:400}, {x:600, y:600}, {x:400, y:800}, {x:200, y:600}], color: '#a594c0'},
//     {p:[{x:200, y:600}, {x:400, y:800}, {x:0, y:800}], color: '#fa8ecc'},
//     {p:[{x:800, y:400}, {x:800, y:800}, {x:400, y:800}], color: '#f6ca29'}
// ];
//
// for(var i in tangram){
//     draw(tangram[i],context)
// }
//
// function draw(doc,context){
//     context.beginPath();
//     context.moveTo(doc.p[0].x,doc.p[0].y);
//     for(var j=1;j<doc.p.length;j++){
//         context.lineTo(doc.p[j].x,doc.p[j].y);
//     }
//     //context.stroke();
//     context.fillStyle = doc.color;
//     context.fill();
//     context.closePath();
// }
