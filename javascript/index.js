function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(" .date");
    let losAngelesTimeElement = losAngelesElement.querySelector(" .time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Melbourne
  let MelbourneElement = document.querySelector("#melbourne");
  if (MelbourneElement) {
    let MelbourneDateElement = MelbourneElement.querySelector(" .date");
    let MelbourneTimeElement = MelbourneElement.querySelector(" .time");
    let MelbourneTime = moment().tz("Australia/Melbourne");

    MelbourneDateElement.innerHTML = moment().format("MMMM Do YYYY");
    MelbourneTimeElement.innerHTML = MelbourneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value.split("/")[1];
  let cityName = cityTimeZone.replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
