import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h1>Welcome to Dashboard</h1>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}