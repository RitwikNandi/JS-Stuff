import "./style.css";
import { setSuccess } from "./counter.js";
import { headingStuff, boldSpan, imageHandler } from "./helper.js";

document.querySelector("#app").innerHTML = `
<img id="#image" src="https://i.imgflip.com/91cylh.jpg" title="made at imgflip.com"/></div>
    <h5 id="#h6">Ma name is Rick</h5>
    <p id="#para">I am <span id="#span">Pro</span>castinator</p>
    <article id="#article">Stuck in tutorial hell</article>
    <div class="card">
      <button id="#button" type="button"></button>
    </div>
  </div>
`;

headingStuff(document.getElementById("#h6"));
boldSpan(document.getElementById("#span"));
imageHandler(document.getElementById("#article"));
setSuccess(document.getElementById("#button"));
