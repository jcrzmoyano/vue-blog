<template>
  <div>
    <Slider texto="Welcome to my first Vue project"
            home="true" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Latest posts</h2>

        <!--Listado articulos-->
        <div id="articles">
          <article class="article-item" id="article-template">
            <div class="image-wrap">
              <img
                src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                alt="Paisaje"
              />
            </div>

            <h2>Test posts</h2>
            <span class="date"> 5 min. ago </span>
            <a href="#">Read more</a>

            <div class="clearfix"></div>
          </article>

          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";
export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
  },
};
</script>