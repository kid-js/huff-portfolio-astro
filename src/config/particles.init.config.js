const particles = Particles.init({
	selector: '.particles-bg',
	color: ['#9290C3', '#836FFF'],
	connectParticles: true,
	sizeVariations: 2,
	minDistance: 205,
	maxParticles: 30,
	speed: 0.275,
});

export { particles };