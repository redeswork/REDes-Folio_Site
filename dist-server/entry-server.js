import * as React from "react";
import { StrictMode, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { Link, StaticRouter, useLocation, useParams, useRoutes } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
// src/pages/home/Home.tsx
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "page-content",
		children: /* @__PURE__ */ jsx("section", {
			className: "section hero home-placeholder dark top",
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
								className: "heading bold",
								"data-fitty": true,
								"data-text": "trim",
								style: {
									whiteSpace: "nowrap",
									display: "inline-block",
									width: "auto",
									maxWidth: "100%",
									color: "var(--colour-dark)"
								},
								children: "Site Coming Soon."
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "home-card brand",
							style: {
								fontSize: "var(--text-h3)",
								color: "var(--colour-dark)"
							},
							children: /* @__PURE__ */ jsx("h1", {
								className: "heading bold",
								style: { color: "var(--colour-dark)" },
								children: "RE Design"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "home-card info",
							children: [
								/* @__PURE__ */ jsx(Button, {
									link: "/home-dev",
									text: "/home-dev",
									transitionKey: "swipe-between",
									anim: "splitSwap,iconSwap,colourChange",
									enableLargeIcon: true,
									enableIcon: false,
									rotateIcon: 180,
									rotateLargeIcon: 180
								}),
								/* @__PURE__ */ jsx("div", { style: { height: "1rem" } }),
								/* @__PURE__ */ jsx(Button, {
									link: "/work",
									text: "/work",
									transitionKey: "swipe-between",
									anim: "splitSwap,iconSwap,colourChange",
									enableLargeIcon: true,
									enableIcon: false,
									rotateIcon: 180,
									rotateLargeIcon: 180
								}),
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
function HeroHeader({ variant = "light", heroHeading = "Hero Heading", heroSubHeading = "Hero subheading", heroCopy, children, childrenOverride = false, breadcrumb = true }) {
	const textColours = {
		"dark": "var(--colour-dark)",
		"light": "var(--colour-light)"
	};
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("header", {
		className: "grid",
		style: { rowGap: "0.5rem" },
		children: [!childrenOverride && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
			className: "hero-heading-wrap",
			style: { gridRow: "1/2" },
			children: [breadcrumb && /* @__PURE__ */ jsx(Breadcrumbs, {
				variant,
				includeHome: true
			}), /* @__PURE__ */ jsx("h1", {
				className: "hero-heading light",
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
				/* @__PURE__ */ jsx("h2", { children: heroSubHeading }),
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
function PageStructure({ children, bgClass }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "page-content",
			children
		}),
		/* @__PURE__ */ jsx("div", { className: `page-bg ${bgClass}` }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
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
	"IE": { name: "Immersive Everywhere" },
	"HH": { name: "Hartshorn Hook" }
};
// src/pages/work/websites/projects/websiteData.tsx
var websiteProjects = [{
	title: "The Traitors Live Experience",
	slug: "the-traitors-live-experience",
	client: websiteClients.IE.name
}, {
	title: "Peppa Pig Surprise Party",
	slug: "peppa-pig-surprise-party",
	client: websiteClients.IE.name
}];
// src/components/cards/WorkCard.tsx
function WorkCard({ title = "Work Card", client = "Client name", slug }) {
	return /* @__PURE__ */ jsx(Link, {
		className: "work-card",
		to: `/work/websites/${slug}`,
		"aria-label": `View ${title} website project`,
		children: /* @__PURE__ */ jsx("div", {
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
		})
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
				heroCopy: "A selection of bespoke website design and development projects, from custom Webflow websites to responsive digital experiences for businesses, creative professionals and entertainment clients."
			}), /* @__PURE__ */ jsx("div", {
				className: "grid",
				style: { marginTop: "2rem" },
				children: /* @__PURE__ */ jsx("div", {
					className: "content vertical",
					style: { gridColumn: "1/13" },
					children: websiteProjects.map((project) => /* @__PURE__ */ jsx(WorkCard, {
						title: project.title,
						client: project.client,
						slug: project.slug
					}, project.slug))
				})
			})]
		})
	}) });
}
// src/pages/testPage/TestPage.tsx
function TestPage() {
	return /* @__PURE__ */ jsx(PageStructure, {
		bgClass: "dark",
		children: /* @__PURE__ */ jsx("section", {
			className: "section dark min-100 top",
			children: /* @__PURE__ */ jsx("div", {
				className: "wrapper",
				children: /* @__PURE__ */ jsxs("div", {
					className: "content vertical",
					children: [/* @__PURE__ */ jsx("h1", {
						style: {
							color: "var(--colour-light)",
							marginBottom: "2rem"
						},
						children: "Test Page"
					}), /* @__PURE__ */ jsx(Button, {
						link: "/",
						text: "Test Transition",
						transitionKey: "swipe-between",
						anim: "splitSwap,iconSwap,colourChange",
						enableIcon: false,
						enableLargeIcon: true,
						rotateIcon: 180,
						rotateLargeIcon: 180
					})]
				})
			})
		})
	});
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
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(PageStructure, {
		bgClass: "light",
		children: /* @__PURE__ */ jsx("main", {
			className: "website-project",
			children: /* @__PURE__ */ jsx(Section, {
				classes: "light min-100 top",
				children: !project ? /* @__PURE__ */ jsx("h1", { children: "Project not found" }) : /* @__PURE__ */ jsx(HeroHeader, {
					variant: "dark",
					heroHeading: project.title,
					heroCopy: project.client
				})
			})
		})
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
	...Object.fromEntries(websiteProjects.map((project) => [`/work/websites/${project.slug}`, {
		component: WebsiteProject,
		label: project.title,
		seo: {
			title: `${project.title} | RE Design`,
			description: `${project.title}, a website project for ${project.client} by RE Design.`
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
	const defaultRouteElement = useRoutes(routes);
	if (!transitionRuntime) return defaultRouteElement;
	const TransitionController = transitionRuntime.Component;
	return /* @__PURE__ */ jsx(TransitionController, {
		routes,
		config: transitionRuntime.config
	});
}
/**
* Shared application tree used by both the browser router and the
* StaticRouter used during the prerender build.
*/
function AppContent() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageMetadata, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
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
