class Profile extends HTMLElement{

    static get observedAttributes(){
        return ["name", "uid", "city"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/profile/profile.css">
        <section>
        <h1>${this.name}</h1>
        <p>ID: ${this.uid}</p>
        <p><strong>From:${this.city}</strong></p>
        </section>
        `
    }
}

customElements.define("my-profile",Profile);
export default Profile;