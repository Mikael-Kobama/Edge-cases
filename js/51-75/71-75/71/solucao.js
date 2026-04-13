const posts = [
  " Como aprender AWS ",
  "JS no Backend",
  "  ",
  123,
  "Como aprender AWS",
];

const postsArrumados = [...new Set(posts)].map((p) => {
  if (typeof p !== "string" || p.trim().length === 0) {
    p = "slug-invalido";
  }
  return p.trim().toLowerCase().replace(/\s+/g, "-");
});

console.log(postsArrumados);
