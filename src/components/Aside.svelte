<script>
	import { fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { cart } from '$signals/cart.svelte';

	let isVisible = $state(false);

	function toggle() {
		isVisible = !isVisible;
	}
</script>

<button class="float-button" onclick={() => toggle()}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="currentColor"
		class="bi bi-cart2"
		viewBox="0 0 16 16"
	>
		<path
			d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
		/>
	</svg>
</button>

{#if isVisible}
	<aside
		in:slide={{ duration: 300, delay: 0, axis: 'x', easing: quintOut }}
		out:slide={{ duration: 300, delay: 0, axis: 'x' }}
	>
		<section class="aside__header">
			<h1>Your Cart</h1>
			<button onclick={toggle}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-x-lg"
					viewBox="0 0 16 16"
				>
					<path
						d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
					/>
				</svg>
			</button>
		</section>

		<section class="aside__body">
			{#each cart.products_in_cart as product}
				<article
					class="product fly-transition"
					in:fade={{ y: 50, delay: 300, duration: 300 }}
					out:fade={{ x: 50, duration: 300, quintOut }}
				>
					<div class="product__container">
						<a class="product__image" href={`/product/${product.id}`}>
							<img
								src={`https://i.dummyjson.com/data/products/${product.id}/thumbnail.jpg`}
								alt="{product.name} image"
							/>
						</a>

						<div class="product__details">
							<h2 class="product__name">{product.title}</h2>

							<div class="product__price">
								<s>${product.price.toFixed(2)}</s>
								<strong
									>${(product.price - (product.price * product.discountPercentage) / 100).toFixed(
										2
									)}</strong
								>
							</div>
						</div>

						<div class="product__buttons">
							<button onclick={() => (cart.remove_product = product.id)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-trash-fill"
									viewBox="0 0 16 16"
								>
									<path
										d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
									/>
								</svg>
							</button>

							<div class="product__quantity">
								<button onclick={() => (cart.decrement_quantity = product.id)}>-</button>
								<b>{product.quantity}</b>
								<button onclick={() => (cart.increment_quantity = product.id)}>+</button>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</section>

		<section class="aside__footer">
			<table>
				<tbody>
					<tr>
						<td>Subtotal</td>
						<td>${cart.subtotal.toFixed(2)}</td>
					</tr>
					<tr>
						<td>Discount</td>
						<td>- ${cart.discount.toFixed(2)}</td>
					</tr>
					<tr>
						<td>Total</td>
						<td>${cart.total.toFixed(2)}</td>
					</tr>
				</tbody>
			</table>
			<div class="buttons">
				<button class="btn btn-secondary">continue shopping</button>
				<button class="btn btn-primary">checkout</button>
			</div>
		</section>
	</aside>
{/if}
<div
	class="{isVisible ? 'background--active' : 'background--inactive'} background"
	onclick={() => toggle()}
></div>

<style>
	.fly-transition {
		transition: transform 0.5s;
	}

	.float-button {
		position: fixed;
		right: 64px;
		bottom: 64px;
		z-index: 1;

		width: 64px;
		height: 64px;
		background-color: #333;

		border-radius: 50%;
		box-shadow: 0 0 1px #ccc;
		border: none;

		transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}

	.float-button svg {
		color: #ccc;
	}

	.float-button:hover {
		box-shadow: 1px 1px 3px #aaa;
	}

	.background {
		transition: all ease-in-out 0.3s;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 2;
	}

	.background--inactive {
		background-color: transparent;

		width: 0%;
		height: 100%;
	}

	.background--active {
		background-color: #33333371;

		width: 100%;
		height: 100%;
	}

	aside {
		position: fixed;
		right: 0;
		top: 0;
		z-index: 4;

		display: grid;
		grid-template-rows: min-content auto min-content;

		width: 400px;
		height: 100%;

		box-shadow: 1px 3px 7px #333;

		background-color: rgb(49, 49, 49);
	}

	aside section {
		padding: 8px;
	}

	.aside__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 48px;
	}

	.aside__header h1 {
		font-size: 20px;
		color: white;
		margin: 0;
	}

	.aside__header button {
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		padding: 8px;
		border-radius: 8px;

		height: 40px;
		width: 40px;
	}

	.aside__header button svg {
		height: 24px;
		width: 24px;
		color: #bbb;

		transition: all ease-in-out 0.2s;
	}

	.aside__header button:hover svg {
		color: #ddd;
	}

	.aside__header button:active {
		outline: solid 4px rgba(255, 255, 255, 0.534);
	}

	.aside__header button:active svg {
		color: #fff;
	}

	.aside__body {
		background-color: #fff;
		display: grid;
		gap: 16px;
		grid-template-rows: repeat(auto-fit, 80px);

		overflow: hidden;
		overflow-y: scroll;
	}

	.product {
		display: flex;
		gap: 8px;
	}

	.product button {
		background-color: transparent;

		padding: 0;
		height: 40px;
		width: 40px;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 4px;
		border: none;
	}

	.product button:hover {
		outline: 3px solid rgb(235, 235, 235);
	}

	.product button:active {
		transition: all ease-in 0.2s;
		outline-color: gray;
	}

	.product__container {
		width: 100%;
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		gap: 8px;
	}

	.product__details {
	}

	.product__name {
		font-size: 14px;
		font-weight: 600;
	}

	.product__price > s {
		font-size: 10px;
		text-decoration: line-through;
	}

	.product__price > strong {
		font-size: 18px;
		display: block;
	}

	.product__image > img {
		width: 80px;
		height: 100%;
		object-fit: cover;
	}

	.product__buttons {
		display: flex;
		flex-direction: column;
		align-items: end;
		justify-content: space-between;
	}

	.product__quantity {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4px;
	}

	.product__quantity b {
		padding: 4px;
		font-size: 14px;
		font-weight: 400;
	}
	.aside__footer,
	table,
	tbody {
		width: 100%;
		color: #ddd;
	}

	tbody > tr > td:last-of-type {
		text-align: right;
	}

	.buttons {
		margin-top: 16px;

		display: flex;
		align-items: center;
		justify-content: end;
	}

	.btn {
		color: #ddd;
		border: none;
		border-radius: 4px;
		padding: 8px 16px;
	}

	.btn-primary {
		background-color: #ddd;
		color: #333;
	}

	.btn-primary:hover {
		background-color: #aaa;
		box-shadow: 1px 1px 2px #aaa;
	}

	.btn-primary:active {
		color: #ddd;
		background-color: gray;
	}

	.btn-secondary {
		color: #ccc;
		background-color: transparent;
	}

	.btn-secondary:active {
		color: #fff;
	}

	@media screen and (max-width: 799px) {
		.products {
			gap: 24px;
		}

		.float-button {
			position: fixed;
			right: 24px;
			bottom: 32px;
		}

	}

	@media screen and (max-width: 430px) {
		
		aside {
			width: 100%;
		}
	}
</style>
