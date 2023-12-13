<script>
	import Card from '$components/Card.svelte';
	import Carrousel from '$components/Carrousel.svelte';
	import { cart } from '$signals/cart.svelte';

	const { data } = $props();
	const { product, products } = data;
</script>

<main class="container">
	<section>
		<Carrousel images={product.images} />
	</section>

	<section class="details">
		<p>Apple</p>
		<h1>Iphone 8</h1>
		<div class="rating">4.7</div>
		<s>$799,99</s>
		<div class="price">
			<h2>$699,99</h2>
			<mark>10% OFF</mark>
		</div>
		<p class="description">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ut. Perferendis
			distinctio tenetur, nesciunt sed deserunt laborum sapiente odit modi libero totam qui
			voluptates, temporibus voluptatem, doloremque ab. Impedit, tempore.
		</p>

		<div class="btns">
			<button class="btn btn--primary">buy</button>
			<button class="btn btn--ghost" onclick={() => (cart.add_product = product)}
				>add to cart</button
			>
		</div>
	</section>
</main>

<h2>Recomended products</h2>
<section class="recomended">
	{#each products.products as product}
		<Card {product} />
	{/each}
</section>

<style>
	.container {
		width: 85vw;
		margin: 0 auto;
	}

	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 16px;

		padding: 24px 0;
	}

	.details {
		max-width: 316px;
	}

	.details h1 {
		font-size: 18px;
		font-weight: 600;
		color: #444;
		margin: 8px 0;
	}

	.rating {
		margin-bottom: 20px;
	}

	.details s {
		font-size: 14px;
		color: gray;
		text-decoration: line-through;
		display: block;
		margin-bottom: 2px;
	}

	.price {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 16px;
		margin: 2px 0 24px;
	}

	.details h2 {
		font-size: 24px;
		font-weight: 600;
		color: #222;
	}

	.details mark {
		font-size: 12px;
		background-color: red;
		color: var(--white);
		padding: 4px 8px;
		border-radius: 4px;
	}

	.description {
		margin: 24px 0;
		font-size: 16px;
		color: #444;
	}

	.btns {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 8px;
	}

	.btn {
		padding: 8px 16px;
		border-radius: 4px;
	}

	.btn--primary {
		background-color: #ddd;
		color: #333;
	}

	.btn--primary:hover {
		background-color: #ccc;
	}

	.btn--primary:active {
		background-color: #aaa;
	}

	.btn--ghost {
		outline: 1px solid gray;
		color: gray;
		background-color: transparent;
	}

	h2 {
		margin-top: 32px;
		margin-bottom: 16px;
	}

	.recomended {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 16px;
	}

	@media screen and (max-width: 430px) {
		main {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}

		.recomended {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
