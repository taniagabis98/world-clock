function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(" .date");
  let losAngelesTimeElement = losAngelesElement.querySelector(" .time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Melbourne
  let MelbourneElement = document.querySelector("#melbourne");
  let MelbourneDateElement = MelbourneElement.querySelector(" .date");
  let MelbourneTimeElement = MelbourneElement.querySelector(" .time");
  let MelbourneTime = moment().tz("Australia/Melbourne");

  MelbourneDateElement.innerHTML = moment().format("MMMM Do YYYY");
  MelbourneTimeElement.innerHTML = MelbourneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
