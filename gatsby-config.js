let siteMetadata = {
    title: `Hydro Nova`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: ``,
    description: ``,
    author: ``,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Music",
            url: "/music"
        },
        {
            name: "News",
            url: "/news"
        },
        {
            name: "About",
            url: "/about"
        },
//       {
//           name: "Blog",
//            url: "/blog"
//        },
//        {
//            name: "Music",
//            url: "/portfolio"
//        },
//         {
//            name: "Contact",
//            url: "/contact"
//        }
    ],
    footerLinks: [
//        {
//            name: "Privacy Policy",
//            url: "/privacy-policy"
//        },
        {
            name: "",
            url: "/"
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/facebook.svg",
            url: "https://www.facebook.com/hydronovamusic/"
        },
        {
            name: "Twitter",
            icon: "/images/twitter.svg",
            url: "https://twitter.com/hydronovamusic"
        },
        {
            name: "Instagram",
            icon: "/images/instagram.svg",
            url: "https://www.instagram.com/hydronovaoffical/"
        },
        {
            name: "Youtube",
            icon: "/images/youtube.svg",
            url: "https://www.youtube.com/channel/UC1X-AyIuFrwZMJx8mNtR65Q"
        },
        {
            name: "Spotify",
            icon: "/images/spotify.svg",
            url: "https://open.spotify.com/artist/0ITsVYZw1Yqs1ge3nZ9W9U?si=ENweRyWKSv6AXmThit-mOw"
        },
        {
            name: "iTunes",
            icon: "/images/itunes.svg",
            url: "https://music.apple.com/us/artist/hydro-nova/1492850826"
        },
        {
            name: "SoundCloud",
            icon: "/images/soundcloud.svg",
            url: "https://soundcloud.com/hydro-nova-10080350"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Fill Fill Fill Fill Fill Fill Fill Fill Fill Fill `,
        mail: "hydronovamusic@gmail.com",
        phone: "",
        address: ""
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
