fetch(
    "https://cdn.contentful.com/spaces/q4r9va1qls55/environments/master/entries?access_token=iAfFKHlD5R4MF3qzEPO1quMIsa6bvJjn2vZwNi276Xw"
)
    .then((response) => {
        return response.json();
    })
    .then((val) => {
        console.log(val);
    });

document.addEventListener("DOMContentLoaded", () => {
    showHideCardContent();
});

/**
 * A simple show/hide event listener attachment function
 * for the card component's content
 */

const showHideCardContent = (): void => {
    let cardContentVisible = false;

    const cardHeaderToggle: HTMLElement | null =
        document.getElementById("toggle");
    const icon: HTMLElement | null = document.getElementById("icon")!;
    const cardContent: HTMLElement | null =
        document.getElementById("card-content")!;

    cardHeaderToggle!.addEventListener("click", () => {
        if (cardContentVisible) {
            icon.className = "fa fa-angle-down";
            cardContent.classList.remove("updown");
        } else {
            icon.className = "fa fa-angle-down open";
            cardContent.classList.add("updown");
        }
        cardContentVisible = !cardContentVisible;
    });
};
