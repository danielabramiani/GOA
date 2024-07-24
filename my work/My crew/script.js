const tabs = {
    links: document.querySelectorAll(".tab-links"),
    contents: document.querySelectorAll(".tab-contents")
};

function openTab(tabName) {
    Object.values(tabs).forEach(tabGroup =>
        tabGroup.forEach(tab => tab.classList.remove("active-link", "active-tab"))
    );

    const targetLink = [...tabs.links].find(link => link.textContent === tabName);
    if (targetLink) targetLink.classList.add("active-link");

    const targetContent = document.getElementById(tabName);
    if (targetContent) targetContent.classList.add("active-tab");
}
