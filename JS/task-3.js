
function getElementWidth(content, padding, border) {
    const widthContent = Number.parseFloat(content);
    const widthPadding = Number.parseFloat(padding);
    const widthBorder = Number.parseFloat(border);
    return widthContent + 2 * (widthPadding + widthBorder);
}

console.log("\n**********  Task-3  ************");
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));