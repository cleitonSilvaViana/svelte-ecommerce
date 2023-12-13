<script>
	// signals
	import { products } from '$signals/Products.svelte';

	// components
	import Card from '$components/Card.svelte';

	const { data } = $props();
	const { res } = data;

	let skip = res.limit;
	let allProductsLoaded = $state(false);
	const limit = res.limit;
	const total = res.total;

	products.add_products = res.products;

	let search = $state('');

	function load() {
		if (allProductsLoaded) return;

		fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
			.then((res) => res.json())
			.then((res) => (products.add_products = res.products))
			.finally(() => {
				allProductsLoaded = skip === total;
				skip += limit;
				if (skip > total) skip = skip - (skip - total);
				console.log(products.products_list);
			});
	}
</script>

<main class="container">
	<div class="filters">
		<input
			bind:value={search}
			oninput={() => (products.search_product = search)}
			onchange={() => (products.search_product = search)}
			class="search"
			type="text"
			placeholder="Search product in list"
		/>

		<div>
			<label for="">Sort by</label>
			<select name="" id="">
				<option value="">az</option>
				<option value="">za</option>
			</select>
		</div>
	</div>

	<h1>Products</h1>

	<section class="products {search ? 'search_grid' : ''}">
		{#each products.products_list as product}
			<Card {product} />
		{/each}
	</section>

	{#if !allProductsLoaded}
		<button onclick={() => load()}>load more products</button>
	{/if}
</main>

<style>
	.container {
		width: 80vw;
		margin: auto;
		padding: 16px 0;
	}

	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, auto-fit);
	}

	.filters {
		width: 100%;
		padding: 16px 0;
		display: grid;
		grid-template-columns: minmax(240px, 1fr) max-content;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
	}

	.filters div {
		justify-self: flex-end;
	}

	.search {
		display: block;
		outline: none;
		width: 100%;
		max-width: 480px;
		border: 1px solid rgb(197, 197, 197);
		border-radius: 4px;
		padding: 4px 8px;
	}

	.search:focus {
		border-color: rgb(138, 138, 138);
		box-shadow: 1px 0px 3px gray;
	}

	.products {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(204px, 1fr));
		gap: 16px;
	}

	.search_grid {
		grid-template-columns: repeat(auto-fit, minmax(160px, 220px));
	}

	@media screen and (max-width: 799px) {
		.products {
			gap: 24px;
		}
	}

	@media screen and (max-width: 430px) {
		.products {
			gap: 40px;
		}

		.filters {
		grid-template-columns: 1fr;
		}
	}
</style>
