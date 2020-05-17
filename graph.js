const graph = (array, options, target) => {

    // Handle if target isn't passed
    if (!target) {
        console.log('Error: Please specify a target div in which to place your graph.');
        return;
    }

    let parent = document.getElementById(target);

    // Default colors order
    const defaultColors = ['red', 'blue'];

    // Set options defaults if not present
    if (!options.barSpacing) {
        options.barSpacing = 10;
    }
    if (!options.barWidth) {
        options.barWidth = 30;
    }

    // Full height div to have the individual bars display from the bottom with space above
    let scaleBar = document.createElement("DIV");
    scaleBar.style.height = '100%';
    scaleBar.style.display = 'inline-block';
    parent.appendChild(scaleBar);

    // Mouseover tooltip
    let tooltip = document.createElement("DIV");
    //tooltip.style.width = '100px';
    //tooltip.style.height = '100px';
    tooltip.style.display = 'none';
    tooltip.style.backgroundColor = 'white';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.border = 'solid grey 1px';
    tooltip.style.fontFamily = "'Open Sans', sans-serif";
    tooltip.style.fontWeight = '300';


    document.body.appendChild(tooltip);

    for (bar in array) {
        let div = document.createElement("DIV");
        parent.appendChild(div);
        div.id = bar;
        div.style.height = array[bar].value + '%';
        div.style.width = options.barWidth + 'px';
        div.style.display = 'inline-block';
        div.style.backgroundColor = 'red';
        div.style.marginRight = options.barSpacing + 'px';
        div.style.cursor = 'pointer';
        div.style.border = '2px solid white';
        div.style.borderRadius = '5px';
        div.style.borderBottomLeftRadius = '0px';
        div.style.borderBottomRightRadius = '0px';

        div.addEventListener('mouseover', (e) => {
            div.addEventListener('mousemove', (e) => {
                tooltip.style.position = 'absolute';
                tooltip.style.left = e.clientX + 10 + 'px';
                tooltip.style.top = e.clientY + 10 + 'px';
            })
            tooltip.style.display = 'block';
            tooltip.innerHTML = array[e.target.id].label + ': ' + array[e.target.id].value;
            div.style.border = '2px solid grey';
        })
        div.addEventListener('mouseleave', (e) => {
            tooltip.style.display = 'none';
            div.style.border = '2px solid white';
        })
    }
}