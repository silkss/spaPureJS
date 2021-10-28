import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h2>List of Posts</h2>
            <p>Post 1</p>
            <p>Post 2</p>
            <p>Post 3</p>
        `;
    }
}