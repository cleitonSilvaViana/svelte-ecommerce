<script>
	const { images } = $props();
	let thumbnail = $state(images[images.length - 1]);

	function select(image) {
		thumbnail = image;
	}

	function isActive(image) {
		return thumbnail === image ? 'active' : '';
	}
</script>

<section class="carrousel">
	<div>
		<img class="carrousel__thumbnail" src={thumbnail} alt="..." />
	</div>

	<div class="carrousel__img-options">
		{#each images as image}
			<button class="carrousel__img-option {isActive(image)}" onclick={() => select(image)}>
				<img src={image} alt="..." />
			</button>
		{/each}
	</div>
</section>

<style>
	.carousel {
		width: 100%;
		overflow: hidden;
	}

	.carrousel__thumbnail {
		width: 100%;
		height: 320px;

		object-fit: contain;
		background-color: lightgray;

		transition: all ease-in 0.2s;
	}

	.carrousel__thumbnail:hover {
		box-shadow: 1px 1px 2px 1px lightgray;
	}

	.carrousel__img-options {
		margin-top: 16px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 8px;
	}

	.carrousel__img-option {
		border: none;
		outline: 1 px solid lightgray;
	}

	.carrousel__img-option:hover {
		box-shadow: 0px 1px 2px 1px lightgray;
	}

	.carrousel__img-option img {
		width: 100%;
	}

	.active {
		box-shadow: 0px 1px 2px 1px gray;
	}

	@media screen and (max-width: 430px) {
		.carrousel {
			width: 100%;
		}

		.carrousel__thumbnail {
			width: 100%;
		}

		.carrousel__img-options {
			width: 100%;
			display: grid;
			gap: 4px;
			grid-template-columns: repeat(auto-fit, minmax(40px, 79px));
		}
	}
</style>
