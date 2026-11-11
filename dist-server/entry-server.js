import * as React from "react";
import { StrictMode, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { Link, StaticRouter, useLocation, useParams, useRoutes } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/pages/home/Home.tsx
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "page-content",
		children: /* @__PURE__ */ jsx("section", {
			className: "section hero home-placeholder dark",
			children: /* @__PURE__ */ jsx("div", {
				className: "card",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "home-card header",
							style: {
								gridColumn: "1/13",
								gridRow: "1/2",
								color: "var(--colour-dark)"
							},
							children: /* @__PURE__ */ jsx("h1", {
								className: "heading",
								"data-fitty": true,
								"data-text": "trim",
								style: {
									whiteSpace: "nowrap",
									display: "inline-block",
									width: "auto",
									maxWidth: "100%",
									color: "var(--colour-dark)",
									textTransform: "uppercase"
								},
								children: "Re: Design"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "home-card brand",
							style: {
								fontSize: "var(--text-h5)",
								color: "var(--colour-dark)",
								textBoxTrim: "trim-both"
							},
							children: /* @__PURE__ */ jsx("h1", {
								className: "heading bold",
								style: { color: "var(--colour-dark)" },
								children: "SITE COMING SOON"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "home-card info",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "heading bold",
									style: {
										marginTop: "2rem",
										color: "var(--colour-dark)"
									},
									children: "Robbie Eason"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "heading",
									style: { color: "var(--colour-dark)" },
									children: "Webflow Developer"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "content vertical left-aligned height-auto",
									style: { paddingTop: "2rem" },
									children: /* @__PURE__ */ jsx("a", {
										href: "mailto:robbie@re-des.work@gmail.com",
										children: /* @__PURE__ */ jsx("h3", {
											className: "heading",
											children: "robbie@re-des.work"
										})
									})
								})
							]
						})
					]
				})
			})
		})
	}), /* @__PURE__ */ jsx("div", { className: "page-bg dark" })] });
}
// src/components/icons/IconArrow.tsx
function IconArrow({ colour = "#7531f7", rotate = 0 }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 -960 960 960",
		width: "100%",
		height: "100%",
		fill: colour,
		style: { transform: `rotate(${rotate}deg)` },
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", { d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" })
	});
}
// src/components/icons/@iconMap.tsx
var icons = { "arrow": IconArrow };
// src/components/button/button.tsx
function Button({ anim, animDuration = .6, animOrigin, animScale, splitType = "chars", handleClick, variant = "filled-border", text = "This is a button", textColour = "var(--colour-dark)", textColourTarget = "var(--colour-light)", textSize = "var(--text-p)", textWeightChange = "", borderColour = "", borderColourChange = "", enableBg = true, bgColour = "var(--colour-light-mid)", bgColourTarget = "var(--colour-dark)", enableIcon = true, iconSize = "0.8em", iconColour = textColour, icon = "arrow", rotateIcon = 0, enableLargeIcon = false, largeIconSize = "0.8em", largeIconColour = "var(--colour-light)", largeIconColourTarget = "var(--colour-light)", largeIcon = "arrow", rotateLargeIcon = 0, largeIconBgColour = "var(--colour-dark)", largeIconBgColourTarget = "var(--colour-cta)", enableDot = false, dotColour = "var(--colour-cta)", link = "", transitionKey = "swipe-between" }) {
	const Icon = icons[icon];
	const LargeIcon = icons[largeIcon];
	return /* @__PURE__ */ jsxs("div", {
		className: `button ${variant === "underlined" ? "underlined" : ""}`,
		"data-anim": anim,
		"data-anim-duration": animDuration,
		"data-anim-origin": animOrigin,
		"data-anim-scale": animScale,
		"data-split-type": splitType,
		"data-textcolourchange": textColourTarget,
		"data-textweightchange": textWeightChange,
		"data-bordercolourchange": borderColourChange,
		"data-bgcolourchange": bgColourTarget,
		"data-largeiconcolourtarget": largeIconColourTarget,
		"data-largeiconbgcolourtarget": largeIconBgColourTarget,
		style: { borderColor: borderColour },
		onClick: handleClick,
		children: [
			enableLargeIcon && /* @__PURE__ */ jsx("div", {
				className: "button-icon-wrap-large",
				"data-anim": "largeiconwrap",
				style: { backgroundColor: largeIconBgColour },
				children: /* @__PURE__ */ jsxs("div", {
					className: "button-icon-div",
					"data-anim": "iconwrapinner",
					style: {
						width: largeIconSize,
						height: largeIconSize
					},
					children: [/* @__PURE__ */ jsx("div", {
						className: "button-icon",
						"data-anim": "largeicon",
						children: /* @__PURE__ */ jsx(LargeIcon, {
							colour: largeIconColour,
							rotate: rotateLargeIcon
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "button-icon absolute",
						"data-anim": "largeicon",
						children: /* @__PURE__ */ jsx(LargeIcon, {
							colour: largeIconColour,
							rotate: rotateLargeIcon
						})
					})]
				})
			}),
			enableDot && /* @__PURE__ */ jsx("div", {
				className: "button-dot-wrap",
				"data-anim": "dotwrap",
				children: /* @__PURE__ */ jsx("div", {
					className: "button-dot",
					"data-anim": "buttondot",
					style: { backgroundColor: dotColour }
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "button-text-wrap",
				"data-anim": "textwrap",
				style: { fontSize: textSize },
				children: [/* @__PURE__ */ jsx("p", {
					className: "button-text",
					"data-anim": "buttontext",
					style: { color: textColour },
					children: text
				}), /* @__PURE__ */ jsx("p", {
					className: "button-text absolute",
					"data-anim": "buttontext",
					style: { color: textColour },
					children: text
				})]
			}),
			enableBg && /* @__PURE__ */ jsx("div", {
				className: "button-bg",
				"data-anim": "buttonbg",
				style: { backgroundColor: bgColour }
			}),
			enableIcon && /* @__PURE__ */ jsx("div", {
				className: "button-icon-wrap-outer",
				"data-anim": "iconwrap",
				children: /* @__PURE__ */ jsx("div", {
					className: "button-icon-wrap",
					children: /* @__PURE__ */ jsxs("div", {
						className: "button-icon-div",
						"data-anim": "iconwrapinner",
						style: {
							width: iconSize,
							height: iconSize
						},
						children: [/* @__PURE__ */ jsx("div", {
							className: "button-icon",
							"data-anim": "icon",
							children: /* @__PURE__ */ jsx(Icon, {
								colour: iconColour,
								rotate: rotateIcon
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "button-icon absolute",
							"data-anim": "icon",
							children: /* @__PURE__ */ jsx(Icon, {
								colour: iconColour,
								rotate: rotateIcon
							})
						})]
					})
				})
			}),
			link && /* @__PURE__ */ jsx(Link, {
				className: "button-link",
				to: link,
				"data-transition": transitionKey
			})
		]
	});
}
// src/components/button/buttonCta.tsx
function ButtonCta({ transitionKey = "swipe-between", text = "Button Text", link = "" }) {
	return /* @__PURE__ */ jsx(Button, {
		anim: "colourChange,iconSwap,colourChange,splitSwap",
		bgColour: "var(--colour-cta)",
		bgColourTarget: "var(--colour-cta-mid)",
		textColour: "var(--colour-light)",
		borderColour: "var(--colour-cta)",
		borderColourChange: "var(--colour-cta-mid)",
		rotateIcon: 180,
		transitionKey,
		link,
		text
	});
}
// src/components/button/buttonSecondary.tsx
function ButtonSecondary({ transitionKey = "swipe-between", text = "Button Text", link = "" }) {
	return /* @__PURE__ */ jsx(Button, {
		anim: "colourChange,iconSwap,colourChange,splitSwap",
		bgColour: "var(--colour-light-transparent)",
		bgColourTarget: "var(--colour-light-mid)",
		textColour: "var(--colour-dark)",
		textColourTarget: "var(--colour-dark)",
		borderColour: "var(--colour-dark)",
		rotateIcon: 180,
		transitionKey,
		link,
		text
	});
}
// src/function/createBreadcrubs.tsx
function Breadcrumbs({ variant = "dark", includeHome = true, transitionKey = "vertical-mask-under" }) {
	const currentPath = useLocation().pathname;
	const textColours = {
		dark: "var(--colour-cta-dark)",
		light: "var(--colour-light)"
	};
	const breadcrumbs = Object.entries(pages).filter(([path]) => currentPath === path || currentPath.startsWith(`${path}/`)).filter(([path]) => path !== "/").sort(([a], [b]) => a.length - b.length);
	return /* @__PURE__ */ jsxs("p", {
		className: "eyebrow-copy",
		style: { color: textColours[variant] },
		children: [includeHome && currentPath !== "/" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Link, {
			to: "/",
			className: "intext-link",
			"data-transition": transitionKey,
			children: "Home"
		}), breadcrumbs.length > 0 && " / "] }), breadcrumbs.map(([path, page], index) => /* @__PURE__ */ jsxs("span", { children: [index > 0 && " / ", path === currentPath ? page.label : /* @__PURE__ */ jsx(Link, {
			to: path,
			className: "intext-link",
			"data-transition": transitionKey,
			children: page.label
		})] }, path))]
	});
}
// src/components/structure/headers/HeroHeader.tsx
function HeroHeader({ variant = "light", heroHeading = "Hero Heading", heroSubHeading, heroCopy, children, childrenOverride = false, breadcrumb = true, classes }) {
	const textColours = {
		"dark": "var(--colour-dark)",
		"light": "var(--colour-light)"
	};
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("header", {
		className: `grid ${classes ?? ""}`,
		style: { rowGap: "0.5rem" },
		children: [!childrenOverride && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
			className: "hero-heading-wrap",
			style: { gridRow: "1/2" },
			children: [breadcrumb && /* @__PURE__ */ jsx(Breadcrumbs, {
				variant,
				includeHome: true
			}), /* @__PURE__ */ jsx("h1", {
				className: "hero-heading light",
				"data-anim": "splitChars",
				style: {
					maxWidth: "",
					color: textColours[variant]
				},
				children: heroHeading
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "hero-content",
			style: {
				gridColumn: "1/13",
				gridRow: "2/3"
			},
			children: [
				heroSubHeading && /* @__PURE__ */ jsx("h2", { children: heroSubHeading }),
				/* @__PURE__ */ jsx("p", {
					className: "hero-copy align-start",
					style: { color: textColours[variant] },
					children: heroCopy
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hero-sub-content",
					children
				})
			]
		})] }), children && childrenOverride && children]
	}) });
}
// src/components/brand/brandmark.tsx
var brandmarks = {
	darkKnockout: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var02_knockout.svg",
	lightKnockout: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var01_knockout.svg",
	dark: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var02.svg",
	light: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var01.svg"
};
function Brandmark({ type = "darkKnockout", width = "auto", height = "100%" }) {
	return /* @__PURE__ */ jsx("img", {
		src: brandmarks[type],
		alt: "RE Design",
		style: {
			display: "block",
			width,
			height,
			aspectRatio: 1,
			objectFit: "cover"
		}
	});
}
// src/components/structure/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("footer", {
		className: "footer",
		children: /* @__PURE__ */ jsx("div", {
			className: "wrapper full-h",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid",
				children: [/* @__PURE__ */ jsx("div", {
					className: "logo-footer-wrap",
					children: /* @__PURE__ */ jsx("div", {
						className: "logo-footer-wrap-icon",
						children: /* @__PURE__ */ jsx(Brandmark, { type: "lightKnockout" })
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "footer-links",
					children: /* @__PURE__ */ jsx("p", {
						className: "footer-link",
						children: "Footer Link"
					})
				})]
			})
		})
	}) });
}
// src/components/structure/PageStructure.tsx
function PageStructure({ children, bgClass, includeFooter = true, className, pageWrapAttributes, ...pageContentAttributes }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "page-wrap",
		"data-page-wrap": true,
		...pageWrapAttributes,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: `page-content ${className ?? ""}`,
				...pageContentAttributes,
				children
			}),
			/* @__PURE__ */ jsx("div", { className: `page-bg ${bgClass ?? ""}` }),
			includeFooter && /* @__PURE__ */ jsx(Footer, {})
		]
	});
}
// src/components/structure/Section.tsx
function Section({ children, classes = "", wrapper = true, wrapperClasses = "" }) {
	return /* @__PURE__ */ jsx("section", {
		className: `section ${classes}`,
		children: wrapper ? /* @__PURE__ */ jsx("div", {
			className: `wrapper ${wrapperClasses}`,
			children
		}) : children
	});
}
// src/pages/homeNew/HomeNew.tsx
function HomeNew() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(PageStructure, {
		bgClass: "light",
		children: /* @__PURE__ */ jsx(Section, {
			classes: "top hero light",
			wrapperClasses: "full-h",
			children: /* @__PURE__ */ jsx(HeroHeader, {
				heroHeading: "RE: DESIGN",
				heroSubHeading: "Freelance Website Developer",
				heroCopy: " Bespoke websites for theatre and entertainment businesses.",
				variant: "dark",
				breadcrumb: false,
				children: /* @__PURE__ */ jsxs("div", {
					className: "button-wrap",
					children: [/* @__PURE__ */ jsx(ButtonCta, {
						text: "See Work",
						link: "/work",
						transitionKey: "mask-1"
					}), /* @__PURE__ */ jsx(ButtonSecondary, { text: "Get in Touch" })]
				})
			})
		})
	}) });
}
// src/pages/work/websites/projects/websiteClients.tsx
var websiteClients = {
	"IE": {
		name: "Immersive Everywhere",
		link: "https://www.immersiveeverywhere.com/"
	},
	"HH": {
		name: "Hartshorn Hook",
		link: "https://www.hartshornhook.com/"
	},
	"EMG": {
		name: "EMG Entertainment",
		link: "https://emg-ents.com/"
	},
	"PBO": {
		name: "Perthshire Theatre and Concert Hall",
		link: "https://www.perththeatreandconcerthall.com/"
	},
	"TT": {
		name: "Troubadour Theatres",
		link: "https://www.troubadourtheatres.com/"
	},
	"BVG": {
		name: "Annerin",
		link: "https://www.annerin.com/"
	},
	"WPE": {
		name: "Wild Park Entertainment",
		link: "https://www.wildparkentertainment.com/"
	},
	"RB": {
		name: "Ray Bradshaw",
		link: "https://www.raybradshaw.com/"
	}
};
// src/pages/work/websites/projects/websiteData.tsx
var websiteProjects = [
	{
		title: "The Traitors Live Experience",
		slug: "the-traitors-live-experience",
		clientName: websiteClients.IE.name,
		clientLink: websiteClients.IE.link,
		status: "live",
		dateText: "June 2024",
		date: "2024-06-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/TTLE.png",
		link: "https://www.thetraitorslive.co.uk/",
		colour: "#f58221",
		description: "The latest experience from Immersive Everywhere, bringing Peppa Pig to life. Live and in person at the Metro Centre in Gateshead.\n\nThe site features complex assets, TickX integration, music player and CMS driven FAQs.\n\nDesign by AKA."
	},
	{
		title: "Peppa Pig Surprise Party",
		slug: "peppa-pig-surprise-party",
		clientName: websiteClients.IE.name,
		clientLink: websiteClients.IE.link,
		status: "closed",
		dateText: "June 2025",
		date: "2025-06-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/PPSP.png",
		link: "https://www.peppapigsurpriseparty.co.uk/",
		colour: "#e31d79",
		description: "This website was developed for The Traitors Live Experience, an exciting new live experience inviting the public to participate in the devious game of lies and deceipt based on the hit television show The Traitors.\n\nThis website was built featuring CMS features for FAQs, sign-up forms for presale & embedded booking functionality.\n\nDesign by AKA."
	},
	{
		title: "Perthshire Box Office",
		slug: "perthshire-box-office",
		clientName: websiteClients.PBO.name,
		clientLink: websiteClients.PBO.link,
		status: "live",
		dateText: "March 2024",
		date: "2024-03-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/PBO.png",
		link: "https://www.perthshireboxoffice.com/",
		colour: "#00dbb2",
		description: `This website was developed for Perthshire Theatre and Concert Hall's new box office service "Perthshire Box Office" - offering box office services to culture, leisure and tourism sectors across Perth and Kinross. Delivering through online, telephone and in person booking.\n\nI also developed the lightweight brand for the website, featuring a fresh colour palette and a new logo inspired by the iron entrance to Perth Theatre and a ticket.\n\nThe website has search functionality, including by type and partner.`
	},
	{
		title: "Ulster American",
		slug: "ulster-american",
		clientName: websiteClients.EMG.name,
		clientLink: websiteClients.EMG.link,
		status: "closed",
		dateText: "October 2023",
		date: "2023-10-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/UA.png",
		link: "",
		colour: "#e6fb10",
		description: `A black comedy from award winning playwright David Ireland, this dark play features a star studded cast of Woody Harrelson, Andy Serkis & Louisa Harland.\n\nDesign by Emilie Chen.`
	},
	{
		title: "Dear Evan Hansen",
		slug: "dear-evan-hansen",
		clientName: websiteClients.EMG.name,
		clientLink: websiteClients.EMG.link,
		status: "closed",
		dateText: "November 2023",
		date: "2023-11-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/DEH.png",
		link: "",
		colour: "#0a4f8c",
		description: `Based on the 2021 film, Dear Evan Hansen has been touring for the last few years - featuring a Grammy award winning score packed with some of the biggest musical theatre songs of the last decade.Featuring CMS built for tour dates with booking links & embedded social media feed.`
	},
	{
		title: "Troubadour Studios",
		slug: "troubadour-studios",
		clientName: websiteClients.TT.name,
		clientLink: websiteClients.TT.link,
		status: "live",
		dateText: "May 2024",
		date: "2024-05-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/TS.png",
		link: "https://www.troubadourstudios.com/",
		colour: "#ffffff",
		description: `Troubadour built their own collection of creative spaces, flexible theatres and studio spaces catering to a variety of needs, offices included.\n\nSince then they have catered to a vast variety of creative clients such as the BBC, Netflix, Disney - and many more. This website features technical details about each of their studios and constituent creative spaces.`
	},
	{
		title: "Kim's Convenience",
		slug: "kims-convenience",
		clientName: websiteClients.EMG.name,
		clientLink: websiteClients.EMG.link,
		status: "closed",
		dateText: "June 2024",
		date: "2024-06-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/KC.png",
		link: "",
		colour: "#f6ff6f",
		description: `Now a global smash hit, this hilarious and heartwarming drama about a family-run Korean store that inspired the Netflix phenomenon, is written by Ins Choi, who calls the play his "love letter to his parents and to all first-generation immigrants who now call Canada their home."`
	},
	{
		title: "Beyond Van Gogh",
		slug: "beyond-van-gogh",
		clientName: websiteClients.BVG.name,
		clientLink: websiteClients.BVG.link,
		status: "live",
		dateText: "July 2024",
		date: "2024-07-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/BVG.png",
		link: "https://www.beyondvangogh.co.uk/",
		colour: "#00263e",
		description: `Beyond Van Gogh is an immersive exhibit projecting the post impressionist master's works in a stunning display, transporting you to the mind of one of historys greatest artists.`
	},
	{
		title: "Murder She Didn't Write",
		slug: "murder-she-didnt-write",
		clientName: websiteClients.WPE.name,
		clientLink: websiteClients.WPE.link,
		status: "live",
		dateText: "December 2024",
		date: "2024-12-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/MSDW.png",
		link: "https://www.murdershedidntwrite.com/",
		colour: "#1a2517",
		description: `Murder She Didn't write is a hit play where the audience acts as the writer of a murder mystery. The talented cast improvise a the plot based on audience suggestions.`
	},
	{
		title: "Ray Bradshaw Tour Site",
		slug: "ray-bradshaw-tour-site",
		clientName: websiteClients.RB.name,
		clientLink: websiteClients.RB.link,
		status: "live",
		dateText: "April 2025",
		date: "2025-04-01",
		thumbnailUrl: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/projects/thumbnails/original/RB.png",
		link: "https://www.raybradshaw.com/",
		colour: "#d87e48",
		description: `Murder She Didn't write is a hit play where the audience acts as the writer of a murder mystery. The talented cast improvise a the plot based on audience suggestions.`
	}
];
// src/components/cards/WorkCard.tsx
function WorkCard({ title = "Work Card", client = "Client name", slug, img, bgCol }) {
	return /* @__PURE__ */ jsxs(Link, {
		className: "work-card",
		to: `/work/websites/${slug}`,
		"aria-label": `View ${title} website project`,
		"data-transition": "flip-img-clone",
		children: [/* @__PURE__ */ jsx("div", {
			className: "work-card-content",
			children: /* @__PURE__ */ jsxs("div", {
				className: "work-card-title-wrap",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "work-card-title",
					children: title
				}), /* @__PURE__ */ jsx("h4", {
					className: "work-card-client",
					children: client
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "work-card-bg",
			"data-anim-flip": "target-container",
			style: { backgroundColor: bgCol },
			children: [/* @__PURE__ */ jsx("p", {
				className: "flip-identifier",
				children: title
			}), /* @__PURE__ */ jsx("img", {
				"data-anim-flip": "flip-item",
				className: "work-card-bg-img",
				src: img
			})]
		})]
	});
}
// src/pages/work/websites/websites.tsx
function Websites() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(PageStructure, {
		bgClass: "light",
		children: /* @__PURE__ */ jsxs(Section, {
			classes: "light min-100 top",
			children: [/* @__PURE__ */ jsx(HeroHeader, {
				variant: "dark",
				heroHeading: "Website Work",
				heroCopy: "A selection of bespoke website design and development projects, from custom Webflow websites to responsive digital experiences for businesses, creative professionals and entertainment clients.",
				classes: "auto-h"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid",
				style: { marginTop: "2rem" },
				children: /* @__PURE__ */ jsx("div", {
					className: "content vertical rem-2",
					style: { gridColumn: "1/13" },
					children: websiteProjects.map((project) => /* @__PURE__ */ jsx(WorkCard, {
						title: project.title,
						client: project.clientName,
						slug: project.slug,
						img: project.thumbnailUrl,
						bgCol: project.colour
					}, project.slug))
				})
			})]
		})
	}) });
}
// src/pages/work/websites/WebsitesWheel.tsx
function WebsitesWheel() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(PageStructure, {
		"data-page-wrap": true,
		"data-anim-snap": "cardShuffleSnap",
		includeFooter: false,
		children: /* @__PURE__ */ jsx("div", {
			className: "wrapper full-h",
			children: /* @__PURE__ */ jsx("div", {
				className: "snap-card-wrapper",
				children: websiteProjects.map((project) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
					className: "snap-card-shuffle",
					"data-shuffle-slide": true,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "snap-card-shuffle-content",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "snap-card-shuffle-title",
							children: project.title
						}), /* @__PURE__ */ jsx("h4", {
							className: "snap-card-shuffle-client",
							children: project.clientName
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "snap-card-shuffle-bg",
						children: /* @__PURE__ */ jsx("img", {
							src: project.thumbnailUrl,
							className: "snap-card-shuffle-img"
						})
					})]
				}) }, project.title))
			})
		})
	}) });
}
// src/pages/testPage/TestPage.tsx
function TestPage() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(WebsitesWheel, {}) });
}
// src/pages/work/portfolio.tsx
function Work() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(PageStructure, {
		bgClass: "light",
		children: /* @__PURE__ */ jsxs(Section, {
			classes: "light min-100 top",
			children: [/* @__PURE__ */ jsx(HeroHeader, {
				variant: "dark",
				heroHeading: "Work",
				heroCopy: "A selection of bespoke website design and development projects, from custom Webflow websites to responsive digital experiences for businesses, creative professionals and entertainment clients."
			}), /* @__PURE__ */ jsx("div", {
				className: "grid",
				style: { marginTop: "2rem" },
				children: /* @__PURE__ */ jsx("div", {
					style: { gridColumn: "span 3" },
					children: /* @__PURE__ */ jsx(Button, {
						text: "Websites",
						link: "/work/websites",
						transitionKey: "venitian-vert",
						anim: "colourChange",
						rotateIcon: 180
					})
				})
			})]
		})
	}) });
}
// src/pages/work/websites/websiteTemplate.tsx
function WebsiteProject() {
	const { slug } = useParams();
	const project = websiteProjects.find((project) => project.slug === slug);
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", {
		className: "page-wrap",
		"data-anim-flip": "transition-page",
		children: [/* @__PURE__ */ jsx("div", {
			className: "page-content",
			children: /* @__PURE__ */ jsx(Section, {
				classes: "no-bg min-100 top",
				children: !project ? /* @__PURE__ */ jsx("h1", { children: "Project not found" }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
					className: "grid",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "breadcrumb-wrap",
							children: /* @__PURE__ */ jsx(Breadcrumbs, {
								variant: "dark",
								includeHome: true
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "project-title-wrap",
							children: /* @__PURE__ */ jsx("h1", {
								className: "project-title",
								children: project.title
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "project-img-wrap",
							"data-anim-flip": "source-container",
							children: [/* @__PURE__ */ jsx("p", {
								className: "flip-identifier",
								children: project.title
							}), /* @__PURE__ */ jsx("img", {
								"data-anim-flip": "flip-item",
								className: "work-card-bg-img flip-destination-state",
								src: project.thumbnailUrl
							})]
						})
					]
				}) })
			})
		}), /* @__PURE__ */ jsx("div", { className: "page-bg light" })]
	}) });
}
// src/pages/logo.tsx
function Logopage() {
	return /* @__PURE__ */ jsx(Section, {
		classes: "dark hero",
		wrapperClasses: "full-h",
		children: /* @__PURE__ */ jsx("div", {
			style: {
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			},
			children: /* @__PURE__ */ jsx("div", {
				style: {
					width: "61.8%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				},
				children: /* @__PURE__ */ jsx(Brandmark, {
					width: "100%",
					height: "auto",
					type: "lightKnockout"
				})
			})
		})
	});
}
// src/pages/about/About.tsx
function About() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Section, {
			classes: "light top no-padding-bottom",
			children: /* @__PURE__ */ jsx(HeroHeader, {
				heroHeading: "About",
				variant: "dark"
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			classes: "light",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid",
				children: /* @__PURE__ */ jsxs("div", {
					className: "about-grid",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "about-row",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "about-title",
									"data-anim": "splitLines",
									children: "SKILLS"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "about-div",
									"data-anim": "divider"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "about-copy-wrap full-w",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "about-copy",
											"data-anim": "splitLines",
											children: "A combination of design understanding and technical knowledge allows me to approach projects from different angles, choosing the right tools and techniques for each build."
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "about-copy-list-wrap",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "about-copy-subhead",
												"data-anim": "splitLines",
												children: "PLATFORMS"
											}), /* @__PURE__ */ jsxs("ul", {
												className: "about-copy-list",
												"data-anim": "lazyChild",
												children: [
													/* @__PURE__ */ jsx("li", { children: "Webflow" }),
													/* @__PURE__ */ jsx("li", { children: "Cloudflare" }),
													/* @__PURE__ */ jsx("li", { children: "Github" })
												]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "about-copy-list-wrap",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "about-copy-subhead",
												"data-anim": "splitLines",
												children: "LANGUAGES"
											}), /* @__PURE__ */ jsxs("ul", {
												className: "about-copy-list",
												"data-anim": "lazyChild",
												children: [
													/* @__PURE__ */ jsx("li", { children: "HTML" }),
													/* @__PURE__ */ jsx("li", { children: "CSS" }),
													/* @__PURE__ */ jsx("li", { children: "Javascript" }),
													/* @__PURE__ */ jsx("li", { children: "React" })
												]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "about-copy-list-wrap",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "about-copy-subhead",
												"data-anim": "splitLines",
												children: "SPECIALISMS"
											}), /* @__PURE__ */ jsxs("ul", {
												className: "about-copy-list",
												"data-anim": "lazyChild",
												children: [
													/* @__PURE__ */ jsx("li", { children: "Responsive Development" }),
													/* @__PURE__ */ jsx("li", { children: "Animation & Interaction" }),
													/* @__PURE__ */ jsx("li", { children: "Third-party integration" }),
													/* @__PURE__ */ jsx("li", { children: "Custom functionality" })
												]
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "about-row",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "about-title",
									"data-anim": "splitLines",
									children: "BACKGROUND"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "about-div",
									"data-anim": "divider"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "about-copy-wrap",
									children: [/* @__PURE__ */ jsx("p", {
										className: "about-copy",
										"data-anim": "splitLines",
										children: "I'm a freelance Website Developer working under RE Design, specialising in bespoke websites that balance clean design, considered functionality and engaging interactions."
									}), /* @__PURE__ */ jsx("p", {
										className: "about-copy",
										"data-anim": "splitLines",
										children: "I enjoy taking static designs and bringing them to life, finding solutions to technical challenges and making sure every detail works as it should."
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "about-row",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "about-title",
									"data-anim": "splitLines",
									children: "EXPERTISE"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "about-div",
									"data-anim": "divider"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "about-copy-wrap",
									children: [/* @__PURE__ */ jsx("p", {
										className: "about-copy",
										"data-anim": "splitLines",
										children: "With a background in Graphic Design and UX, I bring an understanding of both the visual and functional sides of a website."
									}), /* @__PURE__ */ jsx("p", {
										className: "about-copy",
										"data-anim": "splitLines",
										children: "My work goes beyond translating designs into code. From responsive layouts and custom interactions to complex third-party integrations, I enjoy finding the right approach to make each project work."
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "about-row",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "about-title",
									"data-anim": "splitLines",
									children: "ROBBIE"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "about-div",
									"data-anim": "divider"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "about-copy-wrap",
									children: [/* @__PURE__ */ jsx("p", {
										className: "about-copy",
										"data-anim": "splitLines",
										children: "I started working in website development shortly after graduating from university, initially through contract work before establishing my own freelance practice."
									}), /* @__PURE__ */ jsx("p", {
										className: "about-copy",
										"data-anim": "splitLines",
										children: "Outside of work, I'm interested in architecture, music and history - all of which offer their own perspectives on design, creativity and the world around us."
									})]
								})
							]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
// src/pages/playground/Playground.tsx
function Playground() {
	return /* @__PURE__ */ jsx("div", {
		className: "redes-event-popup-wrap",
		children: /* @__PURE__ */ jsxs("div", {
			className: "redes-event-content",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "redes-event-close",
					children: /* @__PURE__ */ jsx("img", {
						className: "redes-event-close-icon",
						src: "https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/icons/Arts%20Tickets/popup_close%20(CTA).png"
					})
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "redes-event-title",
					children: "Fancy a drink on arrival?"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "redes-event-copy",
					children: "Pre-order your welcome and interval drinks here!"
				}),
				/* @__PURE__ */ jsx("button", {
					className: "redes-button",
					children: "Order Your Drinks Now"
				})
			]
		})
	});
}
// src/pages/pageIndex.tsx
var pages = {
	"/": {
		component: HomePage,
		label: "Home",
		seo: {
			title: "RE Design | Website Coming Soon",
			description: "RE Design by Robbie Eason, freelance Webflow developer. Website coming soon."
		}
	},
	"/about": {
		component: About,
		label: "About",
		seo: {
			title: "About | RE Design",
			description: "Lorem ipsum dolor.",
			noIndex: true
		}
	},
	"/test-page": {
		component: TestPage,
		label: "Test Page",
		seo: {
			title: "Test Page | RE Design",
			description: "A test page for RE Design website development.",
			noIndex: true
		}
	},
	"/home-dev": {
		component: HomeNew,
		label: "Home",
		seo: {
			title: "Freelance Website Developer | RE Design",
			description: "Bespoke websites for theatre and entertainment businesses.",
			noIndex: true
		}
	},
	"/work": {
		component: Work,
		label: "Work",
		seo: {
			title: "Website Design & Development Work | RE Design",
			description: "A selection of bespoke website design and development projects for businesses, creative professionals and entertainment clients."
		}
	},
	"/work/websites": {
		component: Websites,
		label: "Websites",
		seo: {
			title: "Website Projects | RE Design",
			description: "A selection of website design and development projects by RE Design."
		}
	},
	"/logo": {
		component: Logopage,
		label: "Logo",
		seo: {
			title: "RE Design Logo",
			description: "RE Design visual identity."
		}
	},
	"/playground": {
		component: Playground,
		label: "Playground",
		seo: {
			title: "Playground",
			description: "lorem",
			noIndex: false
		}
	},
	...Object.fromEntries(websiteProjects.map((project) => [`/work/websites/${project.slug}`, {
		component: WebsiteProject,
		label: project.title,
		seo: {
			title: `${project.title} | RE Design`,
			description: `${project.title}, a website project for ${project.clientName} by RE Design.`
		}
	}]))
};
function getPageSeo(pathname) {
	const page = pages[pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname];
	if (page?.seo) return page.seo;
	return {
		title: "Page not found | RE Design",
		description: "The page you're looking for doesn't exist or may have moved.",
		noIndex: true
	};
}
var prerenderPaths = Object.keys(pages);
// src/components/global/TransitionMask.tsx
function TransitionMask() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "global-transition-mask",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("div", {
			className: "mask-wrap",
			children: /* @__PURE__ */ jsx("div", {
				className: "wrapper full-h",
				children: /* @__PURE__ */ jsx("div", {
					className: "content align-centre align-centre justify-centre",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mask-inner",
						children: [/* @__PURE__ */ jsx(Brandmark, { type: "lightKnockout" }), /* @__PURE__ */ jsx("p", {
							className: "mask-text",
							children: "RE DESIGN"
						})]
					})
				})
			})
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "global-transition-mask-under",
		"aria-hidden": "true"
	})] });
}
// src/components/Navbar.tsx
function Navbar() {
	return /* @__PURE__ */ jsxs("header", {
		className: "nav",
		children: [/* @__PURE__ */ jsx("div", {
			className: "nav-wrap",
			children: /* @__PURE__ */ jsxs("div", {
				className: "nav-content",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "nav-brand",
					children: [/* @__PURE__ */ jsx(Brandmark, {}), /* @__PURE__ */ jsx("span", {
						className: "nav-brand-text",
						children: "RE: Design"
					})]
				}), /* @__PURE__ */ jsxs("nav", {
					className: "nav-links",
					"aria-label": "Main navigation",
					children: [/* @__PURE__ */ jsx(Link, {
						className: "nav-link",
						to: "/",
						children: /* @__PURE__ */ jsx("span", { children: "Home" })
					}), /* @__PURE__ */ jsx(Link, {
						className: "nav-link",
						to: "/work",
						children: /* @__PURE__ */ jsx("span", { children: "Work" })
					})]
				})]
			})
		}), /* @__PURE__ */ jsx("div", { className: "nav-bg" })]
	});
}
// src/components/seo/PageMetadata.tsx
function setMetaContent(selector, content) {
	let element = document.head.querySelector(selector);
	if (!element) {
		element = document.createElement("meta");
		const [attribute, value] = selector.match(/\[(name|property)="([^"]+)"\]/)?.slice(1) ?? [];
		if (attribute && value) element.setAttribute(attribute, value);
		document.head.appendChild(element);
	}
	element.content = content;
}
function PageMetadata() {
	const location = useLocation();
	useEffect(() => {
		const seo = getPageSeo(location.pathname);
		document.title = seo.title;
		setMetaContent("meta[name=\"description\"]", seo.description);
		setMetaContent("meta[property=\"og:type\"]", "website");
		setMetaContent("meta[property=\"og:title\"]", seo.title);
		setMetaContent("meta[property=\"og:description\"]", seo.description);
		const existingRobots = document.head.querySelector("meta[name=\"robots\"]");
		if (seo.noIndex) setMetaContent("meta[name=\"robots\"]", "noindex,follow");
		else existingRobots?.remove();
		const canonical = document.head.querySelector("link[rel=\"canonical\"]");
		if (canonical) canonical.href = new URL(location.pathname, canonical.href).href;
		const ogUrl = document.head.querySelector("meta[property=\"og:url\"]");
		if (ogUrl && canonical) ogUrl.content = canonical.href;
	}, [location.pathname]);
	return null;
}
// src/App.tsx
var routes = [
	...Object.entries(pages).filter(([path]) => !path.startsWith("/work/websites/")).map(([path, page]) => {
		const Page = page.component;
		return {
			path,
			element: /* @__PURE__ */ jsx(Page, {})
		};
	}),
	{
		path: "/work/websites/:slug",
		element: /* @__PURE__ */ jsx(WebsiteProject, {})
	},
	{
		path: "*",
		element: /* @__PURE__ */ jsx("main", {
			className: "page-content",
			children: /* @__PURE__ */ jsx("section", {
				className: "section light min-100 top",
				children: /* @__PURE__ */ jsxs("div", {
					className: "wrapper",
					children: [/* @__PURE__ */ jsx("h1", { children: "Page not found" }), /* @__PURE__ */ jsx("p", { children: "The page you're looking for doesn't exist or may have moved." })]
				})
			})
		})
	}
];
function AppRoutes() {
	const runtimeAttached = React.useRef(false);
	const [transitionRuntime, setTransitionRuntime] = React.useState(null);
	React.useEffect(() => {
		let intervalId;
		const attachRuntime = () => {
			if (runtimeAttached.current) return true;
			const runtime = window.__RE_TRANSITIONS__;
			if (!runtime?.createReactTransitionRouter) return false;
			const Component = runtime.createReactTransitionRouter({
				React,
				router: {
					useLocation,
					useRoutes
				}
			});
			runtimeAttached.current = true;
			setTransitionRuntime({
				Component,
				config: window.__CONFIG__
			});
			return true;
		};
		if (!attachRuntime()) intervalId = window.setInterval(() => {
			if (attachRuntime() && intervalId !== void 0) window.clearInterval(intervalId);
		}, 50);
		return () => {
			if (intervalId !== void 0) window.clearInterval(intervalId);
		};
	}, []);
	const initCalled = React.useRef(false);
	React.useEffect(() => {
		if (!transitionRuntime || initCalled.current) return;
		const frame = window.requestAnimationFrame(() => {
			if (initCalled.current) return;
			initCalled.current = true;
			window.__RE_TRANSITIONS__?.initPage?.();
		});
		return () => window.cancelAnimationFrame(frame);
	}, [transitionRuntime]);
	if (!transitionRuntime) return null;
	const TransitionController = transitionRuntime.Component;
	return /* @__PURE__ */ jsx(TransitionController, {
		routes,
		config: transitionRuntime.config
	});
}
var hiddenNavRoutes = ["/"];
/**
* Shared application tree used by both the browser router and the
* StaticRouter used during the prerender build.
*/
function AppContent() {
	const location = useLocation();
	const showNavbar = !hiddenNavRoutes.includes(location.pathname);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageMetadata, {}),
		showNavbar && /* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsx(TransitionMask, {}),
		/* @__PURE__ */ jsx("div", {
			className: "smooth-wrapper",
			children: /* @__PURE__ */ jsx("div", {
				className: "smooth-content",
				children: /* @__PURE__ */ jsx(AppRoutes, {})
			})
		})
	] });
}
// src/entry-server.tsx
function render(url) {
	return renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, {
		location: url,
		children: /* @__PURE__ */ jsx(AppContent, {})
	}) }));
}
export { getPageSeo, prerenderPaths, render };
