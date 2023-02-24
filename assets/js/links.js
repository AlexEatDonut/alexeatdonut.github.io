const github_link = "https://github.com/AlexEatDonut";
const twitter_link = "https://twitter.com/AlexEatDonut";
const youtube_link = "https://www.youtube.com/@AlexEatDonut";
const map_link = "https://tf2maps.net/members/alexeatdonut.29391/#resources";

let link_github = document.querySelectorAll(".link-github");

link_github.forEach((aTag) => {
  aTag.href = github_link;
});

let link_twitter = document.querySelectorAll(".link-twitter");

link_twitter.forEach((aTag) => {
  aTag.href = twitter_link;
});

let link_youtube = document.querySelectorAll(".link-youtube");

link_youtube.forEach((aTag) => {
  aTag.href = youtube_link;
});

let link_map = document.querySelectorAll(".link-map");

link_map.forEach((aTag) => {
  aTag.href = map_link;
});
