import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import Error from './ErrorMessage';
import SingleItemStyles from './styles/SingleItemStyles';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No item found for {this.props.id}</p>;
          const item = data.item;
          return (
            <SingleItemStyles>
              {/* Head gets inserted into HTML head by nextjs */}
              <Head>
                <title>Sick Fits | {item.title}</title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className="details">
                <h2>Viewing {item.title}</h2>
                <p>{item.description}</p>
                <div className="buttonList">
                  <Link
                    href={{
                      pathname: 'update',
                      query: { id: item.id }
                    }}
                  >
                    <a>Edit ✏️</a>
                  </Link>
                  <AddToCart id={item.id} />
                  <DeleteItem id={item.id}>Delete This Item</DeleteItem>
                </div>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
