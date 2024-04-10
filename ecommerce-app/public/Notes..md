# Notes

# Things to work on:

1. Add state to the cart number

   - Pass context to the navbar
   - Update values from the context provider

2. Build logic for adding/removing/updating items into a cart array
   - Adding to the cart in the products page
     - Each product should have a global status value which indicates if it has been added to the cart or not
     -
3. Add Checkout page
   - Read the cart array
   - list cart array products
   - show total

What is the best way to do the logic behind adding an item to the cart?

- Read the cart array, if id exists in that array then don't render the add to cart button.

- The itemStatus is being stored at the card level right now. This needs to be a global status.
- should the rendering of the Add To Cart button be at the button level or at the card level?
  - If it is at the card level how do we pass this context to the product page?
  -
