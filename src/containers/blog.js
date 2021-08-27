import notebook from '../images/notebook.png'

const Blog = () => {
    return (
        <section id="blog" className="window">
            <div className="window-header">
                <h3>Blog</h3>
            </div>
            <div className="window-body">
                <div id="blog-header">
                    <a href="https://medium.com/@jmhar" target="_blank"><img src={notebook} /></a>
                </div>
            </div>
        </section>
            )
}

            export default Blog;