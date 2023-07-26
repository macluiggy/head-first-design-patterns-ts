import Blog from "./Blog";
import Subscriber from "./Subscriber";

const blog = new Blog();
const subscriber1 = new Subscriber("Subscriber 1");
const subscriber2 = new Subscriber("Subscriber 2");

blog.subscribe(subscriber1);
blog.subscribe(subscriber2);

blog.addPost("New post!");
