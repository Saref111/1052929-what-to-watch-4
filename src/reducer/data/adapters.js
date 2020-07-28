export const filmsAdapter = (films) => {
  return films.map((it) => {
    return {
      id: it.id,
      title: it.name,
      src: it.background_image,
      preview: it.preview_video_link,
      movieLink: it.video_link,
      details: {
        bgPoster: it.poster_image,
        cover: it.preview_image,
        genre: it.genre,
        year: it.released,
        rate: it.rating,
        votes: it.scores_count,
        time: it.run_time,
        director: it.director,
        actors: it.starring,
        description: it.description,
      }
    };
  });
};

