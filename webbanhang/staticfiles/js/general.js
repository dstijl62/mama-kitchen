// $(document).ready(function () {
//   $("#id_name").on("input", function () {
//     let name = $(this).val();
//     name = name.toLowerCase().replace(/đ/g, "d");
//     let slug = slugify(name).replace(/[^\w-]/g, "");
//     $("#id_slug").val(slug);
//   });
// });

$(function () {
  $("#id_name").on("input", function () {
    let name = $(this).val().trim();

    // Tạo slug bằng slugify
    let slug = slugify(name, {
      lower: true, // viết thường
      strict: true, // bỏ ký tự đặc biệt
    });

    $("#id_slug").val(slug);
  });
});
