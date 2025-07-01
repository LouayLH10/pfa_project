import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Entetepge from '../ui/Entetepge';
import Blogcard from '../ui/Blogcard';
import SearchForm from '../components/SearchForm';

const BlogPage = () => {
    return (
        <div>
            <Navbar />
            <Entetepge page="Our Blog" path="/Blog" />
            <div className='search-container'>
            <SearchForm/>
            </div>
            <div className="blog-container">
                <Blogcard title="Blog Post 1" desc="Description of blog post 1" />
                <Blogcard title="Blog Post 2" desc="Description of blog post 2" />
                <Blogcard title="Blog Post 3" desc="Description of blog post 3" />
                <Blogcard title="Blog Post 4" desc="Description of blog post 4" />
                <Blogcard title="Blog Post 5" desc="Description of blog post 5" />
                <Blogcard title="Blog Post 6" desc="Description of blog post 6" />
          
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;