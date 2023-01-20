export function setLightTheme() {
  //   document.documentElement.style.setProperty("--lg-black", "var(--dk-black");

  document.documentElement.style.setProperty(
    "--lg-light-black",
    "var(--dk-light-black)"
  );
  document.documentElement.style.setProperty(
    "--lg-darkest-gray",
    " var(--dk-darkest-gray)"
  );
  document.documentElement.style.setProperty(
    "--lg-darker-gray",
    "var(--dk-darker-gray)"
  );
  document.documentElement.style.setProperty(
    "--lg-dark-gray",
    "var(--dk-dark-gray)"
  );
  // document.documentElement.style.setProperty("--lg-light-gray", "--dk-light-gray");
  // document.documentElement.style.setProperty("--lg-lighter-gray", "--dk-lighter-gray");

  document.documentElement.style.setProperty(
    "--lg-lightest-gray",
    "var(--dk-lightest-gray)"
  );
  document.documentElement.style.setProperty(
    "--lg-darker-white",
    "var(--dk-darker-white)"
  );
  document.documentElement.style.setProperty("--lg-white", "var(--dk-white)");
}

export function setDarkTheme() {
  //   document.documentElement.style.setProperty("--lg-black", "var(--dk-darker-white");

  document.documentElement.style.setProperty(
    "--lg-light-black",
    "var(--dk-white)"
  );
  document.documentElement.style.setProperty(
    "--lg-darkest-gray",
    " var(--dk-lightest-gray)"
  );
  document.documentElement.style.setProperty(
    "--lg-darker-gray",
    "var(--dk-lighter-gray)"
  );
  document.documentElement.style.setProperty(
    "--lg-dark-gray",
    "var(--dk-light-gray)"
  );
  // document.documentElement.style.setProperty("--lg-light-gray", "--dk-dark-gray");
  // document.documentElement.style.setProperty("--lg-lighter-gray", "--dk-darker-gray");

  document.documentElement.style.setProperty(
    "--lg-lightest-gray",
    "var(--dk-darkest-gray)"
  );
  document.documentElement.style.setProperty(
    "--lg-darker-white",
    "var(--dk-black)"
  );
  document.documentElement.style.setProperty(
    "--lg-white",
    "var(--dk-light-black)"
  );
}
