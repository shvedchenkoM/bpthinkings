function makeList() {
    // Establish the array which acts as a data source for the list
    var listData = [
        'Blue',
        'Red',
        'White',
        'Green',
        'Black',
        'Orange'
    ];

    // Make a container element for the list
    var listContainer = document.createElement('div');
    
    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);

    // Make the list
    var listElement = document.createElement('ul');

    // Add it to the page
    listContainer.appendChild(listElement);

    // Set up a loop that goes through the items in listItems one at a time
    var numberOfListItems = listData.length;

    for (var i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        var listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}
