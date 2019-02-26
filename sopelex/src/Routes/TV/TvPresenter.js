import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";


import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`padding: 20px;`;

const TVPresenter = ({ topRated, airingToday, popular, error, loading }) =>
<>
  <Helmet>
    <title>TV Show | Sopelex</title>
  </Helmet>
  {
  loading
    ? <Loader />
    : <Container>
        {topRated &&
          topRated.length > 0 &&
          <Section title="Now Playing TV Shows">
            {topRated.map(tvShow =>
              <Poster
                key={tvShow.id}
                id={tvShow.id}
                imageUrl={tvShow.poster_path}
                title={tvShow.original_name}
                rating={tvShow.vote_average}
                year={
                  tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)
                }
                isMovie={false}
              />
            )}
          </Section>}
        {airingToday &&
          airingToday.length > 0 &&
          <Section title="TV Airing Today Shows">
            {airingToday.map(tvShow =>
              <Poster
                key={tvShow.id}
                id={tvShow.id}
                imageUrl={tvShow.poster_path}
                title={tvShow.original_name}
                rating={tvShow.vote_average}
                year={
                  tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)
                }
                isMovie={false}
              />
            )}
          </Section>}
        {popular &&
          popular.length > 0 &&
          <Section title="TV popular Shows">
            {popular.map(tvShow =>
              <Poster
                key={tvShow.id}
                id={tvShow.id}
                imageUrl={tvShow.poster_path}
                title={tvShow.original_name}
                rating={tvShow.vote_average}
                year={
                  tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)
                }
                isMovie={false}
              />
            )}
          </Section>}
        {error && <Message text={error} />}
      </Container>}
      </>;

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
