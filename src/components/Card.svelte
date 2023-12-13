<script>
	import { cart } from '$signals/Cart.svelte.js';
	let { product } = $props();
</script>

<article class="card">
	<div>
		<a href={`/product/${product.id}`}>
			<img class="card__img" src={product.thumbnail} alt={`${product.name} image`} />
		</a>
	</div>

	<div>
		<h3 class="card__title">{product.title}</h3>
		<strong class="card__price">${product.price.toFixed(2)}</strong>
	</div>

	<button class="card__button" onclick={() => (cart.add_product = product)}>Add to cart</button>
</article>

<style>
	.card {
		display: grid;
		gap: 8px;
		grid-template-rows: 160px 1fr 32px;

		overflow: hidden;
		border: none;
		border-radius: 4px;

		box-shadow: 0 0 3px #bebebe;
	}

	.card:hover {
		box-shadow: 1px 1px 3px 1px #bebebe;
	}

	.card__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.card__title {
		text-align: center;
		font-size: 18px;
		font-weight: 600;
	}

	.card__price {
		text-align: center;
		font-size: 24px;
		display: block;
	}

	.card__button {
		border: none;
		width: 100%;
		text-align: center;
		padding: 0.4rem 0;
		text-transform: uppercase;
		font-size: 14px;
	}

	.card__button:hover {
		background-color: #ccc;
	}

	.card__button:active {
		background-color: #aaa;
	}

	@media screen and (max-width: 430px) {
		.card {
			width: 100%;
		}
	}
</style>
