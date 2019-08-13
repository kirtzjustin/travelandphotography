function addCustomBookmark() {
    let bookmarksList = document.getElementsByClassName('esri-bookmarks__list')[0];
    let newListItem = document.createElement('li');
    let newListItemButton = document.createElement('button');
    let newListItemTextSpan = document.createElement('span');
    let newListItemIconSpan = document.createElement('span');
    let newListItemTextSpanText = document.createTextNode('Custom Bookmark ' + String(app.bookmarkCounter));
    // closure to preserve extent
    let bookmarkExtent = (() => app.activeView.extent)();

    newListItemTextSpan.classList.add('esri-bookmarks__bookmark-name');
    newListItemTextSpan.appendChild(newListItemTextSpanText);

    newListItemIconSpan.classList.add("esri-bookmarks__bookmark-icon", "esri-icon-bookmark");
    newListItemButton.classList.add('esri-bookmarks__bookmark-button');

    newListItemButton.appendChild(newListItemIconSpan);
    newListItemButton.appendChild(newListItemTextSpan);
    newListItem.appendChild(newListItemButton);
    newListItem.classList.add('esri-bookmarks__bookmark');
    newListItem.addEventListener('click', function () {
        app.activeView.goTo(bookmarkExtent);
    });
    bookmarksList.prepend(newListItem);
    app.bookmarkCounter += 1;
}