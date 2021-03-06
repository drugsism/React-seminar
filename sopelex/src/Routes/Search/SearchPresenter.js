import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`padding: 0px 20px;`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 25px;
`;

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) =>
<>
  <Helmet>
    <title>Search | Sopelex</title>
  </Helmet>
  {
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {
        loading ? <Loader /> : 
        <>
        {movieResult && 
        movieResult.length > 0 && 
            (<Section title="Movies Results">
                {movieResult.map(movie => <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />)}
            </Section>)}
        {tvResult && tvResult.length > 0 && (
            <Section title="TV Show Results">
                {tvResult.map(show => <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
                isMovie={false}
              />)}
            </Section>          
        )}
        {error && <Message text={error} color="#bdc3c7" />}
        {movieResult && tvResult && movieResult.length === 0 && tvResult.length === 0 && <Message text="Not found Movies and TV Shows...." color="#bdc3c7" />}
        </>
    }
  </Container>}
  </>;
SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
