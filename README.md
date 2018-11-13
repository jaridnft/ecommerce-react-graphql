# E-commerce Apparel Store feat. React & GraphQL

#### Author: Jarid Warren [ <jaridwarren@gmail.com> ]

A sample e-commerce store, 'Sick Fits', that allows users to sign-up, add/edit/remove items to the store, and even check-out items with a (test-mode) credit card purchase. 

## __Motivation__

Sickfits is an opportunity to learn more about React, GraphQL and a host of other modern technologies (listed below) to stay on the cutting edge of web development. In addition, I've wanted to build a fully-functioning E-commerce website with payment processing and an email server to improve my back-end skills.

## __Technology__

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front-end

<img height="80" src="./readme-images/next-js.svg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img height="80" src="./readme-images/react.svg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img height="80" src="./readme-images/apollo.svg">
- **Next.js**: Server-side rendering, application routing, and tooling (built on Webpack)
- **React.js**: Client-side front-end UI framework
- **Apollo Client**: GraphQL queries and mutations, cacheing, and managing application state

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back-end

<img height="80" src="./readme-images/graphql-yoga.png">&nbsp;&nbsp;&nbsp;&nbsp;
<img height="80" src="./readme-images/expressjs.svg">&nbsp;&nbsp;&nbsp;&nbsp; <img height="80" src="./readme-images/prisma.jpg">
- **GraphQL Yoga**: Database layer used to resolve Queries and Mutations, credit card charges with [Stripe](https://www.stripe.com), permissions/authentication
- **Express/node.js**: Server framework underneath Yoga (which includes an email server)
- **Prisma**: CRUD APIs that can integrate with many databases (including postreSQL, mongoDB or mySQL), as well as schema definition

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testing

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img height="80" src="./readme-images/jest-enzyme.jpeg">

- **Jest with Enzyme**: React testing by utilizing Jest's engine to "shallow" render components, and constantly comparing to a snapshot to ensure rendering is consistent

## __Features__

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Item to Store

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit Existing Items

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add to Cart & Checkout

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password Reset

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...and more

## __Code Sample__

The cart component in particular has to read and write to the database many times for its scope. As a result, with Apollo's render props that must have the component nested inside its React tags, the code can get quite messy. A handy npm package, [react-adopt] (https://github.com/pedronauck/react-adopt) can group these together with its `adopt()` method shown below. Hope this is useful to someone!

```
// ./frontend/components/Cart.js:28

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
});

const Cart = () => (
  <Composed>
    {({ user, toggleCart, localState }) => {
      const { me } = user.data;
      if (!me) return null;
      return (
        <CartStyles open={localState.data.cartOpen}>
          <header>
            <CloseButton title="close" onClick={toggleCart}>
              &times;
            </CloseButton>
            <Supreme>
              {me.name}
              's Cart
            </Supreme>
            <p>
              You Have {me.cart.length} Item
              {me.cart.length === 1 ? '' : 's'} in your cart.
            </p>
          </header>
          <ul>
            {me.cart.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>
          <footer>
            <p>{formatMoney(calcTotalPrice(me.cart))}</p>
            {!me.cart.length ? (
              ''
            ) : (
              <TakeMyMoney>
                <SickButton onClick={toggleCart}>Checkout</SickButton>
              </TakeMyMoney>
            )}
          </footer>
        </CartStyles>
      );
    }}
  </Composed>
);

```
