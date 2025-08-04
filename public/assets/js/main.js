console.log( 'test this' );

async function getData() {
    try {
        const foobar = await fetch( '/assets/data/content.json' );
        const data = await foobar.json();

        // side bar

        // put site name on the web page
        const heading = document.querySelector( '.navbar-brand' );
        heading.innerHTML = data.site_name;

        //get side bar holder in var
        const side_bar_holder = document.querySelector( 'aside ul' );

        // loop through lson array for the side bar
        data.side_bar.forEach((menu_item, index) => {

            // create new li
            const new_list_item = document.createElement( "li" );
            new_list_item.className = "nav_item";

            // check if the current URL path matches the menu item's URL
            const currentPath = window.location.pathname;
            const isActive = currentPath === menu_item.url || currentPath.endsWith(menu_item.url);
            if (isActive) {
                new_list_item.classList.add( "active" );
            }

            // add the link in the new li
            new_list_item.innerHTML = `
                <a href="${menu_item.url}" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                    <i class="fa-solid ${menu_item.icon}"></i>
                    <span class="m-0">${menu_item.text}</span>
                </a>
            `;

            // add the new li to the side bar holder 'nav ul'
            side_bar_holder.appendChild(new_list_item);

            // create hr
            if (index === 5) {
                const hr = document.createElement("hr");
                side_bar_holder.appendChild(hr);
            }
        });
        


        // statistics

        //get statistics holder in var
        const statistics_holder = document.querySelector( '#statistics div' );

        data.statistics_content.forEach(statistics_item => {

            // create new div
            const new_statistics_item = document.createElement( "div" );
            new_statistics_item.className = "col";

            // add the items in the new div
            new_statistics_item.innerHTML = `
                <h3 class="child">${statistics_item.text}</h3>
                <p class="child">${statistics_item.number}</p>
            `;

            // add the new div to the statistics holder
            statistics_holder.appendChild(new_statistics_item);
        });        



        // info cards

        // unresolved tickets

        const tickets_title = document.querySelector( '#tickets-title h5' );
        tickets_title.innerHTML = data.tickets_title;

        const tickets_group = document.querySelector( '#tickets-title p span' );
        tickets_group.innerHTML = data.tickets_group;

        //get tickets holder in var
        const tickets_holder = document.getElementById( 'unresolved-tickets' );

        data.tickets_content.forEach((tickets_item, index) => {

            // create new div
            const new_tickets_item = document.createElement( "div" );
            new_tickets_item.className = "tickets-content";

            // add the items in the new div
            new_tickets_item.innerHTML = `
                <p>${tickets_item.text}</p>
                <span>${tickets_item.number}</span>
            `;

            // add the new div to the tickets holder
            tickets_holder.appendChild(new_tickets_item);

            // create hr
            if (index === 0 || index === 1 || index === 2) {
                const hr_2 = document.createElement("hr");
                tickets_holder.appendChild(hr_2);
            }
        });


        // tasks

        const tasks_title = document.querySelector( '#tasks-title h5' );
        tasks_title.innerHTML = data.tasks_title;

        const tasks_date = document.querySelector( '#tasks-title p' );
        tasks_date.innerHTML = data.tasks_date;

        //get tasks holder in var
        const tasks_holder = document.getElementById( 'tasks' );

        data.tasks_content.forEach((tasks_item, index) => {

            // create new div
            const new_tasks_item = document.createElement( "div" );
            new_tasks_item.className = "tasks-content";

            // add the items in the new div
            new_tasks_item.innerHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="tasks-check">
                    <label class="form-check-label" for="tasks-check">
                        ${tasks_item.text}
                    </label>
                </div>
                <button type="button" id="${tasks_item.button}-btn" class="btn btn">${tasks_item.button}</button>
            `;

            // add the new div to the tasks holder
            tasks_holder.appendChild(new_tasks_item);

            // create hr
            if (index === 0 || index === 1) {
                const hr_3 = document.createElement("hr");
                tasks_holder.appendChild(hr_3);
            }
        });

    } catch( error ) {
        console.warn( `Oppsie!: ${error}` );
    }
}
getData();