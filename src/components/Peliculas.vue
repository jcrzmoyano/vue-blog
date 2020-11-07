<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Movies</h2>

        <!--Listado películas-->
        <div id="articles">
          <div v-for="pelicula in peliculas" :key="pelicula.title">
            <Pelicula :pelicula="pelicula" />
          </div>
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";
export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  data() {
    return {
      peliculas: [
        {
          title: "Avatar",
          year: 2009,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQwi1JWNQdYCZ4WnwuF6V48jGomiX2A1fkGQ&usqp=CAU",
        },
        {
          title: "Avengers: Endgame",
          year: 2019,
          image:
            "https://cdn-3.expansion.mx/dims4/default/6c3fc51/2147483647/strip/true/crop/897x636+0+0/resize/800x567!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F9d%2Fec%2F8b5b485e41af9595bfe74dcc270a%2Favengers.JPG",
        },
        {
          title: "Titanic",
          year: 1997,
          image:
            "https://titanicsound.files.wordpress.com/2014/11/titanic_movie-hd-1.jpg",
        },
      ],
    };
  },
};
</script>