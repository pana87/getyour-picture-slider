const template = document.createElement("template")
template.innerHTML = /*html*/`

  <style>

    :host {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .left-button,
    .right-button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20vw;
      width: 20vw;
      height: 100%;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.3);
      transition: transform 1s;
      overflow: hidden;
      z-index: 1;
    }

    .left-button:hover,
    .right-button:hover {
      transform: scale(1.1);
    }

    .left-button {
      position: absolute;
      top: 0;
      left: 0;
    }

    .right-button {
      position: absolute;
      top: 0;
      right: 0;
    }

    img {
      width: 100%;
      max-height: 60vh;
    }


  </style>

  <div class="left-button">
    <div>&#8249;</div>
  </div>
  <div class="picture"></div>
  <div class="right-button">
    <div>&#8250;</div>
  </div>
`

export class GetyourPictureSlider extends HTMLElement {

  connectedCallback() {
    const picture = this.shadowRoot.querySelector(".picture")
    picture.append(this.children[0])
  }

  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const leftButton = this.shadowRoot.querySelector(".left-button")
    const rightButton = this.shadowRoot.querySelector(".right-button")

    const picture = this.shadowRoot.querySelector(".picture")

    let position = 0

    leftButton.addEventListener("click", () => {
      picture.innerHTML = ""
      if (position === 0) {
        position = this.children.length - 1
        picture.append(this.children[position].cloneNode())
      } else {
        position = position - 1
        picture.append(this.children[position].cloneNode())

      }
    })

    rightButton.addEventListener("click", () => {
      picture.innerHTML = ""
      if (position === this.children.length - 1) {
        position = 0
        picture.append(this.children[position].cloneNode())
      } else {
        position = position + 1
        picture.append(this.children[position].cloneNode())
      }
    })
  }

}

window.customElements.define("getyour-picture-slider", GetyourPictureSlider)
