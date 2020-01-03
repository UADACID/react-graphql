import React from 'react';
// import logo from './logo.svg';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import './App.css';


const App = () => (
  <Query
    query={gql`
      {
        photos {
          url
          author
          comments {
            author
            text
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.photos.map((photo) => (
        <div key={photo.url}>
          {photo.author}
          <img src={photo.url} alt={photo.author} />
          {photo.comments.map((comment, index) => (
            <div key={index}>
              {comment.author}: {comment.text}
            </div>
          ))}
        </div>
      ));
    }}
  </Query>
);

export default App;
