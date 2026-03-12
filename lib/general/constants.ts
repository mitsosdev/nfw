export const NFW = {
  name: "NFW",
  fullName: "New Fitness Workout",
  slogan: "IN HERE WE ALL FIT",
  phone: "210 9710 183",
  phoneHref: "tel:+302109710183",
  email: "info@nfw.gr",
  emailHref: "mailto:info@nfw.gr",
  address: {
    street: "Ηλιουπόλεως 161",
    area: "Υμηττός",
    city: "Αθήνα",
    zip: "17236",
    full: "Ηλιουπόλεως 161, Υμηττός 17236",
  },
  social: {
    instagram: {
      url: "https://www.instagram.com/new_fitness_workout/",
      handle: "@new_fitness_workout",
    },
  },
  googleMaps: {
    url: "https://www.google.com/maps/place/%CE%97%CE%BB%CE%B9%CE%BF%CF%85%CF%80%CF%8C%CE%BB%CE%B5%CF%89%CF%82+161,+%CE%94%CE%AC%CF%86%CE%BD%CE%B7+%CE%91%CF%84%CF%84%CE%B9%CE%BA%CE%AE%CF%82+172+36",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.5!2d23.7436799!3d37.9476018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bdff4a5c25d1%3A0x2c90e64ccbda9919!2zzpfOu865zr_Phc-Az4zOu861z4nPgiAxNjEsIM6UzqzPhs69zrcgzpHPhM-EzrnOus6uz4IgMTcyIDM2!5e0!3m2!1sel!2sgr!4v1710000000000!5m2!1sel!2sgr",
    lat: 37.9476018,
    lng: 23.7462602,
  },
  trainers: ["@dimitrisgekis", "@haragkeki"],
  services: ["pilatesReformer", "functional", "cardio"] as const,
  images: {
    logo: "/images/nfw/logo.png",
    hero: "/images/nfw/ig-post-13.jpg",
    heroAlt: "/images/nfw/ig-post-05.jpg",
    services: {
      pilatesReformer: "/images/nfw/ig-post-08.jpg",
      functional: "/images/nfw/ig-post-10.jpg",
      cardio: "/images/nfw/ig-post-09.jpg",
    },
    about: "/images/nfw/ig-post-07.jpg",
    gallery: [
      "/images/nfw/ig-post-04.jpg",
      "/images/nfw/ig-post-05.jpg",
      "/images/nfw/ig-post-06.jpg",
      "/images/nfw/ig-post-07.jpg",
      "/images/nfw/ig-post-08.jpg",
      "/images/nfw/ig-post-09.jpg",
      "/images/nfw/ig-post-10.jpg",
      "/images/nfw/ig-post-11.jpg",
      "/images/nfw/ig-post-12.jpg",
    ],
  },
} as const;
