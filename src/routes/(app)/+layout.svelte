<script>
    import { fly } from "svelte/transition";
    import { quintOut } from 'svelte/easing';


    import NavBar from "$components/NavBar.svelte";
    import Aside from "$components/Aside.svelte";
    import Footer from '$components/Footer.svelte'

    const { data } = $props();
</script>

<NavBar />
<Aside />

{#key data.url}
<div class="container"
     div   in:fly={{ x: -1000, duration: 300, delay: 250, quintOut}}>
    <slot />
</div>
{/key}

<Footer />