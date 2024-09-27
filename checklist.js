function initChecklist(id, checklistFilters) {
  var checklistContent = document.getElementById(id),
    groupedFeatures = getGroupedFeatures();

  for (const [type, items] of Object.entries(groupedFeatures)) {
    const typeContainer = document.createElement("div");
    typeContainer.className = "checklist-type-container";

    var itemCount = items.length,
      discoveriesCount = items.filter(item => isDiscovered(item.feature)).length;

    var typeHeader = document.createElement("h2");
    typeHeader.textContent = items[0].group + " (" + discoveriesCount + "/" + itemCount + ")";
    typeHeader.style.borderBottomColor = items[0].color;
    typeHeader.className = "checklist-type-header";
    typeHeader.addEventListener("click", () => {
      typeContainer.classList.toggle("collapsed");
      onToggleChecklistFilter(type);
    });

    var filter = checklistFilters.find(item => item.id === type);
    if (filter && filter.value == false) {
      typeContainer.classList.toggle("collapsed");
    }
    typeContainer.appendChild(typeHeader);

    var featureList = document.createElement("ul");
    featureList.className = "checklist-feature-list";
    items.forEach(item => {
      var listItem = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checklist-${featureUID(item.feature)}`;
      checkbox.checked = isDiscovered(item.feature);
      checkbox.disabled = true;

      var label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.textContent = featureTitle(item.feature);
      label.addEventListener("click", () => {
        onChecklistItemClick(item.feature);
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      featureList.appendChild(listItem);
    });
    typeContainer.appendChild(featureList);
    checklistContent.appendChild(typeContainer);
  }
}