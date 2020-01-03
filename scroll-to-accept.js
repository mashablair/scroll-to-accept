const terms = document.querySelector(".terms-and-conditions");
const button = document.querySelector(".accept");

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;

    // stop observing
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });

ob.observe(terms.lastElementChild);

// The old way to do it:
// function scrollToAccept() {

//   // if no terms elem, bail
//   if (!terms) return;

//   terms.addEventListener("scroll", function(e) {
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
//   });
// }

// scrollToAccept();
