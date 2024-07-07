const userName = document.getElementById("userInfo");
const search = document.getElementById("search");
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const userLink = document.getElementById("userLink");
const login = document.getElementById("login");
const created_at = document.getElementById("created_at");
const bio = document.getElementById("bio");
const repoCount = document.getElementById("repoCount");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const userlocation = document.getElementById("location");
const twitter_username = document.getElementById("twitter_username");
const company = document.getElementById("company");
const profileLink = document.getElementById("profileLink");

search.addEventListener("click", (e) => {
  e.preventDefault();
  const userNameValue = userName.value.trim();
  getUserInfo(userNameValue);
});

async function getUserInfo(user) {
  const userInfo = await fetch(`https://api.github.com/users/${user}`);
  const data = await userInfo.json();
  console.log(data);

  avatar.src = data.avatar_url;
  name.textContent = data.name;

  userLink.href = data.html_url;
  login.innerHTML = `@${data.login}`;

  const createddate = data.created_at;
  created_at.innerHTML = createddate.split("T")[0];

  if (data.bio == null) {
    bio.innerHTML = "This Profile has no bio..";
  } else {
    bio.innerHTML = data.bio;
  }

  repoCount.innerHTML = data.public_repos;

  followers.innerHTML = data.followers;

  following.innerHTML = data.following;

  if (data.location == null) {
    userlocation.innerHTML = "Not Available";
  } else {
    userlocation.innerHTML = data.location;
  }

  if (data.twitter_username === null) {
    twitter_username.href = `https://x.com`;
    twitter_username.innerHTML = "@twitter";
  } else {
    twitter_username.href = `https://x.com/${data.twitter_username}`;
    twitter_username.innerHTML = data.twitter_username;
  }

  if (data.company === null) {
    company.innerHTML = "N.A.";
  } else {
    company.innerHTML = data.company;
    profileLink.href = data.html_url;
  }
}
