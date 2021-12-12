<template>
  <div class="about text-center">
    <h1>This is an about page</h1>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>

    <br />

    <button
      type="button"
      class="btn btn-secondary"
      data-container="body"
      data-toggle="popover"
      data-placement="top"
      data-content="Top popover"
    >
      Popover on top
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-container="body"
      data-toggle="popover"
      data-placement="right"
      data-content="Right popover"
    >
      Popover on right
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-container="body"
      data-toggle="popover"
      data-placement="bottom"
      data-content="Bottom popover"
    >
      Popover on bottom
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-container="body"
      data-toggle="popover"
      data-placement="left"
      data-content="Left popover"
    >
      Popover on left
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.jquery('[data-toggle="popover"]').popover();
  },
};
</script>
