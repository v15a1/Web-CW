function increaseFontSize() {
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (0.5 * 0.2) + "em";
}

function decreaseFontSize() {
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) - (0.5 * 0.2) + "em";
}

// console.log(document.body.getElementsByClassName('productCard'));
// // for (let element in document.body.getElementsByClassName('productCard')) {
// // 	console.log(document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize);
// // 	document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize = document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize + (multiplier * 0.2) + "em";
// // 	document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize = document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize + (multiplier * 0.2) + "em";
// // }
// .style.fontSize = parseFloat(document.body.getElementsByClassName('productCard').style.fontSize) + (multiplier * 0.2) + "em";