import { useMemo, useState } from "react";
import "./App.css";
import {
	siteMeta,
	navLinks,
	headerActions,
	saleBanner,
	heroSlides,
	skillSpotlight,
	trendingCourses,
	trustedCompanies
} from "./data/content";

function App() {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const activeSlide = useMemo(
		() => heroSlides[activeSlideIndex] || heroSlides[0],
		[activeSlideIndex]
	);

	const FALLBACK_HERO_IMAGE =
		"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";
	const FALLBACK_COURSE_IMAGE =
		"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80";

	const handleHeroImageError = (event) => {
		event.currentTarget.onerror = null;
		event.currentTarget.src = FALLBACK_HERO_IMAGE;
	};

	const handleCourseImageError = (event) => {
		event.currentTarget.onerror = null;
		event.currentTarget.src = FALLBACK_COURSE_IMAGE;
	};

	return (
		<div className="app">
			{saleBanner && (
				<div className="banner" id="sale">
					<div className="banner__copy">
						<span className="banner__message">{saleBanner.message}</span>
						<span className="banner__subtext">{saleBanner.subtext}</span>
					</div>
					<a className="banner__cta" href={saleBanner.ctaHref}>
						{saleBanner.ctaLabel}
					</a>
				</div>
			)}
			<header className="header">
				<div className="header__logo">{siteMeta.brand}</div>
				<form className="header__search" role="search" aria-label="Site search">
					<label htmlFor="global-search" className="sr-only">
						Search Udemy courses
					</label>
					<input
						id="global-search"
						type="search"
						placeholder={siteMeta.searchPlaceholder}
						autoComplete="off"
					/>
					<button type="submit" aria-label="Search">
						🔍
					</button>
				</form>
				<nav className="header__nav" aria-label="Primary">
					{navLinks.map((link) => (
						<a key={link.id} className="header__link" href={link.href || "#"}>
							{link.label}
						</a>
					))}
				</nav>
				<div className="header__actions">
					<button type="button" className="header__icon-button">
						{siteMeta.cartLabel}
					</button>
					{headerActions.map((action) => (
						<button
							key={action.id}
							type="button"
							className={`header__action header__action--${action.variant}`}
						>
							{action.label}
						</button>
					))}
				</div>
			</header>

			<main>
				<section className="hero" id="hero">
					<div className="hero__grid">
						<div className="hero__copy">
							{activeSlide.eyebrow && (
								<p className="hero__eyebrow">{activeSlide.eyebrow}</p>
							)}
							<h1 className="hero__title">{activeSlide.title}</h1>
							<p className="hero__subtitle">{activeSlide.description}</p>
							<ul className="hero__highlights">
								{activeSlide.highlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>
							<a className="hero__cta" href={activeSlide.ctaHref}>
								{activeSlide.ctaLabel}
							</a>
							<div className="hero__controls" role="tablist" aria-label="Hero slides">
								{heroSlides.map((slide, index) => {
									const isActive = index === activeSlideIndex;
									return (
										<button
											key={slide.id}
											type="button"
											role="tab"
											aria-selected={isActive}
											className={`hero__control${isActive ? " hero__control--active" : ""}`}
											onClick={() => setActiveSlideIndex(index)}
										>
											<span className="sr-only">{slide.title}</span>
										</button>
									);
								})}
							</div>
						</div>
						<div className="hero__visual">
							{activeSlide.image?.src && (
								<img
									className="hero__art"
									src={activeSlide.image.src}
									alt={activeSlide.image.alt}
									loading="lazy"
									onError={handleHeroImageError}
								/>
							)}
						</div>
					</div>
				</section>

				<section className="skills" id="skills">
					<div className="section-heading">
						<h2>{skillSpotlight.title}</h2>
						<p>{skillSpotlight.description}</p>
					</div>
					<div className="skills__tags">
						{skillSpotlight.tags.map((tag) => (
							<button key={tag.id} type="button" className="skills__tag">
								<span>{tag.label}</span>
								<span className="skills__metric">{tag.learners}</span>
							</button>
						))}
					</div>
					<a className="skills__cta" href={skillSpotlight.ctaHref}>
						{skillSpotlight.ctaLabel}
					</a>
				</section>

				<section className="trending" id="courses">
					<div className="section-heading">
						<h2>{trendingCourses.title}</h2>
						<p>{trendingCourses.description}</p>
					</div>
					<div className="course-grid">
						{trendingCourses.items.map((course) => (
							<article key={course.id} className="course-card">
								{course.image && (
									<img
										className="course-card__image"
										src={course.image}
										alt={`Cover art for ${course.title}`}
										loading="lazy"
										onError={handleCourseImageError}
									/>
								)}
								<div className="course-card__body">
									<h3 className="course-card__title">{course.title}</h3>
									<p className="course-card__meta">{course.author}</p>
									<p className="course-card__rating">
										<span className="course-card__rating-value">
											{course.rating.toFixed(1)}
										</span>
										<span aria-hidden="true" className="course-card__star">
											*
										</span>
										<span className="course-card__rating-count">
											({course.ratingCount})
										</span>
									</p>
									<p className="course-card__price">{course.price}</p>
								</div>
							</article>
						))}
					</div>
					<a className="trending__cta" href={trendingCourses.viewAllHref}>
						{trendingCourses.viewAllLabel}
					</a>
				</section>

				<section className="trusted">
					<div className="section-heading">
						<h2>{trustedCompanies.title}</h2>
						<p>{trustedCompanies.subtitle}</p>
					</div>
					<div className="trusted__logos">
						{trustedCompanies.companies.map((company) => (
							<span key={company.id} className="trusted__logo">
								<img src={company.logo} alt={`${company.name} logo`} loading="lazy" />
							</span>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
