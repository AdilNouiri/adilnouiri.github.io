const ScrollToComponent = (ComponentId) => {
    const section = document.querySelector(ComponentId);

    if (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        const offsetPosition = sectionPosition + window.pageYOffset;

        const duration = 1000;
        const start = window.pageYOffset;
        const change = offsetPosition - start;
        let startTime = null;

        const easeInOutCubic = (t) => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animateScroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = easeInOutCubic(progress);

            window.scrollTo(0, start + change * easeProgress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    }
}

export default ScrollToComponent;
