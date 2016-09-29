var sponsorsDiv = document.querySelector('#sponsors').querySelector('div > div >div');
var sponsorTemplate = document.querySelector('#sponsor-template');
function enumerateSponsorshipScope(scope) {
  switch(scope) {
    case 'national':
      return 2;
    case 'local':
      return 1;
    default:
      return -1;
  }
}

function enumerateLevel(level) {
  switch(level) {
    case 'gold':
      return 2;
    case 'silver':
      return 1;
    case 'community':
      return 0;
  }
}
fetch('/sponsors')
.then(function(resp) { return resp.json()})
.then(function(sponsors) {
  return sponsors.sort(function(a,b) {
    return b.priority - a.priority;
  })
})
.then(function(sponsors) {
  console.log(sponsors);
  sponsors.forEach(function(sponsor) {
    var sponsorInst = $.clone(sponsorTemplate);
    sponsorInst.querySelector('img').src= sponsor.logo;
    sponsorsDiv.appendChild(sponsorInst);
  });
})
