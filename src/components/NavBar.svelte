<script>
	import Aside from './Aside.svelte';
</script>

<header>
	<nav class="container">
		<a class="logo" href="/">Ecommerce</a>
		<a href="/">Home</a>
	</nav>
</header>

<style>
	.container {
		width: 80vw;
		padding: 16px 0;
	}

	header,
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	header {
		background-color: rgb(30, 30, 41);
		height: 48px;
	}

	nav a {
		color: #ddd;
		text-decoration: none;
	}

	.logo {
		font-size: 1.8rem;
	}
</style>
