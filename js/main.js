marked.setOptions({
  gfm: true,
  highlight: false,
  tables: false,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  langPrefix: false
});

$(document).ready(() => {
  let editor = $("#editor");
  let preview = $("#preview");

  const setPreview = () => {
    let value = editor.val();

    preview.html(marked(value));
  };

  const checkSize = id => {
    let button = $(id);

    if (button.attr("class").includes("col-md-6")) {
      button.removeClass("col-md-6").addClass("col-md-12");
    } else {
      button.removeClass("col-md-12").addClass("col-md-6");
    }
  };

  const render = () => {
    $("#editor").on("input", () => {
      setPreview();
    });

    $("#button-1").on("click", () => {
      checkSize("#block-one");
    });

    $("#button-2").on("click", () => {
      checkSize("#block-two");
    });
  };

  render();
  setPreview();
});
