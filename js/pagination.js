showProgressBar = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("loadBar").style.width = `${scrolled}%`;
  };
  window.onscroll = () => {
    showProgressBar();
};