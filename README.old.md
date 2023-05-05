# shoe-plug-project

Welcome to our shoe plug website.
This is a React-based shopping website that allows users to browse a list of products, search for specific products, add them to a shopping cart, and check out.

The website uses React Router to handle navigation between different pages of the website, including the product list, search page, shopping cart, individual product pages, and purchase confirmation page.

# routes

/: This is the home page of the application and displays a list of products that the user can browse and add to their shopping cart.

/cart: This page displays the items currently in the user's shopping cart, along with the total price. The user can remove items from their cart on this page.

/productItem/:id: This page displays details of a specific product. The user can add the product to their shopping cart from this page. The :id parameter is a dynamic parameter that corresponds to the ID of the product being displayed.

The product list page displays a list of products retrieved from a local JSON server using the json-server package. The ProductList component is responsible for fetching the data from the server and rendering a list of ProductItem components. Each ProductItem component displays a thumbnail image of the product, along with its name and price. Users can click on an item to go to its individual product page.

In the ProductList component, we made a GET request to fetch the data using fetch:

# get

useEffect(() => {
fetch('http://localhost:3000/shoes')
.then((r) => r.json())
.then((data) => setShoes(data))
.catch((error) => console.log(error));
}, []);

Here, we are making a request to http://localhost:3000/shoes to fetch the shoes data from the JSON server. Once the data is fetched, it is converted to JSON format using the json() method, and then set to the products state using the setShoes function.

The search page allows users to search for products by name. The SearchBar component takes in a search term and calls a function to search through the list of products for matching items.

The shopping cart page displays the current items in the user's shopping cart and the total price. Users can remove items from their cart by clicking a button associated with each item.

The individual product page displays a larger image of the product, along with its name, price, and description. Users can add the item to their shopping cart by clicking a button.

The purchase confirmation page simply displays a confirmation message to the user after they have completed their purchase.

To run the website, you will need to start the JSON server by running :
json-server --watch in your terminal.

Then, in another terminal, run npm start to start the development server.

You can then view the website by going to http://localhost:3000 in your web browser.

Author,
Michal Khakayi.
