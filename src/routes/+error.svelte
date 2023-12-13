<main>
    <h1>Error - 404</h1>
    <h3>Page is not found</h3>
    <button><a href="/">Home</a></button>
</main>

<style>
    main {
        height: 100dvh;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        justify-content: center;


        background-color: #666;
    }

    h1 {
        font-size: 32px;
        color: #ddd;
        
    }

    h3 {
        font-size: 24px;
        color: #ccc;
    }

    button {
        background-color: #ddd;
        color: #333;
        border-radius: 4px;
        padding: 8px 16px;
        box-shadow: 0 0 3px #eee;
        border: none;
    }


    a {
        color: #333;
        text-decoration: none;
    }

    button:active {
        background-color: #aaa;
    }

    button:active a {
        color: #111;
    }

</style>
