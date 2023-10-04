const ScrollToComponent = (ComponentId) => {
    const section = document.querySelector(ComponentId);

    if (section)
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default ScrollToComponent;
