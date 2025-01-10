document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(button.dataset.tab).classList.add("active");
        });
    });

    // Slider functionality
    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach(slider => {
        const wrapper = slider.querySelector(".slider-wrapper");
        const images = wrapper.querySelectorAll("img");
        let currentIndex = 0;

        const nextButton = document.createElement("button");
        nextButton.classList.add("slider-button", "next");
        nextButton.textContent = ">";
        slider.appendChild(nextButton);

        const prevButton = document.createElement("button");
        prevButton.classList.add("slider-button", "prev");
        prevButton.textContent = "<";
        slider.appendChild(prevButton);

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            wrapper.style.transform = `translateX(-${currentIndex * 200}px)`;
        });

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            wrapper.style.transform = `translateX(-${currentIndex * 200}px)`;
        });
    });

    sliders.forEach(slider => {
        const images = slider.querySelectorAll(".slider-wrapper img");

        images.forEach(img => {
            img.addEventListener("click", () => {
                popupImg.src = img.src;
                popup.style.display = "flex";
            });
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

});
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // cancel being selected
            buttons.forEach(btn => btn.classList.remove("active"));

            // remove content in the active area
            contents.forEach(content => content.classList.remove("active"));

            // add active to the button
            button.classList.add("active");

            // find the content
            const targetContent = document.getElementById(button.dataset.tab);
            targetContent.classList.add("active");

            button.scrollIntoView({
                behavior: "smooth",
                block: "start"      
            });
        });
    });
});
