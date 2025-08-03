console.log( 'test this' );

// async/await
async function getData() {
    try {
        const foobar = await fetch( '/assets/data/content.json' );
        console.log( foobar );
        const data = await foobar.json();
        console.log( data );
        console.log( data.site_name );

        // put site name on the web page
        const heading = document.querySelector( '.navbar-brand' );
        heading.innerHTML = data.site_name;

        //get side bar holder in var
        const side_bar_holder = document.querySelector( 'aside ul' );

        // loop through lson array for the side bar
        data.side_bar.forEach(menu_item => {

            // create new li
            const new_list_item = document.createElement("li");
            new_list_item.className = "nav_item";

            // check if the current URL path matches the menu item's URL
            const currentPath = window.location.pathname;

            // handle edge case where menu_item.url might be relative
            const isActive = currentPath === menu_item.url || currentPath.endsWith(menu_item.url);
            if (isActive) {
                new_list_item.classList.add("active");
            }

            // add the link in the new li
            new_list_item.innerHTML = `
                <a href="${menu_item.url}" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                    <i class="fa-solid ${menu_item.icon}"></i>
                    <span class="m-0">${menu_item.text}</span>
                </a>
            `;

            // add hr
            

            // add the new li to the side bar holder 'nav ul'
            side_bar_holder.appendChild(new_list_item);
        });

    } catch( error ) {
        console.warn( `Oppsie!: ${error}` );
    }
}
getData();