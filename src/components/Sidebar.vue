<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Post something</h3>
      <a href="#" class="btn btn-success">New post</a>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Search</h3>
      <p>Find the publication you are looking for</p>
      <form>
        <input type="text" name="search" />
        <input type="submit" name="submit" value="Search" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>